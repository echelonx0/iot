ERROR 1
FQBN: Heltec-esp32:esp32:heltec_wifi_lora_32_V3
Using board 'heltec_wifi_lora_32_V3' from platform in folder: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2
Using core 'esp32' from platform in folder: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2

cmd /c if exist "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\partitions.csv" COPY /y "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\partitions.csv" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\partitions.csv"
cmd /c if not exist "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\partitions.csv" if exist "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\variants\\heltec_wifi_lora_32_V3\\partitions.csv" COPY "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\variants\\heltec_wifi_lora_32_V3\\partitions.csv" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\partitions.csv"
cmd /c if not exist "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\partitions.csv" COPY "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\tools\\partitions\\default_8MB.csv" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\partitions.csv"
cmd /c IF EXIST "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\bootloader.bin" ( COPY /y "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\bootloader.bin" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\WiFi_Kit_32_V3_FactoryTest.ino.bootloader.bin" ) ELSE ( IF EXIST "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\variants\\heltec_wifi_lora_32_V3\\bootloader.bin" ( COPY "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\variants\\heltec_wifi_lora_32_V3\\bootloader.bin" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\WiFi_Kit_32_V3_FactoryTest.ino.bootloader.bin" ) ELSE ( "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esptool_py\\4.6\\esptool.exe" --chip esp32s3 elf2image --flash_mode dio --flash_freq 80m --flash_size 8MB -o "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\WiFi_Kit_32_V3_FactoryTest.ino.bootloader.bin" "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3\\bin\\bootloader_qio_80m.elf" ) )
esptool.py v4.6
Creating esp32s3 image...
Merged 1 ELF section
Successfully created esp32s3 image.
cmd /c if exist "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\build_opt.h" COPY /y "C:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest\\build_opt.h" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\build_opt.h"
cmd /c if not exist "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\build_opt.h" type nul > "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\build_opt.h"
cmd /c type nul > "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0/file_opts"
Detecting libraries used...
C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp-xs3\2302/bin/xtensa-esp32s3-elf-g++ -c @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/cpp_flags -w -Os -w -x c++ -E -CC -DF_CPU=240000000L -DARDUINO=10607 -DARDUINO_HELTEC_WIFI_LORA_32_V3 -DARDUINO_ARCH_ESP32 -DARDUINO_BOARD="HELTEC_WIFI_LORA_32_V3" -DARDUINO_VARIANT="heltec_wifi_lora_32_V3" -DARDUINO_PARTITION_default_8MB -DARDUINO_HOST_OS="windows" -DARDUINO_FQBN="Heltec-esp32:esp32:heltec_wifi_lora_32_V3:UploadSpeed=921600,CPUFreq=240,DebugLevel=none,LoopCore=1,EventsCore=1,EraseFlash=none,LORAWAN_REGION=0,LoRaWanDebugLevel=0,LORAWAN_DEVEUI=0,LORAWAN_PREAMBLE_LENGTH=0,SLOW_CLK_TPYE=0" -DESP32 -DCORE_DEBUG_LEVEL=0 -DARDUINO_RUNNING_CORE=1 -DARDUINO_EVENT_RUNNING_CORE=1 -DREGION_EU868 -DMCU_ESP32_S3 -DHELTEC_BOARD=30 -DWIFI_LORA_32_V3 -DSLOW_CLK_TPYE=0 -DRADIO_CHIP_SX1262 -DLoRaWAN_DEBUG_LEVEL=0 -DACTIVE_REGION=LORAMAC_REGION_EU868 -DLORAWAN_PREAMBLE_LENGTH=8 -DLORAWAN_DEVEUI_AUTO=0 -DHELTEC_WIFI_LORA_32_V3 -DARDUINO_USB_MODE=1 -DARDUINO_USB_CDC_ON_BOOT=0 -DARDUINO_USB_MSC_ON_BOOT=0 -DARDUINO_USB_DFU_ON_BOOT=0 @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/defines -IC:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest -iprefix C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/include/ @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/includes -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/qio_qspi/include -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\cores\esp32 -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\variants\heltec_wifi_lora_32_V3 @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/build_opt.h @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/file_opts C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0\sketch\WiFi_Kit_32_V3_FactoryTest.ino.cpp -o nul
Alternatives for LoRaWan_APP.h: [Heltec ESP32 Dev-Boards@2.1.2]
ResolveLibrary(LoRaWan_APP.h)
  -> candidates: [Heltec ESP32 Dev-Boards@2.1.2]
