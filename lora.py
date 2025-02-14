#include "Arduino.h"
#include "heltec.h"

// Message settings
#define BAND 868E6  // Set Band for LoRa (868MHz for Europe)
#define TX_INTERVAL 20000  // 20 seconds between transmissions

void setup() {
    // Initialize Heltec hardware (display + LoRa)
    Heltec.begin(true /*DisplayEnable Enable*/, 
                 true /*Heltec.LoRa Disable*/, 
                 true /*Serial Enable*/, 
                 true /*PABOOST Enable*/, 
                 BAND /*long BAND*/);

    delay(300);
    
    // Display startup message
    Heltec.display->clear();
    Heltec.display->setFont(ArialMT_Plain_16);
    Heltec.display->drawString(0, 0, "Starting...");
    Heltec.display->display();

    Serial.println("Setup complete");
}

void loop() {
    static uint32_t lastSendTime = 0;
    
    if (millis() - lastSendTime > TX_INTERVAL) {
        String message = "Hello, LoRa!";

        // Send the message
        LoRa.beginPacket();
        LoRa.print(message);
        LoRa.endPacket();

        // Update display
        Heltec.display->clear();
        Heltec.display->drawString(0, 0, "Sending: ");
        Heltec.display->drawString(0, 20, message);
        Heltec.display->display();

        Serial.println("Message sent: " + message);
        lastSendTime = millis();
    }
}