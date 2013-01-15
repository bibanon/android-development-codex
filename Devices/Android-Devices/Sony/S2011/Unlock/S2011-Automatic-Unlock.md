This is the automatic method to unlock a [[S2011]] xperia device. It uses the [SE Bootloader Unlocking Tool by quangnhut123](http://forum.xda-developers.com/showthread.php?t=1560613)

## Requirements

* [SE Bootloader Unlocking Tool by quangnhut123](http://forum.xda-developers.com/showthread.php?t=1560613)

## Unlocking the bootloader

1. Extract "SE Bootloader_Unlocking_Relocking_1.6.rar" and you'll find out "Flashtool-drivers.exe", run it to install. Check all drivers/phones, just to be sure all drivers are installed

2. Go to phone and call `*#06#*` on the dialpad to get your IMEI.

3. Open the unlocking tool. In the first text field, enter the first 14 digits of your IMEI.

4. Press the **Get Unlock Code** button. Your unlock code will automatically appear in the **Unlock Code Box**.

5. Now turn off the phone, hold {{Key|Volume Up}} and while pressing it you connect the USB cable to the computer. 

6. The blue led should appear, which means you are in `fastboot` mode to unlock bootloader.

7. Click the **Unlock BL** button. The program will automatically unlock your bootloader.

After that, check the [[S2011 Unlocked Flashing]] guide to install a custom ROM.

## Sources

* [Sony Mobile - Bootloader Unlock](http://unlockbootloader.sonymobile.com/unlock/)
* [XDA-Developers:mihahn - Unlock the bootloader of 2011 xperia devices](http://forum.xda-developers.com/showthread.php?p=31376248)