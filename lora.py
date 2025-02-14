#include "Arduino.h"
#include "LoRaWan_APP.h"
#include "heltec.h"  // Changed from HT_board.h to heltec.h
#include "display.h" // For OLED display functionality

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
    // Initialize Serial for debugging
    Serial.begin(115200);
    
    // Initialize Heltec hardware (display, LoRa, etc)
    Heltec.begin(true /*Display Enable*/, 
                 true /*LoRa Enable*/, 
                 true /*Serial Enable*/,  
                 true /*PABOOST Enable*/, 
                 BAND /*long BAND*/);
                 
    // Display init message
    Heltec.display->clear();
    Heltec.display->setTextAlignment(TEXT_ALIGN_LEFT);
    Heltec.display->setFont(ArialMT_Plain_10);
    Heltec.display->drawString(0, 0, "LoRaWAN Node");
    Heltec.display->display();
    
    // Initialize LoRaWAN
    LoRaWAN.init(LORAWAN_CLASS_A, ACTIVE_REGION);
    
    // Set credentials
    LoRaWAN.setDevEui(devEui);
    LoRaWAN.setAppEui(appEui);
    LoRaWAN.setAppKey(appKey);
    LoRaWAN.setAdaptiveDR(true);
    
    // Join network
    LoRaWAN.join();
    
    Serial.println("Setup complete, joining network...");
}

void loop() {
    // Check if joined
    if (LoRaWAN.joined() && !LoRaWAN.busy()) {
        // Prepare data
        prepareTxFrame();
        
        // Send data
        LoRaWAN.send(appDataSize, appData, appPort, isTxConfirmed);
        
        // Update display
        Heltec.display->clear();
        Heltec.display->drawString(0, 0, "Sending data...");
        Heltec.display->display();
        
        Serial.println("Data sent!");
    }
    
    // Wait for next transmission
    delay(txDutyCycle);
}

void prepareTxFrame() {
    appDataSize = 4;
    appData[0] = 0x00;  // Add your sensor data here
    appData[1] = 0x01;
    appData[2] = 0x02;
    appData[3] = 0x03;
}