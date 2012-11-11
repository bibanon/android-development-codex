# Motorola Droid 2

The Motorola Droid 2 directly followed from the ever-popular Motorola Droid that started the Android craze. As such, it was expected that it would give Android users another true taste of the latest stock Android experience. However, Google had moved on to making it's own phone with the new Nexus line, and with Motorola and Verizon freed to do whatever they wanted, they immediately set to limit the freedoms of their own users.

The Droid X and the Droid 2 were the first of Motorola's Android devices to feature an encrypted bootloader, one that would only accept Motorola-signed ROMs and kernels. With no hope of ever breaking this protection, the famous Motorola Droid devs stuck with their aging phone until the advent of the Galaxy Nexus.

For the unlucky ones left behind with this crippled phone, you will face an unfriendly developer atmosphere, difficult and dangerous procedures, and results that may not even be worth the effort, due to the use of aging and unhackable kernels. Such a sad fall for a company that made Android what it is today.

## Introduction

If you still want to keep going, lube up, follow the guidelines to the letter, and stay updated on new developments. You will need these things:

* Time, diligence, and patience
  * You need to take a lot of time to fully understand everything you are doing with this phone, and follow all guidelines closely. You also need to be patient; very, very patient. Flashes can take upwards of 10 minutes to complete.
* A Motorola Droid 2 (A955)
  * Make sure that your Droid 2 is the A955, not Droid 2 Global (A966)
* A POSIX (Mac, Linux, Unix system up and ready
  * The truth is, Windows sucks for development of any kind, and we absolutely do not want to take chances with bad drivers on your precious phone. Anyway, the  Windows methods are more difficult as well as less safe. If you don't have Linux or a Mac already, get the Ubuntu liveCD or the Droid flasher liveCD (explained below).
* Android SDK Platform Tools
  * This provides adb, fastboot, and other useful tools to interact with your Android's inner workings. If you don't have it or are not using the Droid flasher liveCD, check the **Android SDK Guide** to find out how to install it.
* Original Motorola MicroUSB Cable 
  * Don't use anything else to flash your phone.
* External Wall Charger for the battery (or another Droid smartphone)
  * If you screwed up a flash and ended up in bootloader mode, you will be unable to charge your phone until it is resolved. As such, a battery wall charger (not a cable) or another Droid is required to charge it.
* (optional) Extra Battery
  * If you're going to the trouble to buy an external wall charger, why not get another battery anyway?

  
## Rooting (version 2.3.4 OTA)

Everything starts with rooting the phone. There are many methods, but we saved here the best, easiest, and latest methods 

If you have version 2.3.4 or lower, you can now root it thanks to [the hard work of quite a few devs](http://rootzwiki.com/topic/29930-new-root-method-for-stock-234-621622-found-droid2-r2d2/) looking tirelessly for exploits.

### Method 1: Linux LiveCD

With this liveCD, you don't even have to install Linux, just run it from a CD and everything s ready to go.

1. Download the liveCD [here](https://rapidshare.com/files/3401109295/Droid2_621_SBF-and-RootCD.iso). (MD5SUM: e50bc7914c4852ca32e9f08f7744c056)
2. Burn this ISO to a CD.
* Alternatively, you can install the ISO to a USB drive and boot from there. Install [UNetBootin](http://unetbootin.sourceforge.org) and follow the directions.

### Method 2: Windows

You just need to download this SPF and flash it using RSDLite. 

Afterwards, install the superuser apps and tools using adb.

### Method 3: Linux (Manual)

## Installing Custom ROMs

Although the bootloader does not allow custom, unsigned kernels to be run easily, it is still possible to get a few ROMs for the Droid 2. However, since the Droid 2 is a regional device that has often been forsaken for its difficulty, expect few new developments.

### Install a Recovery Image

The recovery image is tethered onto the official bootloader and recovery systems

### Choose a ROM

Since there are not that many great ROMs to look for with the Droid 2, we've listed the best we could find over here.

### Install a ROM


## Flashing an SBF 

This details the general method of flashing an SBF file. Refer to this whenever the guide tells you to "install an SBF".

### Linux (sbf_flash)

This is perhaps the simplest, easiest, and safest way to flas

### Windows (RSDLite)

RSDLite depends on Windows, which can take a bit of work to get the drivers working


## Troubleshooting

### My system is stuck on the boot animation for 20 minutes or more!

Be patient and wait for the device to respond. If it takes 20 minutes or more, there is a problem.

If you did not do so before, make a clean wipe of the cache and data.

(instructions)

### The Dreaded Brick (after flashing 2.3.3 and below

After a bad or corrupt flash (especially after the 2.3.4 OTA update, many a Droid 2 has been bricked. This can be caused by trying to install an older or corrupted SBF than the one you use now, loss of power while flashing, and sometimes for no discernable reason at all.

Usually the error looks like this:

    D2.37
    Err:A5, 70,70,00,1F

    MEM_MAP Blank
    Service Req'd
    Battery ok
    ok to program
    connect usb
    data cable

The result is that the Droid 2 immediately boots to bootloader mode with this error, and better yet, there is no way to charge the battery in bootloader mode. Get an external battery charger (as stated above) or a friend's Droid to charge your battery completely before proceeding.

Since the Droid 2 cannot be downgraded, the only way to go is up. Get the [2.3.4 OTA update SBF](http://sbf.droid-developers.org/cdma_droid2/list.php). [A new rooting method](http://rootzwiki.com/topic/29930-new-root-method-for-stock-234-621622-found-droid2-r2d2/ has recently been discovered for this firmware, s o no worries.

Just flash this SBF using the SBF flashing methods above.

http://rootzwiki.com/topic/29930-new-root-method-for-stock-234-621622-found-droid2-r2d2/


## Files and Programs

> Notice: Although these files come directly from [MyDroidWorld](http://www.mydroidworld.com/topic/6275-droid-2-gingerbread-233-release-prerooted/) with the express restriction not to redistribute the files, the Multiupload links no longer work in some countries. As such, we have reuploaded them elsewhere in case.

### Software

* [Kimete - DOSBF](http://www.kimete.com/dosbf.html)

### SBFs

* [SBF List (check for your model of Droid 2!)](http://sbf.droid-developers.org/cdma_droid2/list.php)
* [MyDroidWorld - All SBFs for Droid 2](http://www.mydroidworld.com/topic/4892-tbh-mydroidworld-present-droid-2-2320-triple-threat/)
* [Motorola SBF Archive](https://sites.google.com/site/motosbf/)

### Toolkits and Drivers

* [RSDLite](http://depositfiles.com/files/0o11t5szd)
* [Motorola USB Development Drivers for Windows](http://dl.dropbox.com/u/7632904/USB_Drivers_bit_4.7.1.zip)
* [Droid 2 Rooting Toolkit](https://rapidshare.com/files/3401109295/Droid2_621_SBF-and-RootCD.iso)

## Sources

To resolve broken Multiupload links, [this link converter tool was used.](http://tools.half-moon.org/multiupload/index.php?lang=en)

### Rooting

* [MyDroidWorld - Rooting Gingerbread 2.3.3](http://www.mydroidworld.com/topic/6275-droid-2-gingerbread-233-release-prerooted/)
* [RootzWiki - New Root Method for stock 2.3.4 (http://rootzwiki.com/topic/29930-new-root-method-for-stock-234-621622-found-droid2-r2d2/)
* [Cyanogenmod Wiki - Motorola Droid 2 - Full Update Guide](http://wiki.cyanogenmod.com/wiki/Motorola_Droid_2:_Full_Update_Guide)