C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp-xs3\2302/bin/xtensa-esp32s3-elf-g++ -c @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/cpp_flags -w -Os -w -x c++ -E -CC -DF_CPU=240000000L -DARDUINO=10607 -DARDUINO_HELTEC_WIFI_LORA_32_V3 -DARDUINO_ARCH_ESP32 -DARDUINO_BOARD="HELTEC_WIFI_LORA_32_V3" -DARDUINO_VARIANT="heltec_wifi_lora_32_V3" -DARDUINO_PARTITION_default_8MB -DARDUINO_HOST_OS="windows" -DARDUINO_FQBN="Heltec-esp32:esp32:heltec_wifi_lora_32_V3:UploadSpeed=921600,CPUFreq=240,DebugLevel=none,LoopCore=1,EventsCore=1,EraseFlash=none,LORAWAN_REGION=0,LoRaWanDebugLevel=0,LORAWAN_DEVEUI=0,LORAWAN_PREAMBLE_LENGTH=0,SLOW_CLK_TPYE=0" -DESP32 -DCORE_DEBUG_LEVEL=0 -DARDUINO_RUNNING_CORE=1 -DARDUINO_EVENT_RUNNING_CORE=1 -DREGION_EU868 -DMCU_ESP32_S3 -DHELTEC_BOARD=30 -DWIFI_LORA_32_V3 -DSLOW_CLK_TPYE=0 -DRADIO_CHIP_SX1262 -DLoRaWAN_DEBUG_LEVEL=0 -DACTIVE_REGION=LORAMAC_REGION_EU868 -DLORAWAN_PREAMBLE_LENGTH=8 -DLORAWAN_DEVEUI_AUTO=0 -DHELTEC_WIFI_LORA_32_V3 -DARDUINO_USB_MODE=1 -DARDUINO_USB_CDC_ON_BOOT=0 -DARDUINO_USB_MSC_ON_BOOT=0 -DARDUINO_USB_DFU_ON_BOOT=0 @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/defines -IC:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest -iprefix C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/include/ @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/includes -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/qio_qspi/include -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\cores\esp32 -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\variants\heltec_wifi_lora_32_V3 -Ic:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/build_opt.h @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/file_opts C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0\sketch\WiFi_Kit_32_V3_FactoryTest.ino.cpp -o nul
Alternatives for SPI.h: [SPI@2.0.0]
ResolveLibrary(SPI.h)
  -> candidates: [SPI@2.0.0]
