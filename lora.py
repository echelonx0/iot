#include "LoRaWan_APP.h"
#include "Arduino.h"

/*
OTAA Keys - Fill these with the values from your TTN console
*/
uint8_t devEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appKey[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };

// Define the data rate and transmission power for your region
#define DR_NUM DR_3
#define TX_POWER_NUM TX_POWER_0

// Message to send
uint8_t appData[64];
uint8_t appDataSize = 0;

bool overTheAirActivation = true;
bool loraWanAdr = true;
bool isTxConfirmed = true;
uint32_t appTxDutyCycle = 15000; // Transmission interval in milliseconds

void setup() {
    Serial.begin(115200);
    while (!Serial);
    
    Serial.println("Heltec LoRaWAN Example");
    
    // Initialize LoRa chip
    Mcu.begin();
    
    deviceState = DEVICE_STATE_INIT;
}

void loop() {
    switch (deviceState) {
        case DEVICE_STATE_INIT: {
            // Initialize the LoRaWAN stack
            LoRaWAN.init(loraWanAdr, isTxConfirmed, DR_NUM, TX_POWER_NUM, appTxDutyCycle);
            deviceState = DEVICE_STATE_JOIN;
            break;
        }
        case DEVICE_STATE_JOIN: {
            Serial.println("Joining network...");
            LoRaWAN.join();
            deviceState = DEVICE_STATE_CYCLE;
            break;
        }
        case DEVICE_STATE_CYCLE: {
            // Schedule next packet transmission
            txDutyCycleTime = appTxDutyCycle + randr(0, APP_TX_DUTYCYCLE_RND);
            LoRaWAN.cycle(txDutyCycleTime);
            deviceState = DEVICE_STATE_SLEEP;
            break;
        }
        case DEVICE_STATE_SEND: {
            prepareTxFrame();
            LoRaWAN.send();
            deviceState = DEVICE_STATE_CYCLE;
            break;
        }
        case DEVICE_STATE_SLEEP: {
            LoRaWAN.sleep(loraWanClass);
            break;
        }
        default:
            deviceState = DEVICE_STATE_INIT;
            break;
    }
}

// Prepare data to send
void prepareTxFrame() {
    appDataSize = 4;
    appData[0] = 0x00; // Add your sensor data here
    appData[1] = 0x01;
    appData[2] = 0x02;
    appData[3] = 0x03;
}