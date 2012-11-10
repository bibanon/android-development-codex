By virtue of being a Nexus device, the Nexus 7's manual method is not much more difficult. Simply pump a few commands, and you're done.

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
