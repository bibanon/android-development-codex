Android is by far the most popular and the most versatile operating system for mobile devices, with a massive universe of apps and powerful customization ability. This is the OS most people want.

## Installation

Note that you should follow the [[specific bootloader guides on the main page|HTC HD2#HD2 Bootloaders]] before using these.

* [[Installing Android to NAND using MAGLDR|HD2 MAGLDR Android]]
* [[Dual-Booting Android and WP7|HD2 MAGLDR Dual Boot]]
* [[Installing Android to NAND using cLK|HD2]]
* [[Android NativeSD|HD2 Android NativeSD]]
* [[Android on SD Card (old method)|HD2 Android SD]]

## Implementation

Android is implemented on the HD2 in four ways:

* **MAGLDR NAND** - Android is directly flashed to the phone memory using the MAGLDR bootloader. Alternatively, a recovery partition is flashed to the phone, which installs ROMs like any modded Android phone.
* **cLK NAND** - Android is installed to the phone memory using the cLK bootloader. A recovery image is flashed to a special partition and installs ROMs like any modded Android phone.
* **SD Disk Images** - Android and the Linux kernel are placed into disk image files, and copied to a folder on the SDCard for the bootloader to run. Works with MAGLDR, cLK, and HaRET.
* **NativeSD** - An ext4 partition is made on the SDCard to store the Android system. The kernel stays on the FAT data partition, and the entire system is loaded like an SD Disk Image by the bootloader.

### Drivers

Drivers for Android on the HD2 were mostly found in the HTC Evo 4G and the Nexus One, which were almost identical, save for the radio.

### MAGLDR NAND

Since MAGLDR is closed source, the deep details of it's implementation is unknown.

On MAGLDR, the old method of installing Android was to directly flash it to the NAND like any WP7 ROM. This method is no longer used.

A new method borrowed from cLK is the use of a recovery partition. An Android recovery system, such as ClockworkMod, can be installed to allow users to flash ROMs the traditional Android way, right from their device. This recovery partition can be in a range of different sizes

### cLK NAND

cLK attempts to match the abilities of a conventional Android HBOOT, featuring fastboot interfacing, onboard flashing, and a recovery partition.

Using ADB, the recovery system (usually ClockworkMod) is flashed to the HD2.

### Original SD Method/HaRET

Android began as little more than disk images and a Linux kernel that could be easily moved over to a FAT-formatted SDCard.

This method is compatible with MAGLDR, cLK, and HaRET.

The bootloader starts up the Linux kernel, which then loads Android from the filesystem image.

### NativeSD (MAGLDR & cLK)

NativeSD is a new method for running Android from the SDCard. It uses a native Linux filesystem, ext4, rather than a filesystem image piggybacking on the dated FAT file system. 

Basically, this means that Android can run faster, perhaps even better than from the phone memory (NAND). It also makes it possible to install multiple Android ROMs on a single SDCard.

NativeSD divides the SDCard into two partitions: one formatted to FAT for normal old files, and one formatted to ext4 for Android.

		-------------------------------------------
		|															|	NativeSD	|
		|					SDCard Data					|	System		|
		|							FAT							|		ext4		|
		-------------------------------------------
		(Contains normal data and kernel)		(Contains Android
																					System)

The NativeSD method supports MAGLDR and cLK, using the same old SD method for the kernel. The difference is that the kernel loads Android from the ext4 filesystem, rather than an image.

ROMs are installed by first partitioning the card, and then installing ROMs with a special recovery image. This recovery image is loaded up by the bootloader, where it loads a NativeSD formatted ROM and installs it. 

This process can be repeated to install multiple ROMs, since the ROM is just placed into a folder in the NativeSD filesystem.

Switching between ROMs is an easy process of moving around the kernel files on the FAT data partition. A NativeSD DualBoot App is designed to do this.
