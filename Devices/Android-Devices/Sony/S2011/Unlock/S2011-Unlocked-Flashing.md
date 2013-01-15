You will need to flash the kernel manually with `fastboot` each time you  install a new ROM.

## Requirements

You will need:

* [[Android SDK Platform Tools]] (if not already installed)
* A Custom ROM (uses the `.zip` extension, don't extract)
* A kernel (usually named `boot.img`)

1. Send the device into fastboot mode.
2. Run this command using the boot.img that you want:

    fastboot flash boot boot.img

## Custom Recovery

1. Turn off your device.
2. Hold {{Key|Volume Down}} while turning on your device.
3. You will enter ClockworkMod Recovery.

---

Now you select backup and restore and you backup your current rom. Then go on:

See on the thread of the rom you want to install, what has to be formatted or wiped, for example:
format /system
format /data
format /cache
wipe data/factory reset
etc

You do this and then you choose "install zip from sd card" > "choose zip" and you select the installation zip. 

After the installation has finished, you sometimes have to flash gapps (=google apps like playstore etc). You do this with the same procedure (install zip from sd card etc).

After that reboot phone and enjoy.

---

## Sources

* [XDA-Developers - Install custom kernel/rom on 2011 xperia device](http://forum.xda-developers.com/showthread.php?t=1879982)