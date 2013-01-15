This is the manual method for unlocking a [[S2011]] device, as shown on Sony's Website.

## Requirements

* [[Android SDK Platform Tools]] - Provides `adb` and `fastboot`
* [Modified android_winusb.inf-file](http://developer.sonymobile.com/downloads/drivers/fastboot-driver/)

## Get Unlock Code

1. Go to [Sony's Step 1 Unlock Site.](http://unlockbootloader.sonymobile.com/unlock/step1) Once there, click **Yes**.
2. Pick up your phone and call `*#06#*` on the phone dialer. You will see your **IMEI number**.
3. Go back to the website and type in your **Name**, **email address** and your **IMEI number**. Click **Submit**.
4. The website will generate an unlock code. Save it somewhere safe.

## Install Drivers for Phone (Windows)

{{Note|Make sure that the [[Android SDK Platform Tools]] are set up correctly before proceeding.}}

{{Note|Linux and Mac have drivers built-in.}}

1. Turn off your phone.
2. Hold the unlock button ({{Key|Volume Up}} on most phones) and plug it into a PC. The blue led will light up. 
3. Windows will ask you to provide a driver file. Point to the `android_winusb.inf` file and your phone will be recognized.
  * If that didn't work, try installing [Flashtool](http://androxyde.github.com/), which will also install the needed drivers.

## Unlock the Bootloader

{{Note|Make sure that your phone is fully charged before proceeding.}}

1. Turn off your phone.
2. Enter Bootloader Mode: Hold the unlock button ({{Key|Volume Up}} on most phones) and plug it into a PC. The blue led will light up.

  * If this doesn't work, enable **Settings > Developer Options > USB Debugging** on your phone, plug it into the computer, and use the command `adb reboot-bootloader`. on your computer.

3. Enter this command. If you get something similar to `Version: 0.x`, your phone is recognized and you can proceed.

    fastboot -i 0x0fce getvar version

4. Unlock the bootloader with this command.

{{Warning|Replace `0xKEY` with the unlock code given by Sony's website.}}

    fastboot -i 0x0fce oem unlock 0xKEY
    
5. Your phone is now unlocked. Check the [[S2011 Unlocked Flashing]] guide to install a custom ROM.

## Sources

* [Sony Mobile - Bootloader Unlock](http://unlockbootloader.sonymobile.com/unlock/)
* [XDA-Developers:mihahn - Unlock the bootloader of 2011 xperia devices](http://forum.xda-developers.com/showthread.php?p=31376248)