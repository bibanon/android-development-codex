[[Linux]]

## Manual Method

Here is a manual method of installing Ubuntu on the Nexus 7. This does exactly the same thing as the installer, and is outlined for for your information, or porting purposes.

## Preparations

Your Nexus 7's bootloader [[must be unlocked|]], and set to USB Debugging mode. (Settings->Developer Options)

You need to install these dependencies from a package manager:

* `android-tools-fastboot`
* `wget`

You also need to open up a terminal window, where we will run commands from. 

Create a folder where you can work from, and then navigate to it in the terminal. For example:

		# create an `ubuntu-n7` folder in your home folder
		mkdir ~/ubuntu-n7
		# navigate to it
		cd ~/ubuntu-n7

## Download the Images

Here we will retrieve the boot and root filesystem images for Ubuntu on Nexus 7.

Notice that there are variants for each Nexus 7 variant. Replace `<VARIANT>` with `8GB`, `16GB`, or `32GB`, depending on the stated size of your tablet.

		# get checksum
		wget http://hwe.ubuntu.com/uds-r/nexus7/<VARIANT>/ubuntu-nexus7-sha256sum.txt
		# get boot image
		wget http://hwe.ubuntu.com/uds-r/nexus7/<VARIANT>/boot.img
		# get root file system
		wget http://hwe.ubuntu.com/uds-r/nexus7/<VARIANT>/rootfs.img
		
## Image Sanity Check

We need to make sure that we don't install a corrupt system, so image checksums are used to ensure that the files have not been damaged or modified along the way.

		sha256sum --check ubuntu-nexus7-sha256sum.txt
		
## Flash the Images

1. Send your Nexus 7 into fastboot mode. If you have ADB installed, enable USB Debugging on your tablet and use the command `adb reboot fastboot`.
2. Plug in your Nexus 7.
3. Type in this command (as root), and it will display the serial number of your tablet if detected.

		fastboot devices

After your tablet is detected, run these commands in the same directory to flash.

		# erase and flash boot image
		fastboot erase boot
		fastboot flash boot ./boot.img
		
		# erase and flash root filesystem
		fastboot erase userdata
		fastboot flash userdata ./rootfs.img
		fastboot reboot
		
After that, you now have Ubuntu Linux on the Nexus 7!

## Restoring Android

### Return to Stock

If you want to go back to normal ol' Android or don't have a custom recovery image installed, you can restore your device to Android with this method.

[[N7 Restore]]

### Custom ROM Recovery installed

Rejoice! If you use a custom recovery (perhaps for installing custom ROMs), you can just wipe the system and flash a backup or a new ROM like normal.

See the custom recovery guides for more details.

It remains to be seen whether the custom recovery can back up Ubuntu, however...
