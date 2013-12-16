## What to Find

This method needs a ton of rewriting, clarification, and documentation, especially with dead links galore.

* **[Found]** - [Regain all 16GB of space](http://forum.xda-developers.com/showthread.php?t=2160124)
* **[Found]** - [Generic fixes zip file (lte, sdcard, nfc, etc)](http://forum.xda-developers.com/showthread.php?t=2117576)
    * SDCard fix
    * Volume keyfix (reversal)
    * NFC fix (check if the separate file is equivalent, probably is
* AT&T Radio for LTE (and find out which radio is best and most stable)
* Capacitive button fix

---

* [LGNPST + Drivers](http://pastebin.com/g8hXBaaA)
* N4 files - (Stock ROM Google, Custom Recovery, SuperSu)
* LGOG convert to N4 file LGNPST
* **[Found]** [AT&T LGOG Restore `.tot` in LGNPST](http://forum.xda-developers.com/showthread.php?t=1984545)
* SDCard mod for MultiROM (create it)
* Test results: what configuration is best, radios, instability, issues, etc. Check the XDA threads for info

## Procedure

### Flash a Nexus 4 Partition Table with LGNPST

 + Backup all important files
 + Install LGNPST(if you dont have it already)
 + Extract the zip file
 + There should be a file with a file extension(.tot)
 + Change the file extension to a .bin
 + Start LGNPST
 + Put your phone into download mode (Turn it off and press the Volume Up + Volume Down buttons, a picture will pop up saying that the phone is in download mode)
 + Plug your phone into your computer(Make sure you are using the usb cable that came with the phone)
 + Wait until your phone is recognized by the computer
 + Open LGNPST
 + Next to the picture of a phone with "Emergency" on it there should be a place where you select the DLL file
 + Click on it and select the one that says LG_E970(If you don't see it choose LG_LS970)
 + Under the DLL file selection there should be a BIN FILE selector
 + Choose the bin file you renamed earlier
 + Start the flashing procces
 + Wait until it is at 85%
 + An error message should pop up saying that the Phone Disconnected
 + It should start booting 
 + If it doesn't boot put your phone into fastboot mode(Hold the Volume up button + The Power button ) and get fastboot 
 + Type fastboot -w into the command prompt
 + Once your done wait for it to restart

#### Sources

* [XDA-Developers - LGNPST Nexus 4 Conversion (.tot file)](http://www.androidfilehost.com/?fid=9390248398092765463)

### Install External SDCard Support

(only known to work well on 4.2)

* [XDA-Developers - ROM Fixes](http://forum.xda-developers.com/showthread.php?t=2117576)

### Increase 8GB to 16GB Storage

The partition table we flashed was made for the 8GB Nexus 4, since we wanted to stay on the safe side. To reclaim that lost space, we have to expand the partitions to fill the rest of the free space on the internal storage.

#### Files Needed

* [Modified DD](http://d-h.st/cFA)
* [16G Primary GPT](http://d-h.st/yUQ)
* [16G Secondary GPT](http://d-h.st/0dH)

#### Directions

1. Get all the required files above and adb/fastboot if you don't already
2. Get a microSD card and put the downloaded files in it
3. Get Sk8's CWMTouch Recovery [here](http://d-h.st/QAx). This has SDCard support
4. Flash the recovery
5. Boot into the recovery
6. Backup your files on your sdcard
7. Connect your phone to your computer and type 
        adb shell
8. Once in shell type(REMOVE THE #)
        # cp /external_sd/dd / 
        # chmod 755 /dd
9. Backup your existing partitions(REMOVE THE # AND MAKE SURE YOU TYPE / BEFORE dd)
        # /dd if=/dev/block/mmcblk0 of=/external_sd/pgpt8G.img bs=512 count=34
        # /dd if=/dev/block/mmcblk0 of=/external_sd/sgpt8G.img bs=512 skip=30777311
10. Move content of DDR and grow partitions to their new locations(REMOVE THE # AND MAKE SURE YOU TYPE / BEFORE dd)
        # /dd if=/dev/block/mmcblk0 of=/external_sd/DDR bs=512 skip=15267840 count=2015
        # /dd if=/external_sd/DDR of=/de7. Connect your phone to your computer and type 
        adb shell
8. Once in shell type(REMOVE THE #)
        # cp /external_sd/dd / 
        # chmod 755 /dd
9. Backup your existing partitions(REMOVE THE # AND MAKE SURE YOU TYPE / BEFORE dd)
        # /dd if=/dev/block/mmcblk0 of=/external_sd/pgpt8G.img bs=512 count=34
        # /dd if=/dev/block/mmcblk0 of=/external_sd/sgpt8G.img bs=512 skip=30777311
10. Move content of DDR and grow partitions to their new locations(REMOVE THE # AND MAKE SURE YOU TYPE / BEFORE dd)
        # /dd if=/dev/block/mmcblk0 of=/external_sd/DDR bs=512 skip=15267840 count=2015
        # /dd if=/external_sd/DDR of=/dev/block/mmcblk0 bs=512 seek=30775296 conv=notrunc
11. Install new partition tables
        # /dd if=/external_sd/sgpt16G.img of=/dev/block/mmcblk0 bs=512 seek=30777311 conv=notrunc
        # /dd if=/external_sd/pgpt16G.img of=/dev/block/mmcblk0 bs=512 seek=0 conv=notrunc
12. Type
        parted /dev/block/mmcblk0
13. Parted should start up and show you this:
         GNU Parted 1.8.8.1.179-aef3
         Using /dev/block/mmcblk0
         Welcome to GNU Parted! Type 'help' to view a list of commands.
         (parted)
14. Type "p" (without both "s) and press enter
15. It might take a few seconds but you should see
          Model: MMC 016G92 (sd/mmc)
          Disk /dev/block/mmcblk0: 15.8GB
          Sector size (logical/physical): 512B/512B
          Partition Table: gpt
          
          Number  Start   End     Size    File system  Name      Flags
          1      524kB   67.6MB  67.1MB  fat16        modem
          2      67.6MB  68.2MB  524kB                sbl1
          3      68.2MB  68.7MB  524kB                sbl2
          4      68.7MB  70.8MB  2097kB               sbl3
          5      70.8MB  71.3MB  524kB                tz
          6      71.3MB  94.4MB  23.1MB               boot
          7      94.4MB  117MB   23.1MB               recovery
          8      117MB   118MB   799kB                m9kefs1
          9      118MB   119MB   799kB                m9kefs2
          10      119MB   120MB   799kB                m9kefs3
          11      120MB   121MB   524kB                rpm
          12      121MB   121MB   524kB                aboot
          13      121MB   122MB   524kB                sbl2b
          14      122MB   124MB   2097kB               sbl3b
          15      124MB   124MB   524kB                abootb
          16      124MB   125MB   524kB                rpmb
          17      125MB   125MB   524kB                tzb
          18      125MB   126MB   524kB                metadata
          19      126MB   143MB   16.8MB               misc
          20      143MB   159MB   16.8MB  ext4         persist
          21      159MB   1040MB  881MB   ext4         system
          22      1040MB  1627MB  587MB   ext4         cache
          23      1627MB  15.8GB  14.1GB  ext4         userdata
          24      15.8GB  15.8GB  524kB                DDR
          25      15.8GB  15.8GB  507kB                growv/block/mmcblk0 bs=512 seek=30775296 conv=notrunc
11. Install new partition tables
        # /dd if=/external_sd/sgpt16G.img of=/dev/block/mmcblk0 bs=512 seek=30777311 conv=notrunc
        # /dd if=/external_sd/pgpt16G.img of=/dev/block/mmcblk0 bs=512 seek=0 conv=notrunc
12. Type
        parted /dev/block/mmcblk0
13. Parted should start up and show you this:
         GNU Parted 1.8.8.1.179-aef3
         Using /dev/block/mmcblk0
         Welcome to GNU Parted! Type 'help' to view a list of commands.
         (parted)
14. Type "p" (without both "s) and press enter
15. It might take a few seconds but you should see
          Model: MMC 016G92 (sd/mmc)
          Disk /dev/block/mmcblk0: 15.8GB
          Sector size (logical/physical): 512B/512B
          Partition Table: gpt
          
          Number  Start   End     Size    File system  Name      Flags
          1      524kB   67.6MB  67.1MB  fat16        modem
          2      67.6MB  68.2MB  524kB                sbl1
          3      68.2MB  68.7MB  524kB                sbl2
          4      68.7MB  70.8MB  2097kB               sbl3
          5      70.8MB  71.3MB  524kB                tz
          6      71.3MB  94.4MB  23.1MB               boot
          7      94.4MB  117MB   23.1MB               recovery
          8      117MB   118MB   799kB                m9kefs1
          9      118MB   119MB   799kB                m9kefs2
          10      119MB   120MB   799kB                m9kefs3
          11      120MB   121MB   524kB                rpm
          12      121MB   121MB   524kB                aboot
          13      121MB   122MB   524kB                sbl2b
          14      122MB   124MB   2097kB               sbl3b
          15      124MB   124MB   524kB                abootb
          16      124MB   125MB   524kB                rpmb
          17      125MB   125MB   524kB                tzb
          18      125MB   126MB   524kB                metadata
          19      126MB   143MB   16.8MB               misc
          20      143MB   159MB   16.8MB  ext4         persist
          21      159MB   1040MB  881MB   ext4         system
          22      1040MB  1627MB  587MB   ext4         cache
          23      1627MB  15.8GB  14.1GB  ext4         userdata
          24      15.8GB  15.8GB  524kB                DDR
          25      15.8GB  15.8GB  507kB                grow
    

#### Sources

[XDA-Developers - Increase Storage on N4 Conversion](http://forum.xda-developers.com/showthread.php?t=2160124)

#### Sources

* [XDA-Developers - Nexus 4 Conversion 8GB to 16GB](http://forum.xda-developers.com/showthread.php?t=2160124)
## Procedure Outline

### Core Procedure

* Backup all internal storage, and TWRP/CWM if necessary
* Install SDK Platform Tools, drivers
* Install LGNPST
* Use LGNPST to flash N4 partition table
* Factory Reset with Fastboot `fastboot - w`
* *(ONLY if it is still bootlooping, wipe /system)* Turn off the phone, hold volume down+power button (or volume up, due to reversal?) while turning on, select and enter recovery option, use volume key to select "wipe data/factory reset". [Source](http://forum.xda-developers.com/showpost.php?p=36976814&postcount=412)
* Flash AT&T Radio for LTE, and general stability

### Custom Recovery

* **Stock ROM users:**
    * Run Custom Recovery
    * Install SuperSu (optional)
    * Stay in custom recovery for next step
* **Custom ROM users:**
    * Install Custom Recovery (TWRP/CWM)
    * Install Custom ROM and/or Kernel

### Fixes

* Flash NFC fix (only if needed)
* General fixes file, recompile and test it for non CM/AOSP ROMs
* Volume key fix (reverse)
* Capacitive Button fix (optional)

### Other Mods

* MultiROM N4
    * Dual-boot Android ROMs
    * Ubuntu Touch, Firefox OS, Linux, etc.
* Restore AT&T/LG Stock Firmware with LGNPST

---

* Install a Nexus 4 Custom Recovery, such as [TWRP](http://forum.xda-developers.com/showthread.php?t=2010984) (You MUST get rid of your existing Optimus G recoveries)