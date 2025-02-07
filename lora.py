#include "LoRaWan_APP.h"

// LoRaWAN Credentials
char devEui[] = "YOUR_DEV_EUI";
char appEui[] = "YOUR_APP_EUI";
char appKey[] = "YOUR_APP_KEY";

void setup() {
  Serial.begin(115200);
  
  // Initialize LoRaWAN parameters
  deviceState = DEVICE_STATE_INIT;
}

void loop() {
  switch(deviceState) {
    case DEVICE_STATE_INIT: {
      // Set LoRaWAN parameters using library methods
      LoRaWAN.setDeviceClass(CLASS_A);
      LoRaWAN.setDataRateIndex(5);  // Adjust based on your region
      LoRaWAN.setActivation(LORAMAC_ACTIVATION_OTAA);
      deviceState = DEVICE_STATE_JOIN;
      break;
    }
    case DEVICE_STATE_JOIN: {
      if(LoRaWAN.join()) {
        deviceState = DEVICE_STATE_SEND;
      }
      break;
    }
    case DEVICE_STATE_SEND: {
      appData[0] = random(0, 255);
      appDataSize = 1;
      LoRaWAN.send();
      deviceState = DEVICE_STATE_CYCLE;
      break;
    }
    case DEVICE_STATE_CYCLE: {
      delay(10000);
      deviceState = DEVICE_STATE_SEND;
      break;
    }
    default:
      break;
  }
}