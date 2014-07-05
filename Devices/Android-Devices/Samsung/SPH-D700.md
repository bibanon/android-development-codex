## Samsung Epic 4g (SPH-D700)

### Steps

1. Install Custom Recovery with Odin
2. Install SuperSU root package with Custom Recovery
3. Install Custom ROMs
4. Install Wolfson Audio Mod

## Install Custom Recovery

First, use Odin or Heimdall to install a custom recovery on the phone. This custom recovery makes it possible to install superuser software and custom ROMs.

### Using Odin (Windows)

Odin is the official Samsung flashing tool used by their own repair techs.

* [Youtube: Qbking77 - (Odin, for Windows) Root SPH-D700 on FC09 Firmware](https://www.youtube.com/watch?v=C9eaCtiS0Bo)

### Using Heimdall (Linux)

If you are using Linux, or just don't want to deal with Odin, Heimdall can be used to flash the device.

You will need to open a terminal to run the following commands.

1. Install `heimdall-flasher` from your distribution's repositories. The command below installs heimdall in Ubuntu/Debian/Linux Mint.

    sudo apt-get install heimdall-flasher

2. Download [cwm-5.0.2.7-epic4g.tar](http://d-h.st/nIo), and extract it.

    tar xvf cwm-5.0.2.7-epic4g.tar

3. Make sure that the file `recovery.bin` was extracted.

4. Completely turn off the phone; remove the battery and plug it back in.

5. Turn on the phone while holding down the number "1" on the physical keyboard.

6. The phone will immediately enter "Download" mode (black screen with yellow triangle with worker digging).

7. Connect the phone to the computer by USB cable. 

8. From the computer, use the `heimdall` command below to install the custom recovery to the phone:

    heimdall flash --recovery recovery.bin

9. Once installation is complete, your phone will reboot.

---

* [XDA-Developers: michaelaoash - (Heimdall, for Linux) Root SPH-D700 on FC09 Firmware](http://forum.xda-developers.com/showthread.php?t=2356003)
* [XDA-Developers: DRockstar - Clockworkmod for Epic 4G SPH-D700](http://forum.xda-developers.com/showthread.php?t=1357655)

## Rooting

Now that a custom recovery has been installed, just use the custom recovery to install SuperSU, and the phone will be rooted.

1. Download the [SuperSU](http://download.chainfire.eu/supersu) installation zip, and send it to the phone's SDCard. (Do not extract it)
2. Unplug the phone, remove and replace the battery.
3. To access the custom recovery, hold down the power button, camera button and volume down buttons, until the capacitive buttons light up.
4. Clockworkmod Recovery will appear. It should have a list of 7 options, not 4.
5. Select **Install zip from sdcard**.
6. Select **Choose zip from sdcard**.
7. Find the SuperSU zip file, and select it.
8. Select **Yes - Install**.
9. SuperSU will be installed, and your phone will be rooted.
10. Reboot the phone; press back until you reach the first screen, and select **Reboot system now**.

## Custom ROMs

Currently, the best custom ROM is the official CyanogenMod 11 (Android 4.4.2) release.

### CyanogenMod 11 (Android 4.4.2, Official Build)

> **WARNING:** If you are installed any ROM prior to the 11/12 CM11.0 build, this will wipe your data due to a resizing of the mtd partitions. If you wish to go back to another ROM, you will need to ODIN back to stock. If updating from a build prior to 11/12, it is recommended to format /system, /data, and /cache AFTER making your backup.

The Samsung Epic 4G SPH-D700 is an officially supported platform for CyanogenMod, with a dedicated team of developers, the latest Android 4.4.2 version, and nightly builds.

Download [one of the update zips from the official site](http://download.cyanogenmod.org/?device=epicmtd), and install it the same way as the SuperSU update zip. However, make sure to **Wipe data/factory reset** before your first installation.

As of June 19th, 2014, the M7 snapshot is known to be stable. [Since the Epic 4G is low on internal storage](http://forum.xda-developers.com/showthread.php?t=2524262&page=81), you will need to use a [smaller GAPPS package](https://drive.google.com/file/d/0ByecW84ankN7ZU1mUjB1ZDJkU0U/edit?usp=sharing), which contains the Play Store only (Gmail, Youtube and such will need to be installed on your own).

* [XDA-Developers: CMTeamEpic - OFFICIAL CyanogenMod 11.0 Nightly Builds for Samsung Epic 4G](http://forum.xda-developers.com/showthread.php?t=2524262)

## Galaxy S Exynos Wolfson DAC

One of the very special features of the Galaxy S series is the use of a Wolfson DAC (digital-audio converter), a very high quality audio driver, critically acclaimed by audiophiles worldwide.

### Voodoo Sound

The Wolfson DAC also has special EQ features. To unlock the full power of the Wolfson DAC, and customize all of it's features, install the [Voodoo Sound app.](https://play.google.com/store/apps/details?id=org.projectvoodoo.controlapp)

The Voodoo Sound app requires special kernel patches in order to work. For the CM11 4.4.2 ROM, you will need to use [Notest kernel](http://forum.xda-developers.com/showthread.php?t=2654688). Unfortunately, the developer's computer failed, so he is unable to continue development; but it seems stable enough for now, and [the source code is still available on Github](https://github.com/didhiy/android_kernel_samsung_epicmtd) for anyone who wants to keep it updated.

## Sources

* [Android Forums - Rooting Sprint Samsung Epic 4G (FC09)](http://androidforums.com/epic-4g-all-things-root/731298-can-someone-help-me-root-my-sprint-epic-4g-put-cyanogenmod-10-1-a.html#post5911114)
* [Bolis - Rooting Sprint Samsung Epic 4G (FC09)](http://www.bolis.com/amillar/software/android-root-epic-4g)

## Downloads

* [Cyanogenmod on Epic 4G Blog - Useful Tools/Files](http://epiccm.blogspot.com/p/tools.html)