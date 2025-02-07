#include "LoRaWan_APP.h"

// Device Configuration
#define REGION                  LORAMAC_REGION_US915
#define CLASS                   CLASS_A

// LoRaWAN Credentials
uint8_t devEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appEui[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };
uint8_t appKey[] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };

void setup() {
  Serial.begin(115200);
  
  // Initialize LoRaWAN
  deviceState = DEVICE_STATE_INIT;
}

void loop() {
  switch(deviceState) {
    case DEVICE_STATE_INIT: {
      // Set LoRaWAN parameters
      LoRaWAN.setDevEui(devEui);
      LoRaWAN.setAppEui(appEui);
      LoRaWAN.setAppKey(appKey);
      deviceState = DEVICE_STATE_JOIN;
      break;
    }
    case DEVICE_STATE_JOIN: {
      // Attempt to join network
      if(LoRaWAN.joined() == false) {
        LoRaWAN.join();
      } else {
        deviceState = DEVICE_STATE_SEND;
      }
      break;
    }
    case DEVICE_STATE_SEND: {
      // Prepare and send data
      appData[0] = random(0, 255);
      appDataSize = 1;
      LoRaWAN.send();
      deviceState = DEVICE_STATE_CYCLE;
      break;
    }
    case DEVICE_STATE_CYCLE: {
      // Wait before next transmission
      delay(10000);
      deviceState = DEVICE_STATE_SEND;
      break;
    }
  }
}