There are two methods of flashing ROMs with HardSPL; the **Flash Center** method or the **SD card** method. Most LZX and Micro ROMs require you to flash using the SD card method, so check the description of the custom ROM you want for more info.

### Flash Center with HardSPL:

1. Open the HardSPL folder and remove the `.nbh` file that is located in there. Replace it with the `.nbh` file you downloaded with your favorite ROM.

2. Run `ROMUpdateUtility.exe`

3. You've installed a custom ROM on HardSPL.

### Flash through SD Card with HardSPL:

Unfortunately, sometimes this can be a bit more complicated. Make sure you use an SD card and not an SDHC card for best results.

1. Make sure your SD card is formatted to Fat32. If not, backup the data and format through an SD Card reader on your Windows computer. (Open computer, Right click, Select format)

2. Place the `.nbh` file you downloaded with the ROM into the root of the storage card and rename it HERAIMG.nbh

3. Open bootloader on your phone by holding the **CAMERA** and **RESET** buttons.

  * If it displays a white screen with blue text that says **Checking SD contents** and then **Update Image**, proceed to step the next step.
  * If it immediately goes into the colored bootloader screen, it appears your phone's bootloader is not finding your SD card. If your sdcard is SDHC (larger than 2GB), it won't work. 
  * Some SD cards require special formatting. Plug the SD card into your computer using an SD card reading and right click on Computer and click **Manage**. Click **Disk Management** on the right pane. Select the SD card from the list and right click and select **Format**. Under **Allocation Unit Size**, enter **4096**. Format and ignore any errors. Proceed with steps 2-4. If it does not work even with this adjustment, your SD card might be too slow.

4. When it says **Update Image** in blue letters, use the volume slider to slide down. This can take a LONG TIME to check and flash. Leave it alone until it gives an error or finishes. 

5. Once done, it will say, **Success. Press Any Key**. Press down on the volume slider button again. Now you are on the colorscreen again. 

6. Hold down your power button to turn off your phone, and then turn your phone back on. Estimating 10-15 minutes.

7. If it all goes well, your new ROM will boot up. Be patient, the first boot could take a long time.

> Note: On my phone, it would not boot if the SDCard is plugged in. Try removing it after your ROM is installed.

If you have HardSPL and something screws up the phone, don't panic. Just use the [[WING Reflash]] to go back to the original system.
