#include "Arduino.h"
#include "heltec.h"

// Message settings
#define BAND    868E6  // LoRa frequency band
#define TX_INTERVAL 20000  // 20 seconds between transmissions

// Message counter
uint32_t messageCount = 0;

void setup() {
    // Initialize Serial first for debugging
    Serial.begin(115200);
    
    // Add delay to allow serial to initialize
    delay(300);
    
    // Initialize Heltec hardware with correct parameters for V3
    if (!Heltec.begin(true /*DisplayEnable*/, 
                      true /*LoRaEnable*/, 
                      true /*SerialEnable*/, 
                      true /*PABOOST*/, 
                      BAND /*long BAND*/)) {
        Serial.println("Heltec initialization failed!");
        while (1);
    }
    
    // Display startup message
    Heltec.display->clear();
    Heltec.display->setTextAlignment(TEXT_ALIGN_LEFT);
    Heltec.display->setFont(ArialMT_Plain_16);
    Heltec.display->drawString(0, 0, "LoRa Initializing...");
    Heltec.display->display();
    
    Serial.println("Setup complete");
}

void loop() {
    static uint32_t lastSendTime = 0;
    
    if (millis() - lastSendTime > TX_INTERVAL) {
        String message = "Msg #" + String(messageCount++);
        
        // Start LoRa packet
        LoRa.beginPacket();
        LoRa.print(message);
        bool success = LoRa.endPacket();

        // Update display
        Heltec.display->clear();
        Heltec.display->drawString(0, 0, "Sending: ");
        Heltec.display->drawString(0, 20, message);
        if (success) {
            Heltec.display->drawString(0, 40, "Success!");
        } else {
            Heltec.display->drawString(0, 40, "Failed!");
        }
        Heltec.display->display();

        // Debug output
        Serial.print("Sending message: ");
        Serial.println(message);
        
        lastSendTime = millis();
    }
}