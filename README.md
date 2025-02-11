# Heltec ESP32 LoRaWAN Sensor Project

## Overview
A LoRaWAN communication project using Heltec ESP32 WiFi LoRa 32 V3 board for sensor data transmission.

## Hardware Requirements
- Heltec ESP32 WiFi LoRa 32 V3
- LoRaWAN Network Server Account (The Things Network recommended)

## Setup Instructions
1. Install Arduino IDE
2. Add Heltec ESP32 board support
3. Install Heltec ESP32 Dev-Boards library
4. Configure LoRaWAN credentials
5. Select appropriate region settings

## Configuration
- Replace placeholder credentials in code:
  ```cpp
  uint8_t devEui[] = { /* Your DevEUI */ };
  uint8_t appEui[] = { /* Your AppEUI */ };
  uint8_t appKey[] = { /* Your AppKey */ };
  ```

## Key Features
- OTAA (Over-The-Air Activation)
- Configurable transmission interval
- Random data generation for testing
- State machine-based LoRaWAN communication

## Troubleshooting
- Verify network credentials
- Check region and frequency settings
- Ensure antenna connection

## License
Open-source. MIT License.
