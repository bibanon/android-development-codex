# HTC Vision (T-Mobile G2)

> Difficulty: _Medium_ - Need to know ADB, minor risk of bricking, though follow instructions and you'll be fine

While this phone is a bit weak in the processors and RAM, it's second-generation processor allows it to truck along with ICS quite well. It's a bit difficult for newcomers due to T-Mobile mandated locks, but okay for people with moderate experience in Android. The G2 is definitely worth upgrading to teach an old phone new tricks.

The big problem with the G2 are the guides. They are a mess, with some guides having only part of the solution and others obsolete or dangerous. To mitigate that enormous problem, we have consolidated all the information from multiple threads and links into one massive one to rule them all.

## What needs to be done

* Permaroot instructions need to be taken from the wiki
* adb should be moved to it's own section
* all programs need to be consolidated into one package, removing redundant ones
* Readability cleanup
* Desire Z HBOOT instructions
* add more credits as needed

## adb

> _Move this to it's own ADB section_

* [GUIDE - ADB Workshop and Guide for everyone](http://forum.xda-developers.com/showthread.php?t=879701)
* [HOW-TO - ADB for Dummies(How-To Learner's Guide)](http://forum.xda-developers.com/showthread.php?t=502010)
* [How To Set Up ADB/USB Drivers for Android Devices](http://theunlockr.com/2009/10/06/how-to-set-up-adb-usb-drivers-for-android-devices/)
* [HTC Sync including Windows USB drivers for the Vision](http://www.htc.com/de/SupportViewNews.aspx?dl_id=1073&news_id=918)

## Downgrade 2.3 to 2.2

> Based on [Setherio's Guide 2012/05/22](http://forum.xda-developers.com/showthread.php?t=1178912)

G2 Gingerbread ROMS (firmware 2.XX) need to be downgraded in order to get permanent root.

If you are already on _Android 2.2 Froyo_ for some reason, skip to the _Permaroot_ section.

Before downgrading, you should install the Android SDK and SDK Platform Tools, and familiarize yourself a bit with the command line and `adb`.

### Temporary Root

* [misc_version_01.zip](http://forum.xda-developers.com/attachment.php?attachmentid=661216&d=1311237785)
* [fre3vo.zip](http://forum.xda-developers.com/attachment.php?attachmentid=661246&d=1311240968)
* [fastboot.zip](http://forum.xda-developers.com/attachment.php?attachmentid=756000&d=1337721761)
* [Vision-fre3vo-temp-root.zip](http://forum.xda-developers.com/attachment.php?attachmentid=759303&d=1319420755)
* [flashgc.zip](http://forum.xda-developers.com/attachment.php?attachmentid=819704&d=1324116910)

1. Download the above files, unzip them, and place the files in your platform-tools folder. To elaborate, place the `fre3vo` file inside of the `fre3vo.zip` file and the `misc_version file` inside the `misc_version_01.zip` file in your `platform-tools` directory.).
2. Make sure you have your sdcard inserted in your phone, and you are NOT in USB Storage Mode, and your sdcard is NOT FULL.
3. Run the following command to verify the exploit has access to what it needs. (Only the first line is the command. The second line should be the result returned if all goes well.):

    > adb shell cat /dev/msm_rotator
    /dev/msm_rotator: invalid length

4. If you received the same message, you're good to continue on. If not... I'd recommend going back to #g2root and asking them. (I am just passing along the information after all).
5. Run the following commands from your platform-tools directory.

    > adb push fre3vo /data/local/tmp
    > adb shell
    $ chmod 777 /data/local/tmp/fre3vo
    $ /data/local/tmp/fre3vo -debug -start FAA90000 -end FFFFFFFF

6.  After you enter that command, with luck you should see something similar to the last few lines in the following displayed. (It may take a minute or two. From what I can tell, this appears to be the quickest method as the exploit seems to be found in the latter regions.) 
    
    Buffer offset:      00000000
    Buffer size:        8192

    Scanning region fb7b0000...
    Scanning region fb8a0000...
    Scanning region fb990000...
    Scanning region fba90000...
    Potential exploit area found at address fbb4d600:a00.
    Exploiting device...
    
If the exploit works, you will be kicked out of ADB shell, proceed to Step #8.
If the above does not work, and fails, you can try the following, and hopefully one will work, try the following (you must reboot your phone before you try another set):

    $ /data/local/tmp/fre3vo -debug -start 10000000 -end 1FFFFFFF
    $ /data/local/tmp/fre3vo -debug -start 20000000 -end 2FFFFFFF
    $ /data/local/tmp/fre3vo -debug -start 30000000 -end 3FFFFFFF
    $ /data/local/tmp/fre3vo -debug -start F0000000 -end FFFFFFFF
    $ /data/local/tmp/fre3vo -debug -start E0000000 -end EFFFFFFF

8. If you did get kicked out of adb shell, open it again. You should now see the lovely # instead of $, thus granting you temp root. Go ahead and exit out of shell to proceed to the next stage.

    > adb shell
    # exit
    
### Changing Version Number to Allow Downgrade and Gaining SuperCID with a Goldcard

1. If you followed the first portion of this, you should of unzipped `misc_version_01.zip` and `flashgc.zip` in the platform-tools directory. If you haven't done that yet, do that now.
2. Then run the following commands from your platform-tools directory.
    
    > adb push misc_version /data/local/tmp/misc_version
    > adb push flashgc /data/local/tmp/flashgc
    > adb shell chmod 777 /data/local/tmp/*
    > adb shell
    # cd /data/local/tmp
    # ./misc_version -s 1.00.000.0
    --set_version set. VERSION will be changed to: 1.00.000.0
    Patching and backing up partition 17...
    # ./flashgc
    
> Note: If you get the `Error opening backup file.` error, please make sure your sdcard is inserted in your phone and is NOT mounted to your computer (ie: make sure you are NOT in USB Storage Mode).

3. Now sync the changes.

    # sync

4. Double check and make sure everything looks good so far by running the following command (still in adb shell).

    # dd if=/dev/block/mmcblk0p17 bs=1 skip=160 count=10
    1.00.000.010+0 records in
    10+0 records out
    10 bytes transferred in 0.001 secs (10000 bytes/sec)
    
5. **BE SURE TO BACKUP ANY DATA!!!**

### Temp-rooting to backup apps and data

_If you have nothing to back up or don't care to back anything up, proceed to the next section._

> Credit goes to Nipqer from #g2root for providing me with this method.

1. Download the attached file, [Vision-fre3vo-temp-root.zip](http://forum.xda-developers.com/attachment.php?attachmentid=759303&d=1319420755).
2. Extract the contents to your `platform-tools` directory.
3. Run the following commands in command prompt while in `platform-tools` directory:

    > adb push su /data/local/tmp/
    > adb push busybox /data/local/tmp/
    > adb push fixsu.sh /data/local/tmp/
    > adb install SuperUser.apk
    > adb shell chmod 755 /data/local/tmp/fixsu.sh
    > adb shell /data/local/tmp/fixsu.sh

4. Download a backing up application such as...

* [Titanium Backup](https://market.android.com/details?id=com.keramidas.TitaniumBackup)
* [MyBackup Root](https://market.android.com/details?id=com.rerware.android.MyBackupRoot)

Make a backup!

### Flash OTA 2.2 image

1. Download the stock ROM for your device:

* **G2** - [Mirror 1](http://shipped-roms.com/download.php?category=android&model=Vision&file=PC10IMG_Vision_TMOUS_1.19.531.1_Radio_12.21.60.09b_26.02.01.15_M2_release_149459_signed.zip) - [Mirror 2](http://omnimist.org/android/files/Vision_G2_1.19.531.1_PC10IMG.zip) - [Mirror 3](http://ratherphallic.co.cc/UNMODDED/Vision_G2_1.19.531.1_PC10IMG.zip)
  * _MD5_ - `531c08dc402e15577b947bf4cd22aec2`

* **Desire Z** - [Mirror 1](http://www.michelcoulon.fr/dhd/UMT/PC10IMG.zip) - [Mirror 2](http://shenye.co.uk/files/fya-vision-root/PC10IMG.zip) - [Mirror 3](http://omnimist.org/android/files/Vision_DZ_1.34.405.5_PC10IMG.zip) - [Mirror 4](http://ratherphallic.co.cc/UNMODDED/Vision_DZ_1.34.405.5_PC10IMG.zip)
  * _MD5_ - `2ff42897cd27e0db425a2cf36c8bd078`

2. Follow either Manual Downgrade or Fastboot Downgrade

#### Fastboot Downgrade

1. Rename the downloaded stock rom "StockRom.zip" (if extensions are hidden, rename it "StockRom").
2. Place the downloaded stock rom zip file in your platform-tools directory.
3.Download the attached file "fastboot.zip. In the zip archive there are three folders, "windows", "mac", and "linux". Extract the file from the associated with your operating system and place it in platform-tools directory.
4. In command prompt, type the following command to reboot into bootloader:

    > adb reboot bootloader

5. Make sure your device is recognized by typing the following command.

    > fastboot devices

6. If your device is recognized, it should return a serial/model number.

    > fastboot oem rebootRUU

7. Your phone should now reboot into a black screen with a gray/silver "HTC" logo on it.
8. Next we flash the Stock Rom. This may take a few minutes as it transfers the file to the phone then attemps to update (downgrade).

    > fastboot flash zip StockRom.zip

9. In rare cases the flash stops and the user gets a warning to repeat the flash immediately - no panic, just run the " fastboot flash zip StockRom.zip" (only this command, not the rebootRUU one) again and it will work.
10. When it finishes, wait a minute or two (just in case) then reboot your phone by typing:

    > fastboot reboot
 
#### Manual Downgrade

1. Rename the downloaded rom to it's proper update name: (Please note, the filenames MUST be all uppercase except for the extension, and if file extensions are hidden, do not include ".zip"):

* G2: "PC10IMG.zip"
* Desire Z: "PC10IMG.zip"
* myTouch 4G: "PD15IMG.zip"
* Desire HD: "PD98IMG.zip"

2. Place the zip file in the root of your sdcard.
3. Reboot your phone into bootloader by typing the following command:

    > adb reboot bootloader 

4. After your phone has entered bootloader, press the power button. It will then scan for the associated rom file and ask you to update by pressing a key.
5. Press the key it requests to perform the update. **DO NOT INTERRUPT THIS PROCESS.**
6. Your phone will reboot once or twice - this is completely normal.
7. This process will take roughly 5-10 minutes so make sure your phone is plugged in, either to an outlet or your computer.
8. Once the process is finished, it will ask you to reboot by pressing a key. Press the associated key and it will reboot into the Stock Froyo rom!
9. After booting into Android 2.2, **DO NOT update the 70MB OTA**. That is the update to Gingerbread. There is one update that will come before that, that is a lot smaller in size, which is the WiFi-Calling update - that update is okay to install. (That is, if you want to stay with stock froyo, which most of us don't.)

## Permaroot

Downgrading is half the battle. Now we need to repeat the process to get permanent superuser privileges for the phone, and an engineering hboot.

## Install a Recovery Image

1. Download a custom recovery:
  * [Latest Clockworkmod](http://download.clockworkmod.com/recoveries/recovery-clockwork-5.0.2.7-vision.img)
  * [Clockworkmod Touch](http://download.clockworkmod.com/recoveries/recovery-clockwork-touch-5.8.1.0-vision.img)
  * [4ext Touch](http://www.4ext.net/ddl/vision/1003.3.0.zip)
2. Place the recovery img in the folder with fastboot.exe (which you used to unlock your device), rename the recovery to recovery.img
3. Reboot phone to fastboot mode: Either pull battery and hold TRACKPAD and press power, or run 'adb reboot bootloader' from a cmd/terminal
4. Run the code below:

    > fastboot flash recovery recovery.img

    sending 'recovery' (4930 KB)...
    OKAY [  0.851s]
    writing 'recovery'...
    OKAY [  0.819s]
    finished. total time: 1.670s

## Install a Custom Rom

http://forum.xda-developers.com/showthread.php?t=1453066

> NOTE: This phone is strangely unique in that you must manually flash the ROM's `boot.img` each time to get custom ROMS booting.

1. Download the rom.zip you wish to run.
2. Extract boot.img from the zip and place it in the folder with fastboot.
3. Copy the rom.zip to your sdcard
4. Flash the rom.zip from your sdcard
5. Reboot to fastboot mode (as above)
6. Run from a cmd/terminal

      > fastboot flash boot boot.img

      sending 'boot' (4096 KB)...
      OKAY [  0.711s]
      writing 'boot'...
      OKAY [  1.085s]
      finished. total time: 1.798s
      
## Flash Desire Z HBOOT on G1

Some ROMs, such as ICS/JB, or Sense ROMs require the use of the Desire Z HBOOT. This HBOOT allows extra space to be used for the system, and does not change any functionality. 

It is strongly recommended to flash this HBOOT, even if you do not plan to install Sense ROMs; the extra space can be very useful. Otherwise, ROMs requiring the Desire Z ROM will not boot when flashed.

1. Download and unzip the [Desire Z HBOOT from the Cyanogenmod Wiki.](http://cmw.cmfs.me/vision/hboot/vision.hboot-0.84.2000.zip)
2. Make sure that `PC10IMG.zip` has been removed from the SDCard.
3. Reboot your phone to fastboot mode with the command:

    adb reboot-bootloader
    
4. Flash the hboot using fastboot.

    fastboot flash hboot hboot-eng.img
    
5. Reboot back into bootloader mode when you're done.

    fastboot reboot-bootloader
    
6. Your bootloader should now display `HBOOT-0.84.2000` at the top. 
7. From the bootloader, use the volume keys and power button to select the  `BOOTLOADER` option, and then select the `RECOVERY` option.
8. Enter Clockworkmod's **Mounts and Storage** menu and format all partitions except for the `/sdcard`.
9. After that, you will need to flash a new ROM of your choice for the phone to work again. Put your recovery into USB Mass Storage mode to load one in, and then install it.
    
* [XDA Developers - Flash Desire Z HBOOT with fastboot](http://forum.xda-developers.com/showthread.php?p=27796375)
* [Virtuous ROM - Migrating to Desire Z HBOOT](http://www.virtuousrom.com/2011/06/t-mobile-g2-users-migrating-to-desirez.html)

## Buttons

Recovery: Hold Volume Down while turning it on, next select recovery with the volume buttons and press power to select

## Sources

We couldn't have made this guide without the great efforts of the volunteer devs at XDA. Thanks guys.

* [XDA-Wiki article on the HTC Vision G2](http://forum.xda-developers.com/wiki/index.php?title=HTC_Vision)
* [Nipqer's How to get root/flash custom roms with HTCDEV unlock](http://forum.xda-developers.com/showthread.php?t=1453066)
* [Setherio's Downgrade G2 (2.3.X) & DZ (2.3.X) & mT4g (2.3.4) & DHD w/ S-ON to Stock Froyo](http://forum.xda-developers.com/showthread.php?t=1178912)

### Credits

The mixed users and developers who had a hand in the content of this guide:

Setherio, Nipqer, Cimer, strawmetal, petarpLab, iDylan1357, asharma5290, guhl, pierre_ja, and skorgon from #g2root.
