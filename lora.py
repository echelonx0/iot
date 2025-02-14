#include "Arduino.h"
#include "LoRaWan_APP.h"
#include "heltec.h" // Changed from HT_board.h to heltec.h

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
uint8_t appData[LORAWAN_APP_DATA_MAX_SIZE];
uint8_t appDataSize = 0;

void setup() {
    Serial.begin(115200);
    delay(1500);
    Serial.println("LoRaWAN Node");
    
    // Initialize Heltec board
    Heltec.begin(true /*DisplayEnable Enable*/, 
                 true /*LoRa Enable*/, 
                 true /*Serial Enable*/, 
                 true /*LoRaWAN Enable*/, 
                 ACTIVE_REGION /*LoRaWAN Region*/);
    
    // Configure LoRaWAN parameters
    LoRaWAN.setDevEui(devEui);
    LoRaWAN.setAppEui(appEui);
    LoRaWAN.setAppKey(appKey);
    LoRaWAN.setConfirmedMessageRetryTime(confirmedNbTrials);
    LoRaWAN.setTxConfirmed(isTxConfirmed);
    
    // Start join procedure
    LoRaWAN.joinOTAA();
    Serial.println("Joining network...");
}

void loop() {
    if (LoRaWAN.isJoined()) {
        if (LoRaWAN.busy()) {
            return;
        }
        
        if (LoRaWAN.available()) {
            // Process any received data here
            processDownLinkFrame(LoRaWAN.read());
        }
        
        if (LoRaWAN.txAvailable()) {
            prepareTxFrame(appPort);
            LoRaWAN.send(appPort, appData, appDataSize);
            Serial.println("Sending frame...");
        }
    }
    
    delay(txDutyCycle);
}

static void prepareTxFrame(uint8_t port) {
    appDataSize = 4;
    appData[0] = 0x00;  // Add your sensor data here
    appData[1] = 0x01;
    appData[2] = 0x02;
    appData[3] = 0x03;
}

static void processDownLinkFrame(McpsIndication_t *mcpsIndication) {
    if (!mcpsIndication) return;
    
    Serial.printf("Received %d bytes on port %d:\n", 
                 mcpsIndication->BufferSize, 
                 mcpsIndication->Port);
                 
    for(uint8_t i = 0; i < mcpsIndication->BufferSize; i++) {
        Serial.printf("%02X ", mcpsIndication->Buffer[i]);
    }
    Serial.println();
}