C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp-xs3\2302/bin/xtensa-esp32s3-elf-g++ -c @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/cpp_flags -w -Os -w -x c++ -E -CC -DF_CPU=240000000L -DARDUINO=10607 -DARDUINO_HELTEC_WIFI_LORA_32_V3 -DARDUINO_ARCH_ESP32 -DARDUINO_BOARD="HELTEC_WIFI_LORA_32_V3" -DARDUINO_VARIANT="heltec_wifi_lora_32_V3" -DARDUINO_PARTITION_default_8MB -DARDUINO_HOST_OS="windows" -DARDUINO_FQBN="Heltec-esp32:esp32:heltec_wifi_lora_32_V3:UploadSpeed=921600,CPUFreq=240,DebugLevel=none,LoopCore=1,EventsCore=1,EraseFlash=none,LORAWAN_REGION=0,LoRaWanDebugLevel=0,LORAWAN_DEVEUI=0,LORAWAN_PREAMBLE_LENGTH=0,SLOW_CLK_TPYE=0" -DESP32 -DCORE_DEBUG_LEVEL=0 -DARDUINO_RUNNING_CORE=1 -DARDUINO_EVENT_RUNNING_CORE=1 -DREGION_EU868 -DMCU_ESP32_S3 -DHELTEC_BOARD=30 -DWIFI_LORA_32_V3 -DSLOW_CLK_TPYE=0 -DRADIO_CHIP_SX1262 -DLoRaWAN_DEBUG_LEVEL=0 -DACTIVE_REGION=LORAMAC_REGION_EU868 -DLORAWAN_PREAMBLE_LENGTH=8 -DLORAWAN_DEVEUI_AUTO=0 -DHELTEC_WIFI_LORA_32_V3 -DARDUINO_USB_MODE=1 -DARDUINO_USB_CDC_ON_BOOT=0 -DARDUINO_USB_MSC_ON_BOOT=0 -DARDUINO_USB_DFU_ON_BOOT=0 @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/defines -IC:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest -iprefix C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/include/ @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/includes -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/qio_qspi/include -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\cores\esp32 -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\variants\heltec_wifi_lora_32_V3 -Ic:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\SPI\src @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/build_opt.h @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/file_opts C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0\sketch\WiFi_Kit_32_V3_FactoryTest.ino.cpp -o nul
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\BH1750.cpp
Alternatives for Wire.h: [Wire@2.0.0]
ResolveLibrary(Wire.h)
  -> candidates: [Wire@2.0.0]
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\BMP180.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\GXHTC.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_Display.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_DisplayUi.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_TinyGPS++.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_st7735.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_st7735_fonts.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_st7736.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\HT_st7789spi.cpp
Alternatives for Adafruit_GFX.h: [Adafruit GFX Library@1.11.11]
ResolveLibrary(Adafruit_GFX.h)
  -> candidates: [Adafruit GFX Library@1.11.11]
