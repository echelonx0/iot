#include "Arduino.h"
#include "heltec.h"  // This includes everything we need for the Heltec board

// OTAA Parameters
uint8_t devEui[] = { 0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x06, 0xE0, 0x19 };
uint8_t appEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appKey[] = { 0x12, 0x94, 0x2C, 0x7A, 0xD8, 0x29, 0x90, 0x6C, 
                     0x0C, 0x5B, 0xA9, 0x1B, 0x0E, 0x8D, 0xE5, 0x61 };

// Transmission settings                    
#define BAND    868E6  // you can set band here directly,e.g. 868E6,915E6
uint32_t txDutyCycle = 20000; // 20 seconds

void setup() {
    // Initialize Heltec hardware
    Heltec.begin(true /*Display Enable*/, 
                 true /*LoRa Enable*/, 
                 true /*Serial Enable*/, 
                 true /*PABOOST Enable*/,
                 BAND /*long BAND*/);

    delay(300);
    
    // Display startup message
    Heltec.display->clear();
    Heltec.display->setFont(ArialMT_Plain_16);
    Heltec.display->drawString(0, 0, "Starting...");
    Heltec.display->display();
    
    Serial.println("Device initialized");
}

void loop() {
    static uint32_t lastSendTime = 0;
    
    if (millis() - lastSendTime > txDutyCycle) {
        String message = "Hello, LoRa!";
        
        // Send the message
        LoRa.beginPacket();
        LoRa.print(message);
        LoRa.endPacket();
        
        // Update display
        Heltec.display->clear();
        Heltec.display->setFont(ArialMT_Plain_16);
        Heltec.display->drawString(0, 0, "Sending: ");
        Heltec.display->drawString(0, 20, message);
        Heltec.display->display();
        
        Serial.println("Message sent: " + message);
        
        lastSendTime = millis();
    }
}