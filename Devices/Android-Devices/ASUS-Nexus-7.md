The ASUS Nexus 7 is Google's first official tablet, sold at an amazing cut-rate price of $200, yet packed with the most powerful hardware in town.

As a Nexus device, modding is straightforward and simple, and everything is based on the rock solid foundation of the Android Open Source Project. There is also no lag in updates from carrier shenanigans.

## Status

* Type: **Google Experience**
* Stance: **Developer Friendly**

## Modding with Toolkits

If you're new to Android modding, using nice little toolkits will make things easy. If you're a bit more experienced, however, we do recommend that you try out the Manual method to get a taste of ADB.

### Wug's Nexus Root Toolkit (Windows)

A nice GUI toolkit designed to root any and all Nexus devices. Best for newbies.

Requirements:

* [Wug's Nexus Root Toolkit](http://forum.xda-developers.com/showthread.php?t=1766475)
* Android ADB drivers (Toolkit will guide you in installing them)

1. Open up the program.
2. If you haven't already installed Android drivers, click **Full Driver Installation Guide**.
3. On your Nexus 7, go to **Settings > Developer Options** and enable **USB Debugging**.
3. Press the **Backup** button to save your data; in order to unlock the Nexus 7, all data will be deleted.
4. Click **Unlock** and follow the directions to unlock your bootloader. Make sure that you've saved your data somewhere safe.
5. Select the **Custom Recovery** option and click **Root**. Once that is done, your device is fully rooted.

* To go back to factory settings, click **Back to Stock** and select the current status of your device.
* To relock the bootloader (perhaps for warranty purposes), click **OEM Lock**.

### MSKip's Google Nexus 7 Toolkit (Windows)

While there are a ton of toolkits for the Nexus 7, this one has the most features out there.

Since updates are constant and the program literally explains itself, just get to the [forum page](http://forum.xda-developers.com/showthread.php?t=1766475), download the toolkit, and follow the directions.

### N7Root (Linux)

A small bash script that automates the Manual method seen below. It also has portable adb/fastboot binaries, so you don't have to get the entire Android SDK.

Requirements:

* [n7root.sh](http://forum.xda-developers.com/showthread.php?t=1813329)
* If you use a 64-bit system, install `ia32-libs` (32-bit support)

1. Download and extract the script. 

2. Open a terminal and use `cd` to go to the directory the script is in.

3. Run the script with the command below, and follow the onscreen directions.

		./n7root.sh

## Manual

For virtue of being a Nexus device, the manual method is not much more difficult. Simply pump a few commands, and you're done.

### Requirements

* Android SDK Platform Tools
* (if using Windows) ASUS Nexus 7 ADB Drivers
* Backups - Your entire tablet will erased in the process of unlocking, so make sure to back up your files.

### Setup

First, go to **Settings > Developer Options** and enable **USB Debugging**.

Push the SuperSu program to the sdcard with this command:

		adb push path-to-zip/JB-SuperSU.zip /sdcard

### Unlocking

1. Go to the platform-tools in a command line.
2. Reboot to the bootloader:

		adb reboot bootloader

3. Unlock your device with this command (run as root with Mac/Linux):

		fastboot oem unlock

4. You will have to accept and erase all the user data on the tablet. Make sure that all your files are backed up before proceeding.

### Installing a Recovery

Recovery images make it easy to flash zip files to the system. You have a choice between ClockworkMod and TWRP for a recovery image; download one of them. 

* [TWRP](http://www.teamw.in/project/twrp2/103) - A hot new recovery that gives a touch interface and has GooManager integration, making it even easier to flash ROMs. TWRP is preferred by the community.
* [ClockworkMod](http://www.clockworkmod.com/rommanager) - The tried and true recovery. Find the **Nexus 7** section and choose either *touch* or *regular*.

Once you get that recovery image, flash it with this command:

		fastboot flash recovery path-to-img/<recovery-name>.img

### Rooting

Rooting is as easy as flashing the SuperSu zip file.

1. Boot into recovery.
2. Install the `SuperSu.zip` file from the sdcard.
	* CWM: Choose the zip file from the `install zip from sdcard` menu.
	* TWRP: Choose the zip file from from the `install` menu.

Your device is now ready to go.

### Restoring to Stock

Sometimes you might want to restore the factory image to recover from root-based bootlooping, or when you need to return it for warranty repair.

[Here](http://www.youtube.com/watch?v=-E-EF0QC0Gc) is a video guide by XDA user *SladeNoctis*.

1. Download the latest factory image for the Nexus 7[here](https://developers.google.com/android/nexus/images#nakasi).

2. Extract the factory image into the same directory as your ADB and Fastboot executibles (e.g. "\android-sdk\platform-tools")

3. Plug in your device. If you are booted into Android, open a command prompt to your ADB and Fastboot directory, then type 

		adb reboot bootloader

> **Tip**: If the device is off and/or Android is not available, press and hold **both volume keys** and the **power button** simultaneously. After holding all three buttons for a couple of seconds, your bootloader should launch. This should reboot you into the bootloader. 

4. Type this command. Replace `<version-num>` with the one you see in the folder.

		fastboot flash bootloader bootloader-grouper-<version-num>.img

5. Next type this to reboot.

		fastboot reboot-bootloader

6. Now type this. Replace `<version-num>` with the one you see in the folder.

		fastboot -w update image-nakasi-<version-num>.zip

> **Optional**: If you need to relock your bootloader for warranty or security purpouses, stay in the bootloader and run this in the computer:

		fastboot oem lock

8. If your tablet hasn't already rebooted automatically, type

		fastboot reboot

## Miscellaneous

### Ubuntu on Nexus 7

Because of it's ubiquity and low price, the Nexus 7 is being used as Ubuntu's ARM reference device, and you can install it to your little tablet with the click of a button. Better yet, you can even restore and backup the ROM just like any other Android ROM.

More info [[here|Linux]].

## Sources

### Files

* [Google Dev - ASUS Nexus 7 Factory Image](https://developers.google.com/android/nexus/images#nakasi)
* [ClockworkMod Download Page](http://www.clockworkmod.com/rommanager)
* [TeamWin - TWRP for Nexus 7](http://www.teamw.in/project/twrp2/103)

### Programs and Toolkits

* [XDA-Developers - Wug's Nexus Root Toolkit](http://forum.xda-developers.com/showthread.php?t=1766475)
* [XDA-Developers - Mskip's Google Nexus 7 Toolkit](http://forum.xda-developers.com/showthread.php?t=1809195)
* [XDA-Developers - N7Root](http://forum.xda-developers.com/showthread.php?t=1813329)

### Guides

* [XDA-Developers - All in One Nexus 7 Dev Guide](http://forum.xda-developers.com/showthread.php?t=1736578)
* [XDA-Developers - Returning Nexus 7 to Stock](http://forum.xda-developers.com/showthread.php?t=1781250)