Alternatives for Adafruit_I2CDevice.h: [Adafruit BusIO@1.17.0]
ResolveLibrary(Adafruit_I2CDevice.h)
  -> candidates: [Adafruit BusIO@1.17.0]
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\LoRaWan_APP.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\clk.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\da217.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\board.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\delay.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\gpio-board.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\gpio.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\sx1262-board.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\sx126x.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\sx1276-board.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\driver\sx1276.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\heltec.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\lora\LoRa.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\LoRaMac.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\LoRaMacClassB.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\LoRaMacConfirmQueue.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\LoRaMacCrypto.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\aes.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\cmac.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\Region.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionAS923.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionAU915.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionCN470.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionCN779.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionCommon.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionEU433.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionEU868.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionIN865.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionKR920.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionUS915-Hybrid.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\region\RegionUS915.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\loramac\utilities.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src\radio\radio.c
Using cached library dependencies for file: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\SPI\src\SPI.cpp
Using cached library dependencies for file: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\Wire\src\Wire.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library\Adafruit_GFX.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library\Adafruit_GrayOLED.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library\Adafruit_SPITFT.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library\glcdfont.c
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO\Adafruit_BusIO_Register.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO\Adafruit_GenericDevice.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO\Adafruit_I2CDevice.cpp
Using cached library dependencies for file: c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO\Adafruit_SPIDevice.cpp
Generating function prototypes...
C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp-xs3\2302/bin/xtensa-esp32s3-elf-g++ -c @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/cpp_flags -w -Os -w -x c++ -E -CC -DF_CPU=240000000L -DARDUINO=10607 -DARDUINO_HELTEC_WIFI_LORA_32_V3 -DARDUINO_ARCH_ESP32 -DARDUINO_BOARD="HELTEC_WIFI_LORA_32_V3" -DARDUINO_VARIANT="heltec_wifi_lora_32_V3" -DARDUINO_PARTITION_default_8MB -DARDUINO_HOST_OS="windows" -DARDUINO_FQBN="Heltec-esp32:esp32:heltec_wifi_lora_32_V3:UploadSpeed=921600,CPUFreq=240,DebugLevel=none,LoopCore=1,EventsCore=1,EraseFlash=none,LORAWAN_REGION=0,LoRaWanDebugLevel=0,LORAWAN_DEVEUI=0,LORAWAN_PREAMBLE_LENGTH=0,SLOW_CLK_TPYE=0" -DESP32 -DCORE_DEBUG_LEVEL=0 -DARDUINO_RUNNING_CORE=1 -DARDUINO_EVENT_RUNNING_CORE=1 -DREGION_EU868 -DMCU_ESP32_S3 -DHELTEC_BOARD=30 -DWIFI_LORA_32_V3 -DSLOW_CLK_TPYE=0 -DRADIO_CHIP_SX1262 -DLoRaWAN_DEBUG_LEVEL=0 -DACTIVE_REGION=LORAMAC_REGION_EU868 -DLORAWAN_PREAMBLE_LENGTH=8 -DLORAWAN_DEVEUI_AUTO=0 -DHELTEC_WIFI_LORA_32_V3 -DARDUINO_USB_MODE=1 -DARDUINO_USB_CDC_ON_BOOT=0 -DARDUINO_USB_MSC_ON_BOOT=0 -DARDUINO_USB_DFU_ON_BOOT=0 @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/defines -IC:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest -iprefix C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/include/ @C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/flags/includes -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\tools\esp32-arduino-libs\idf-release_v5.1-bd2b9390ef\esp32s3/qio_qspi/include -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\cores\esp32 -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\variants\heltec_wifi_lora_32_V3 -Ic:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\SPI\src -IC:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\Wire\src -Ic:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library -Ic:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/build_opt.h @C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0/file_opts C:\Users\ChrisK\AppData\Local\arduino\sketches\E5688471174683FCFEC130B0866B14C0\sketch\WiFi_Kit_32_V3_FactoryTest.ino.cpp -o C:\Users\ChrisK\AppData\Local\Temp\2301772989\sketch_merged.cpp
C:\Users\ChrisK\AppData\Local\Arduino15\packages\builtin\tools\ctags\5.8-arduino11/ctags -u --language-force=c++ -f - --c++-kinds=svpf --fields=KSTtzns --line-directives C:\Users\ChrisK\AppData\Local\Temp\2301772989\sketch_merged.cpp
Compiling sketch...
"C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp-xs3\\2302/bin/xtensa-esp32s3-elf-g++" -MMD -c "@C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3/flags/cpp_flags" -w -Os -DF_CPU=240000000L -DARDUINO=10607 -DARDUINO_HELTEC_WIFI_LORA_32_V3 -DARDUINO_ARCH_ESP32 "-DARDUINO_BOARD=\"HELTEC_WIFI_LORA_32_V3\"" "-DARDUINO_VARIANT=\"heltec_wifi_lora_32_V3\"" -DARDUINO_PARTITION_default_8MB "-DARDUINO_HOST_OS=\"windows\"" "-DARDUINO_FQBN=\"Heltec-esp32:esp32:heltec_wifi_lora_32_V3:UploadSpeed=921600,CPUFreq=240,DebugLevel=none,LoopCore=1,EventsCore=1,EraseFlash=none,LORAWAN_REGION=0,LoRaWanDebugLevel=0,LORAWAN_DEVEUI=0,LORAWAN_PREAMBLE_LENGTH=0,SLOW_CLK_TPYE=0\"" -DESP32 -DCORE_DEBUG_LEVEL=0 -DARDUINO_RUNNING_CORE=1 -DARDUINO_EVENT_RUNNING_CORE=1 -DREGION_EU868 -DMCU_ESP32_S3 -DHELTEC_BOARD=30 -DWIFI_LORA_32_V3 -DSLOW_CLK_TPYE=0 -DRADIO_CHIP_SX1262 -DLoRaWAN_DEBUG_LEVEL=0 -DACTIVE_REGION=LORAMAC_REGION_EU868 -DLORAWAN_PREAMBLE_LENGTH=8 -DLORAWAN_DEVEUI_AUTO=0 -DHELTEC_WIFI_LORA_32_V3 -DARDUINO_USB_MODE=1 -DARDUINO_USB_CDC_ON_BOOT=0 -DARDUINO_USB_MSC_ON_BOOT=0 -DARDUINO_USB_DFU_ON_BOOT=0 "@C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3/flags/defines" "-IC:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\WiFi_Kit_32_V3_FactoryTest" -iprefix "C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3/include/" "@C:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3/flags/includes" "-IC:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\tools\\esp32-arduino-libs\\idf-release_v5.1-bd2b9390ef\\esp32s3/qio_qspi/include" "-IC:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\cores\\esp32" "-IC:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\variants\\heltec_wifi_lora_32_V3" "-Ic:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\libraries\\Heltec_ESP32_Dev-Boards\\src" "-IC:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\libraries\\SPI\\src" "-IC:\\Users\\ChrisK\\AppData\\Local\\Arduino15\\packages\\Heltec-esp32\\hardware\\esp32\\3.0.2\\libraries\\Wire\\src" "-Ic:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\libraries\\Adafruit_GFX_Library" "-Ic:\\Users\\ChrisK\\OneDrive\\Desktop\\PYTHON\\Arduino\\libraries\\Adafruit_BusIO" "@C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0/build_opt.h" "@C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0/file_opts" "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\sketch\\WiFi_Kit_32_V3_FactoryTest.ino.cpp" -o "C:\\Users\\ChrisK\\AppData\\Local\\arduino\\sketches\\E5688471174683FCFEC130B0866B14C0\\sketch\\WiFi_Kit_32_V3_FactoryTest.ino.cpp.o"
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:4:6: error: conflicting declaration 'char devEui []'
    4 | char devEui[] = "YOUR_DEV_EUI";
      |      ^~~~~~
