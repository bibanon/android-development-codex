## Recovery Flashing

* You are going to need to install a recovery such as TWRP or CWM

### TWRP

* **Notice**: You need adb and fastboot installed for this to work

1. Download the latest version of TWRP [here](http://techerrata.com/browse/twrp2/bacon)
2. Make sure you have USB debugging enabled and plug your phone into your computer
   * If it isn't, go to settings and scroll down to the bottom. Click About phone. Tap Build number until it says that you have enabled developer settings. Now go back to settings and click Developer options. Look for USB debugging or Android debugging and enable it.

3. In your command line with adb, type `adb reboot bootloader`
4. Your device should now be in fastboot mode.
5. Type `fastboot flash recovery filename.img`
   * Change "filename" to the name of the recovery image file.
6. Now reboot your device.
7. Your device is now ready to flash root

## Rooting

### SuperSu

* **Notice**: You need adb and fastboot installed for this to work

1. Download the latest version of SuperSu [here](http://download.chainfire.eu/supersu) onto your phone
2. In your command line, type `adb reboot recovery`
3. Your device should now be in TWRP recovery.
4. Click "Install" and select UPDATE-SuperSU-(the version number).zip
5. Swipe to confirm the flash
   * If it did not say it successfully flashed, try redownloading the file
6. You can now reboot to the system
