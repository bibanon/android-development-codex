The HTC J Butterfly (HTL21/Deluxe J/dlxj) is the KDDI AU variant of HTC's 2012 flagship phone. 

Japanese HTC KDDI AU phones are widely sought after worldwide, since KDDI mandates that all their phones must have SDCard slots, whereas overseas, the only options for sdcard slots on Android smartphones are Samsung and LG.

## Datasheet

* **Network Support**: GSM/WCDMA/LTE 1700
* **Possible Future Updates?**: Yes, Android 4.4
* **Latest Stock Android Version**: Android 4.1.1 with Sense 4
* **Latest Stable Custom ROM**: [HTCSoku - Android 4.4.2 with Sense 6](http://htcsoku.info/htcsokudev-news/sense6-rom-for-au/)
* **Free SIM Unlock Exploit?**: Yes
* **Variant with Largest Dev Community**: HTC DROID DNA (Verizon variant)
* **Nexus Device with Similar Chipset**: Google/LG Nexus 4

## Sections

(create a section on setting up the Ubuntu LiveCD and Android-SDK-Platform-Tools)

1. Disable "Fast Boot"
2. Update to Firmware version 1.39.970.1
3. HTCDev Bootloader Unlock
4. S-OFF
  * (FIXME) SIM Unlock Exploit (optional)
5. Custom Recovery
6. Custom ROMs
  * (FIXME) Converting CyanogenMod-based DROID DNA ROMs for J Butterfly
7. Rooting with SuperSU (optional)
8. Enable Phone Network Settings
9. Red Text Remover (optional)
10. (FIXME) MultiROM for HTC J Butterfly (optional)
11. Return to Stock

## Ubuntu Linux LiveCD

It is easier to root the device using a Linux operating system. 

The Ubuntu Linux LiveCD allows users to temporarily run Linux without installing onto the computer.

### Install the Android SDK Platform Tools

    sudo apt-get install android-tools-adb android-tools-fastboot

Once these packages are installed, `adb` and `fastboot` can be run from anywhere on the computer.

* `adb` uses USB Debugging mode 
* `Settings/Development Tools `

If `fastboot` does not work as expected, run `fastboot` as root by prefixing with `sudo`, as shown below:

    sudo fastboot devices

If `adb` does not work as expected, type `adb kill-server`, and run `adb` as root by prefixing with `sudo`, as shown below:

    adb kill-server
    sudo adb devices

If the device continues to have issues connecting with `adb`

### Install Linux-based hex editor

A hex editor is used for the SIM Unlock.

## Disable "Fast Boot"

> **Note:** HTC's "Fast Boot" feature is completely unrelated to the Android `fastboot` flasher.

HTC Sense devices have a feature known as "Fast Boot", which allows the phone to boot far faster than normal from shutdown.

However, the feature works by bypassing normal startup, which is an impediment to accessing the bootloader. 

We recommend disabling the "Fast Boot" during the process; afterwards, it can be re-enabled as needed.

1. From a Home Screen, tap the **Apps Icon** (located at the bottom).
2. Tap **Settings**.
3. Tap **Power**.
4. Uncheck **Fast Boot** to disable the feature.

Source: [Verizon Wireless - DROID DNA: Disable HTC Fast Boot](http://support.verizonwireless.com/support/devices/knowledge_base.html/69845/)

## OTA Version Table

First, check which firmware version the phone currently runs by following these steps:

1. From a Home Screen, tap the **Apps Icon** (located at the bottom).
2. Tap **Settings**.
3. Tap **About**.
4. Tap **Software Information**.
5. The firmware version is found under the **Software Number** section.

The table below shows which S-OFF method is available to which version. 

  Firmware | S-OFF Method
-----------|-----------------------------------
1.39.970.1 | [DirtyRacun](http://unlimited.io/deluxe_j.htm)
1.36.970.1 | [Downgrade to 1.15](http://forum.xda-developers.com/showpost.php?p=49786448&postcount=3)
1.29.970.1 | [HTCSoku - revone exploit](http://htcsoku.info/htcsokudev-news/au-deluxe-129-soff-revone/)
1.15.970.1 | [revone exploit (skip steps 7-9)](http://forum.xda-developers.com/showpost.php?p=49786448&postcount=3)

## HTCDev Bootloader Unlock

> **Note:** HTCDev is HTC's official bootloader unlock method. However, the drawback is that your phone's warranty will (theoretically) be voided.  
> HTC will phase out this policy in the HTC ONE M8.

Technically, HTCDev is not allowed to unlock the HTC J Butterfly. However, by temporarily rooting and changing the CID to `1111111`, we can trick HTCDev into giving us a bootloader unlock.

Source: [XDA-Developers - SharpIS03: Unlock/Recovery/SIM Unlock](http://forum.xda-developers.com/showthread.php?t=2069754)

### Requirements

* [goroh_kun's root tools](https://docs.google.com/file/d/0B8LDObFOpzZqQzducmxjRExXNnM/edit?pli=1)
* [Android SDK Platform Tools (`adb` and `fastboot`)](http://www.hackmyandroid.com/use-adb-fastboot-commands-without-installing-android-sdk/2479?ModPagespeed=noscript)
* Enable **Settings/Developer Options/USB Debugging** on the device.
* External microSD Card (make a backup)

### Temporary Root

1. Extract [goroh_kun's root tools](https://docs.google.com/file/d/0B8LDObFOpzZqQzducmxjRExXNnM/edit?pli=1).
2. There will be two files inside the extracted folder: `diaggetroot.apk` and `getroot`.
3. Place these two files in a folder where `adb` commands can be run.
4. Open a command prompt and use `adb` to install `diagetroot.apk` :

    adb install diaggetroot.apk

5. Next, install the `getroot` binary:

    adb push getroot /data/local/tmp/getroot
    adb shell chmod 777 /data/local/tmp/getroot

6. On the device, run the `diaggetroot` app, (might be named `BreakSuidDiag`).

7. wait for the `Hello World!` message to appear

8. In the command prompt, run

    adb shell
    /dev/sh

9. `#` should now appear instead of `$` in the command prompt. This indicates that temporary root has been obtained.

  * If `$` still appears, toggle the Wi-Fi ON/Off and try the /dev/sh command again. 

### Change CID

1. From the ADB shell, run this command to change the CID.

    echo -ne "11111111" | dd of=/dev/block/mmcblk0p5 bs=1 seek=20

2. Next, run this command to enter `fastboot` mode.

    reboot bootloader

3. The device will reboot, and the command line will return to normal. Once the device enters `fastboot` mode, check the CID with this command:

    fastboot oem readcid

4. The output should show `11111111`!

> **Note:** In case HTCDev does not allow an unlock with CID `11111111`, try using `22222222`  as the CID in Step 1.
> Source: [HTCSoku - Update: CID-based Bootloader Unlock May Get Blocked, use 22222222 in case](http://htcsoku.info/htcsokudev-news/au-deluxe-unlock-blocking/)

### HTCDev Unlock

> **Warning:** Be sure to backup any data you have on Internal Storage before proceeding! The HTCDev unlock will factory reset the device, and wipe the Internal Storage as well (for security purposes).

1. Once the CID has been changed to, go to [HTCDev.com](http://www.htcdev.com/bootloader/)
2. From the **Select Your Device** pull-down menu on the right, select **All Other Supported Models**
3. Follow all of the directions until the device is unlocked.
4. Remember to keep the obtained unlock token somewhere safe. That way, if the bootloader has to be unlocked again, it won't be necessary to repeat this long process.

## DirtyRacun S-OFF for 1.39.970.1

> HTCDev Bootloader Unlocks leave S-ON enabled. S-ON prevents custom recoveries, such as TWRP or CWM, from installing custom kernels to `/boot`. This forces users to install kernels from a PC, using `fastboot`.  
> Obtaining S-OFF removes this roadblock.

The **DirtyRacun** S-OFF method for the HTC J Butterfly was developed by [Unlimited.io](http://unlimited.io), and works with version `1.39.970.1`. 

This method requires 32-bit Ubuntu Linux, so be sure to make a LiveCD.

Source: [Unlimited.io - DirtyRacun for HTC J Butterfly 1.39.970.1](http://unlimited.io/deluxe_j.htm)

### Requirements

* HTCDev Unlock (completed in previous step)
* Ubuntu Linux 32-bit 12.04 (and newer) LiveCD
  * DirtyRacun cannot be used on Windows. Linux 64-bit is also not recommended.
  * LiveUSB and Virtual Machine installations do not work with DirtyRacun, due to driver issues.
* External SDCard in your device, larger than 2GB
* Original HTC microUSB cable
* Ensure that the battery is **fully charged.**
* Use the USB 2.0 ports directly on your computer. Avoid USB 3.0 ports or USB Hubs.

### Instructions

1. Backup the phone and external SD card before running this procedure. All data will be wiped from your device during the RUU process. The SDCard will not be wiped, but make a backup anyway.

2. Run the Ubuntu Linux LiveCD on your computer.

3. Once the operating system has started up, download [DirtyRacun for Linux](http://unlimited.io/downloads/dirtyracun/deluxe_j/RabiesShot_LINUX.tgz), using Firefox.

3. Open the Terminal (command line) app in Ubuntu.

4. Use the following command to extract the downloaded archive.

    tar -xvzf RabiesShot_LINUX.tgz

5. Enter the extracted folder.

    cd RabiesShot_LINUX

6. Make the programs executable with this command:

  * Note: If the command is successful, it will return a blank new line. Silence is golden.

    chmod 755 RabiesShot adb fastboot

7. Download the RacunROM below, and put it in your DirtyRacun folder: This step is REQUIRED even if you are using a stock RUU.

  * [RacunROM 1.15.970.1 - HBOOT 1.39.000](http://unlimited.io/downloads/dirtyracun/deluxe_j/139/RacunROM.zip)

8. After downloading the ROM, check that it is valid using the `md5sum` command. The output should be `d8cbe4e491ca695642172f279e57e6d5`.

    md5sum RacunROM.zip

9. Enable **Settings/Developer Options/USB Debugging** on the device.

10. Plug in the device into the computer.

11. Send the device into `fastboot` mode using this command:

    ./adb reboot-bootloader

12. The following commands clear the cache partition and send the device into **RUU Mode.**

    sudo ./fastboot erase cache
    sudo ./fastboot oem rebootRUU

13. In **RUU Mode**, the device will display a black background and silver HTC logo. Now proceed with the third command.

    sudo ./fastboot flash zip RacunROM.zip

  * DO NOT flash a custom recovery or superuser yet. If you have already flashed them, return to step 9.

14. After flashing, the device might not automatically reboot. Run the following command in that case:

    sudo ./fastboot reboot

15. Enable **Settings/Developer Options/USB Debugging** on the device again.

16. Finally, run RabiesShot to S-OFF the phone.

    sudo ./RabiesShot

## Update to Latest Radio `1.10.12.1122`

DirtyRacun relies on an exploit in the old 1.00 radio to work. However, newer radios often provide patches for serious bugs and give power savings. 

Now that your phone is S-OFF, it is recommended to install the latest radio available, `1.10.12.1122`.

[Flash this RUU](http://forum.xda-developers.com/attachment.php?attachmentid=2748360&d=1400319944), which only contains the radio `1.10.12.1122` .

    adb reboot-bootloader
    fastboot oem rebootRUU
    fastboot flash zip PL99IMG.zip
    fastboot reboot-bootloader

* [XDA-Developers - Android 4.4 requires latest radio flashed](http://forum.xda-developers.com/showpost.php?p=52720137&postcount=40)

## SIM Unlock (optional)

Once S-OFF is achieved, take advantage of another useful exploit; one that will generate an unlock code, so the phone can use any network's SIM card.

The SIM can only be unlocked on the stock ROM, so taking this step is strongly recommended.

* _Method 1:_ Use a hex editor to change a setting in a system partition, tricking the phone into believing it is SIM Unlocked. [HTCSoku - Permanent SIM Unlock](http://htcsoku.info/htcsokudev-news/au-deluxe-impression-simunlock/)
  * **Note:** Once the phone is SIM Unlocked with this method, it will stay unlocked forever. Nothing will ever take that unlock away, not even restoring from RUU.
* _Method 2:_ Install a bootloader from the Taiwanese HTC Butterfly (X920D). This is the easiest way, but NFC, Infared, Felica, and AU services will not work with the Taiwanese bootloader. [XDA-Developers - fnoji111: Temporary SIM Unlock for HTC J Butterfly by installing X920 Bootloader (English Translation)](http://forum.xda-developers.com/showpost.php?p=37173043&postcount=208)


## Custom Recovery

A custom recovery is used to install ROMs, which are packed into ZIP files. There are two choices, ClockworkMod and TWRP.

If you want to install HTCSoku/tako0910's Android 4.4 ROMs (which we consider to be the best), you need to install tako0910's TWRP 2.7.

> **Note:** tako0910's TWRP recovery has a bug that causes it to reboot whenever you try to wipe `/data`, making it impossible to factory reset or make nandroid backups. Once you've installed one of tako0910's ROMs and SuperSU, we recommend that you switch back to ClockworkMod and make a nandroid backup there.

1. Download and extract [TWRP 2.7 - 20140323 - By Tako0910](http://www.androidfilehost.com/?fid=23329332407581148), or [ClockworkMod Touch 6.0.3.1](http://www.softmazing.com/2_data/recovery-clockwork-6.0.3.1-dlxj.img)
2. Turn off the phone completely. 
3. Hold **Power** and **Volume Down** to enter bootloader mode. Select **FASTBOOT**. 
4. Open a terminal and use the following command to flash the image (filename may vary):

    sudo fastboot flash recovery openrecovery-twrp-2.7.0.1-dlxj.img

5. Reboot the device.

After installation, follow these steps to enter custom recovery from the bootloader.

1. Turn off the phone completely. 
2. Hold **Power** and **Volume Down** to enter bootloader mode. Select **RECOVERY**. 
3. The phone will enter Recovery Mode.

## Custom ROMs

Due to regulations, carrier requirements, and ever decreasing funding, HTC can be excessively slow in releasing updates for it's phones. As a result, developers have taken system updates into their own hands by creating Custom ROMs; bringing the magic of Sense 6 and Android 4.4 from the HTC ONE.

Custom ROMs are also vital for international GSM users, since many enable the functions and settings necessary for connecting to GSM networks, rather than KDDI's WCDMA.

Some ROMs might not include Google Applications out of the box (such as Google Play App Store). Usually, the google apps (gapps) are provided by the developer in a seperate flashable zip, so check their threads.

### KitKat 4.4

> **Note:** All of HTCSoku/tako0910's ROMs require you to use TWRP recovery to install them; they will not install on ClockworkMod for some reason.

* [HTCSoku - Android 4.4.2 with Sense 6](http://htcsoku.info/htcsokudev-news/sense6-rom-for-au/)
  * [Japanese AU KDDI Edition](https://drive.google.com/uc?id=0B3J-Lafyq1LebEdOZlkyS3FWY1k&export=download)
  * [Global GSM Optimized Edition](https://drive.google.com/uc?id=0B3J-Lafyq1LeaC1YSFkzRlZJdkk&export=download)
  * Quite stable, and gives you all the features of an M8; the only flaw is that NFC doesn't work.
* [Github - tako0910's CyanogenMod 11 for HTL21](https://github.com/tako0910/release/wiki/HTL21_CyanogenMod11) - Works very, very nicely; owing to the fact that the same Qualcomm chipset is also used on the Nexus 4. You can also use tako0910's automatic converter script to convert any Cyanogenmod based ROM from the DROID DNA to work on the HTC J Butterfly.
* [XDA-Developers - vroad: Android 4.4 with Sense 5.5](http://forum.xda-developers.com/showthread.php?t=2648169)

### Jellybean 4.3

* [DIYPDA - Sense 5.5 ROM for China](http://www.diypda.com/forum.php?mod=viewthread&tid=1109922)
* [tako0910's CyanogenMod 10.2 for HTL21](https://github.com/tako0910/release/wiki/HTL21_CyanogenMod#rom-cyanogenmod-101-for-htc-j-butterfly)

### Jellybean 4.2

* [HTCSoku - fnoji111: Sense 5 Port with KDDI AU Settings](http://www.androidfilehost.com/?fid=23189362627838347)
  * [Description](http://htcsoku.info/htcsokudev/2012device/deluxe_j/sense5-portrom/)
* [Takoweb - Tako0910's 4.2.2 Sense 5](http://gadget.takoweb.com/htl21-sense5-422/)
* [tako0910's CyanogenMod 10.1 for HTL21](https://github.com/tako0910/release/wiki/HTL21_CyanogenMod#rom-cyanogenmod-101-for-htc-j-butterfly)

### Jellybean 4.1

* [kie.nu - HTL21 Sense 5](http://kie.nu/1dpj)

## Rooting with SuperSU (optional)

Administrative privileges are disabled by default on Android. However, the Superuser is critical for certain useful apps, such as Titanium Backup, AdAway, and Goomanager.

If necessary, enable Superuser by following these steps:

1. Download the [SuperSU](http://download.chainfire.eu/supersu) file into your phone.
2. Reboot to custom recovery, and tap **Install**.
3. Find the file and select it.
4. Swipe the white arrow from left to right to install.
5. Tap **Reboot System** and check to see if SuperSU and Busybox work.

### Sources

* [HTCSoku - All Known HTL21 Sense 5 Ports](http://htcsoku.info/htcsokudev/2012device/deluxe_j/sense5-portrom/)
* [Github - tako0910's Development Wiki](https://github.com/tako0910/release/wiki/)
* [Github - vroad's Development Wiki](https://github.com/vroad/release/wiki)

## Converting CyanogenMod-based DROID DNA ROMs for J Butterfly

> **Note:** Sense-based ROMs cannot be converted using this tool.

[tako0910's ROM Convert Tool](https://github.com/tako0910/release/wiki/HTL21_ROMConvertTool) is capable of converting [CM-based ROMs from the Verizon HTC DROID DNA](http://forum.xda-developers.com/droid-dna/development) for use on the HTC J Butterfly.

The script supports these CyanogenMod bases:

* CM10.1 (Android 4.2)
* CM10.2 (Android 4.3)
* CM11 (Android 4.4)

[Blog Post](http://gadget.takoweb.com/htl21-rom-convert-tool/)

Remember! USE AT YOUR OWN **LISK!!** (sic)

## Enter Phone Network Settings

> **Note:** These settings can only be found in the stock AU ROM, and any ROMs based on it.

Normally, it will be sufficient to set the network as **GSM/WCDMA/LTE auto**. However, if issues appear, or a specific carrier requires a particular setting, launch these secret apps using ADB:

Network Settings:

    adb shell am start com.android.settings/.TestingSettings

APN Settings:

    adb shell am start com.android.settings/.CdmaApnSettings

[QuickShortcutMaker](https://play.google.com/store/apps/details?id=com.sika524.android.quickshortcut) may also be used to create on-screen launcher widgets for these secret apps.

## Red Text Removal (optional)

When the phone is bootloader unlocked, the HBOOT will display a red text warning that the phone is "For Development Use Only". If you want to remove it, install the custom HBOOT below. This can only be done if you have S-OFF.

This custom HBOOT was made by fnoji111 from [HTCSoku](http://htcsoku.info/htcsokudev/2012device/deluxe_j/sense5-portrom/).

### Method 1: Fastboot Installation

1. Download [PL99IMG.zip](http://www.androidfilehost.com/?fid=23189362627839645) and place it on the root of the phone's storage.
2. Make sure `adb` and `fastboot` is installed, and **Settings->Developer options->USB Debugging** is enabled.
3. Connect the phone to the computer.
4. Run this ADB command to reboot the phone into the fastboot mode:

    adb reboot-bootloader

5. After the phone has rebooted into `fastboot` mode, run these commands:

    fastboot oem rebootRUU
    fastboot erase cache
    fastboot flash zip PL99IMG.zip

6. Flashing the zip will take a while, so take a break and make some coffee. Once the process completes without any errors, manually reboot the device with the following command:

    fastboot reboot-bootloader

> **Note:** The flash process will halt at around 75% to 90% on phone screen! This is a normal safety precaution; otherwise, there would be no way to check the console output before reboot.

7. If the bootloader was flashed correctly, manually power off and reboot the phone. If not, return to step 5.

Source: [XDA-Developers - victor0888: Red Text Removal for X920 HBOOT 1.55](http://forum.xda-developers.com/showthread.php?t=2603362)

### Method 2: HBOOT Installation

1. Download [PL99IMG.zip](http://www.androidfilehost.com/?fid=23189362627839645) and place it on the root of the phone's storage.
2. While the phone is on, hold down the **Power** button. A menu will appear. 
3. Hold down the **Volume Down** button.
4. Tap **Restart**, and press **OK**.
  * Keep holding the **Volume Down** button.
5. When the phone restarts, and displays the HBOOT screen, release the **Volume Down** button.
6. The phone will install the new bootloader, and restart automatically.

Source: [XDA-Developers - it2007me: Remove Red Text for X920D (Discontinued)](http://forum.xda-developers.com/showthread.php?t=2603362)

## MultiROM for HTC J Butterfly

Source: [Takoweb - MultiROM for HTL21](http://gadget.takoweb.com/multirom-htl21/)

## Return to Stock

If your phone encounters an unresolvable problem, needs to be sent for repair, or needs to be reset to it's original state, follow these steps to return to Stock (Out of the Box) configuration.

### Stock/OTA RUUs

A ROM Update Utility (RUU) is an HTC utility designed to update or reinstall stock firmware to an HTC Android phone. Use these as a last resort reset if anything goes wrong on your phone; such as WiFi or cell phone service.

If you used DirtyRacun to obtain S-OFF, download the [RacunROM 1.15.970.1 - HBOOT 1.39.000](http://unlimited.io/downloads/dirtyracun/deluxe_j/139/RacunROM.zip) to use as the RUU.

After you have chosen your RUU version, [follow this guide](http://forum.xda-developers.com/showthread.php?t=2173931) to flash the RUU.

### Method 1: Fastboot Installation

1. Download [RacunROM 1.15.970.1 - HBOOT 1.39.000](http://unlimited.io/downloads/dirtyracun/deluxe_j/139/RacunROM.zip), rename it to `PL99IMG.zip` and place it on the root of the phone's storage.
2. Make sure `adb` and `fastboot` is installed, and **Settings->Developer options->USB Debugging** is enabled.
3. Connect the phone to the computer.
4. Run this ADB command to reboot the phone into fastboot mode:

    adb reboot-bootloader

5. After the phone has rebooted into `fastboot` mode, run these commands:

    fastboot oem rebootRUU
    fastboot erase cache
    fastboot flash zip PL99IMG.zip

6. Flashing the zip will take a while, so take a break and make some coffee. Once the process completes without any errors, manually reboot the device with the following command:

    fastboot reboot-bootloader

> **Note:** The flash process will halt at around 75% to 90% on phone screen! This is a normal safety precaution; otherwise, there would be no way to check the console output before reboot.

7. If the bootloader was flashed correctly, manually power off and reboot the phone. If not, return to step 5.

Source: [XDA-Developers - victor0888: Red Text Removal for X920 HBOOT 1.55](http://forum.xda-developers.com/showthread.php?t=2603362)

### Method 2: Installation through HBOOT

1. Download one of the RUUs above, rename it to `PL99IMG.zip` and place it on the root of the phone's storage.
2. While the phone is on, hold down the **Power** button. A menu will appear. 
3. Hold down the **Volume Down** button.
4. Tap **Restart**, and press **OK**.
  * Keep holding the **Volume Down** button.
5. When the phone restarts, and displays the HBOOT screen, release the **Volume Down** button.
6. The phone will install the new bootloader, and restart automatically.

Source: [XDA-Developers - it2007me: Remove Red Text for X920D (Discontinued)](http://forum.xda-developers.com/showthread.php?t=2603362)

## Troubleshooting

* My WiFi won't turn on anymore!
  * It happens from time to time; usually, there is nothing wrong with the hardware.
  * Usually the issue comes from the old radio `1.00` used by DirtyRacun. Update to `1.10.12.1122` , as stated in the section **Update Radio to `1.10.12.1122`**
  * The last resort fix is to reinstall the original firmware (RUU), which requires you to relock the bootloader.
  * If you still want to root and unlock the bootloader, you have to do everything again as if it was a new phone. However, the DirtyRacun S-OFF, CID change, and SIM Unlock is basically permanent, so you can skip their installation.
  * [Source: XDA-Developers - WiFi Error; reinstall RUU](http://forum.xda-developers.com/showpost.php?p=39796218&postcount=331)

## Unlocking the Bootloader without HTCDev (after S-OFF)

> **Note:** This method is only for `relocked` phones that still have S-OFF enabled. This will not work on phones that have never been unlocked, or still have S-ON enabled.

Have you relocked your phone, but forgot to save your `Unlock_code.bin`? (though check your email first) Just don't want to go through HTCDev again? 

If your phone still has S-OFF enabled, you can follow [this guide](http://forum.xda-developers.com/showthread.php?t=2475914) to unlock the bootloader again.

## Sources

* [HTCSoku - HTC J Butterfly](http://htcsoku.info/htcsokudev/2012device/deluxe_j/)
  * [HTCSoku - LTE Specifications for KDDI HTC Devices](http://htcsoku.info/jp-lte-matome/)
  * [HTCSoku - HTC J Butterfly FAQ](http://htcsoku.info/htcsokudev/2012device/deluxe_j/faq/)
  * [HTCSoku - HTL21 Developer's Guide](http://htcsoku.info/htcsokudev/2012device/deluxe_j/dev/)
  * [HTCSoku - HTL21 Rootkit](http://htcsoku.info/htcsokudev/2012device/deluxe_j/rootkit/)
  * [HTCSoku - HTL21 Teardown](http://htcsoku.info/htcsokudev/2012device/deluxe_j/teardown/)
* [Takoweb - Tako0910's Development Log for HTL21](http://gadget.takoweb.com/category/android/j-butterfly/)
  * [Takoweb - Tako0910's Projects for HTL21](http://gadget.takoweb.com/dev-butterfly/)
* [fxtec.info - HTL21 Wiki](http://htl21wiki.fxtec.info/)
* [Wikihouse - HTC J Butterfly](http://www.wikihouse.com/HTC/index.php?HTL21)
* [Verizon Wireless - DROID DNA: Disable HTC Fast Boot](http://support.verizonwireless.com/support/devices/knowledge_base.html/69845/)

### Bootloader Unlock

* [XDA-Developers - SharpIS03: Unlock/Recovery/SIM Unlock](http://forum.xda-developers.com/showthread.php?t=2069754)
  * [HackMyAndroid - Unlock KDDI HTC J Butterfly Bootloader](http://www.hackmyandroid.com/unlock-the-kddi-htc-j-butterfly-bootloader/3938)
  * [XDA-Developers - Samusx: Initial Unlock Research for dlxj](http://forum.xda-developers.com/showpost.php?p=36099934&postcount=15)
* [HTCSoku - Update: CID-based Bootloader Unlock May Get Blocked, use 222222 in case](http://htcsoku.info/htcsokudev-news/au-deluxe-unlock-blocking/)

### S-OFF

* [Unlimited.io - DirtyRacun for HTC J Butterfly 1.39.970.1](http://unlimited.io/deluxe_j.htm)
* [HTCSoku - 1.36 to 1.15 downgrade](http://htcsoku.info/htcsokudev-news/au-deluxe-136to115-downgrade/)
  * [XDA-Developers - 1.36 to 1.15 downgrade (English Translation)](http://forum.xda-developers.com/showthread.php?t=2521783)
* [HTCSoku - Revone S-OFF for HTC J Butterfly 1.29.970.1](http://htcsoku.info/htcsokudev-news/au-deluxe-129-soff-revone/)
* [HTCSoku - Facepalm S-OFF](http://htcsoku.info/htcsokudev-news/facepalm-s-off/)
* [HTCSoku - DirtyRacun S-OFF](http://htcsoku.info/htcsokudev-news/au-deluxe-s-off/)

### Custom Recovery

* [HTCSoku - Generic Root with SuperSU and Custom Recovery](http://htcsoku.info/htcsokudev/rudimentary-knowledge/root-all/)
* [Androidfilehost - tako0910's ROMs and Recoveries](http://www.androidfilehost.com/?w=files&flid=4622)
* [TheUnlockr - TWRP on the HTL21](http://theunlockr.com/2013/02/20/how-to-install-twrp-recovery-on-the-htc-j-butterfly-htl21/)

### SIM Unlock

* [HTCSoku - fnoji111: True SIM Unlock Exploit for HTL21 and INFOBAR](http://htcsoku.info/htcsokudev-news/au-deluxe-impression-simunlock/)
* [HTCSoku - fnoji111: Quick and Dirty SIM Unlock Exploit for HTC J Butterfly](http://htcsoku.info/htcsokudev/2012device/deluxe_j/simfree/)
  * [XDA-Developers - fnoji111: SIM Unlock Exploit for HTC J Butterfly by installing X920 Bootloader (English Translation)](http://forum.xda-developers.com/showpost.php?p=37173043&postcount=208)

### Source Code

* [HTCDev - dlxj 3.4.10 Kernel Source from 1.29.970.1 Android 4.1](http://dl4.htc.com/RomCode/Source_and_Binaries/dlxj-jb-crc-3.4.10-cc12f3d.zip)
* [Github - tako0910: Sense Jellybean 4.2.2 Kernel for HTC J Butterfly (dlxj)](https://github.com/tako0910/android_422_kernel_htc_dlxj)
* [Github - tako0910: Sense KitKat 4.4 Kernel for HTC J Butterfly (dlxj)](https://github.com/tako0910/android_kk_kernel_htc_dlxj)
* [Github - tako0910: Cyanogenmod Device Tree for HTC J Butterfly (dlxj)](https://github.com/tako0910/android_device_htc_dlxj)
* [Github - tako0910: Android Vendor Blobs for HTC J Butterfly (dlxj)](https://github.com/tako0910/android_vendor_htc_dlxj)
* [Github - schqiushui: Sense Kitkat 4.4 Kernel for HTC J Butterfly (dlxj)](https://github.com/schqiushui/android_kk_kernel_htc_dlxj)