In file included from C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:1:
c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src/LoRaWan_APP.h:49:16: note: previous declaration as 'uint8_t devEui []'
   49 | extern uint8_t devEui[];
      |                ^~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:5:6: error: conflicting declaration 'char appEui []'
    5 | char appEui[] = "YOUR_APP_EUI";
      |      ^~~~~~
c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src/LoRaWan_APP.h:50:16: note: previous declaration as 'uint8_t appEui []'
   50 | extern uint8_t appEui[];
      |                ^~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:6:6: error: conflicting declaration 'char appKey []'
    6 | char appKey[] = "YOUR_APP_KEY";
      |      ^~~~~~
c:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards\src/LoRaWan_APP.h:51:16: note: previous declaration as 'uint8_t appKey []'
   51 | extern uint8_t appKey[];
      |                ^~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino: In function 'void loop()':
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:19:15: error: 'class LoRaWanClass' has no member named 'setDeviceClass'
   19 |       LoRaWAN.setDeviceClass(CLASS_A);
      |               ^~~~~~~~~~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:20:15: error: 'class LoRaWanClass' has no member named 'setDataRateIndex'
   20 |       LoRaWAN.setDataRateIndex(5);  // Adjust based on your region
      |               ^~~~~~~~~~~~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:21:15: error: 'class LoRaWanClass' has no member named 'setActivation'
   21 |       LoRaWAN.setActivation(LORAMAC_ACTIVATION_OTAA);
      |               ^~~~~~~~~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:21:29: error: 'LORAMAC_ACTIVATION_OTAA' was not declared in this scope
   21 |       LoRaWAN.setActivation(LORAMAC_ACTIVATION_OTAA);
      |                             ^~~~~~~~~~~~~~~~~~~~~~~
C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\WiFi_Kit_32_V3_FactoryTest\WiFi_Kit_32_V3_FactoryTest.ino:26:22: error: could not convert 'LoRaWAN.LoRaWanClass::join()' from 'void' to 'bool'
   26 |       if(LoRaWAN.join()) {
      |          ~~~~~~~~~~~~^~
      |                      |
      |                      void

Using library Heltec ESP32 Dev-Boards at version 2.1.2 in folder: C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Heltec_ESP32_Dev-Boards 
Using library SPI at version 2.0.0 in folder: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\SPI 
Using library Wire at version 2.0.0 in folder: C:\Users\ChrisK\AppData\Local\Arduino15\packages\Heltec-esp32\hardware\esp32\3.0.2\libraries\Wire 
Using library Adafruit GFX Library at version 1.11.11 in folder: C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_GFX_Library 
Using library Adafruit BusIO at version 1.17.0 in folder: C:\Users\ChrisK\OneDrive\Desktop\PYTHON\Arduino\libraries\Adafruit_BusIO 
exit status 1

Compilation error: conflicting declaration 'char devEui []'