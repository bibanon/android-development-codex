Once upon a time, Smartphones were made to be Mini-Desktop PCs, or at least texting machines. They would be able to run desktop-quality Linux apps on a small screen.

And the Motorola Photon Q 4G LTE was the best of them all. The last great keyboard Android phone.

Those times are now gone. Multitouch screens have all but taken over the market. So this phone is a rare breed.

You can find one of these for just $50 on eBay, and a SIM card modification is available (you can have it soldered on for you for $100).

## Unlock Bootloader

This is one of the first Motorola phones that had an unlockable, unencrypted bootloader. It's pretty easy to do, and after that you can install ClockworkMod or TWRP without a sweat.

* [Motorola Photon 4G LTE Bootloader Unlock](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a)

> **Note:** If you entered the unlock key incorrectly, you will get an error: _"Your device does not quality for bootloader unlock"._ Don't panic, this is just the default response for invalid codes. You should check that the unlock code is all on one line with no extra spaces, and try again.

## Installing Custom Recovery and SuperSU

After unlocking, it's pretty easy to install TWRP and root the phone. Just fastboot flash recovery, and then enter recovery and install SuperSU.

* [TWRP for Motorola Photon Q 4G LTE](https://goo.im/devs/OpenRecovery/asanti/) - Download the latest version from here.
* [SuperSU](http://download.chainfire.eu/695/SuperSU/UPDATE-SuperSU-v2.45.zip)

To enter recovery after flashing, completely turn off the phone, and hold the Volume Up and Power buttons together.

## Other Mods

* [XDA-Developers - Remapping Keys on Hardware Keyboard](http://forum.xda-developers.com/photon-q-4g-lte/general/remapping-keys-hardware-keyboard-t2940957)

## Custom ROMs

Unfortunately, age has not treated this phone all that well, due to proprietary device drivers that have to be bitbanged to support newer kernels. Kitkat ROMs seem to be struggling to hang on, especially after Motorola cancelled the Kitkat update. But CM12 is in progress, at least as soon as the HW decoding is ready.

* [CM 10.2](http://forum.xda-developers.com/showthread.php?t=2386684) remains the most stable ROM on this phone as of 2015-01-05.
* [CM 11](http://forum.xda-developers.com/photon-q-4g-lte/orig-development/cyanogenmod-11-0-photon-q-t2838299) - Best Kitkat ROM for now.
* [CM 12](http://forum.xda-developers.com/showpost.php?p=58312639&postcount=112)

### Making it work with KitKat

* [XDA Kitkat Development Thread for the Photon 4G](http://forum.xda-developers.com/showthread.php?p=53344956#post53344956)

## Sources

* [Android.gs - Motorola Photon 4G LTE Bootloader Unlock]()
* [Android.gs - Installing TWRP Recovery on a Motorola Photon 4G LTE](http://www.android.gs/install-twrp-recovery-motorola-photon-q-4g-lte-xt897/)