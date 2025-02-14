#include "Arduino.h"
#include "LoRaWan_APP.h"
#include "HT_board.h"

// Forward declare the callback functions
static void prepareTxFrame(uint8_t port);
static void processDownLinkFrame(McpsIndication_t *mcpsIndication);

/* OTAA credentials */
uint8_t devEui[] = { 0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x06, 0xE0, 0x19 };
uint8_t appEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appKey[] = { 0x12, 0x94, 0x2C, 0x7A, 0xD8, 0x29, 0x90, 0x6C, 
                     0x0C, 0x5B, 0xA9, 0x1B, 0x0E, 0x8D, 0xE5, 0x61 };

/* Message settings */
uint8_t appPort = 2;
uint32_t txDutyCycle = 20000;
bool isTxConfirmed = true;
uint8_t confirmedNbTrials = 4;

/* Application data buffer */
RUI_LORA_STATUS_T app_lora_status;
uint8_t appData[LORAWAN_APP_DATA_MAX_SIZE];
uint8_t appDataSize = 0;

void setup() {
    // Initialize Serial for debugging
    Serial.begin(115200);
    delay(1500);
    Serial.println("LoRaWAN Node");
    
    // Initialize LoRaWAN
    if (api.lorawan.nwm.get() != RUI_LORAWAN) {
        api.lorawan.nwm.set(RUI_LORAWAN);
        delay(1000);
    }
    
    // Set LoRaWAN configuration
    api.lorawan.band.set(ACTIVE_REGION);
    api.lorawan.dev_eui.set(devEui);
    api.lorawan.app_eui.set(appEui);
    api.lorawan.app_key.set(appKey);
    api.lorawan.confirm.set(isTxConfirmed);
    api.lorawan.retry.set(confirmedNbTrials);
    
    // Register callback for preparing data
    api.lorawan.register_send_cb(prepareTxFrame);
    // Register callback for receiving data
    api.lorawan.register_recv_cb(processDownLinkFrame);
    
    // Start join procedure
    if (api.lorawan.join()) {
        Serial.println("Join request sent");
    }
}

void loop() {
    // Handle LoRaWAN events
    api.system.lpm.set(RUI_SLEEP_MODE_NONE);
    api.lorawan.run();
    
    if (api.lorawan.join_status.get() == RUI_JOINED) {
        delay(txDutyCycle);
        // Send data
        if (api.lorawan.send(appPort, appData, appDataSize, isTxConfirmed)) {
            Serial.println("Sending frame...");
        }
    }
}

static void prepareTxFrame(uint8_t port) {
    appDataSize = 4;
    appData[0] = 0x00;  // Add your sensor data here
    appData[1] = 0x01;
    appData[2] = 0x02;
    appData[3] = 0x03;
}

static void processDownLinkFrame(McpsIndication_t *mcpsIndication) {
    Serial.printf("Received %d bytes on port %d:\n", 
                 mcpsIndication->BufferSize, 
                 mcpsIndication->Port);
                 
    for(uint8_t i = 0; i < mcpsIndication->BufferSize; i++) {
        Serial.printf("%02X ", mcpsIndication->Buffer[i]);
    }
    Serial.println();
}