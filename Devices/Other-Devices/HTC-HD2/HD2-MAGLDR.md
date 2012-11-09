MAGLDR is the first, and best-known bootloader for the HD2. As such, it is the best supported (for now), and is the most versatile pick since it also supports booting Windows Phone 7. Unfortunately, it is closed source and has not been updated in over a year, with a few unsolved quirks. cLK may prove to be the more sustainable choice in the future, but for now, most people use MAGLDR.

## Features

* The most common bootloader
* Ability to Boot Windows Phone 7 or Android from a SD Card
* USB flasher mode
* Connection Type = RMNET
* The Only Bootloader with Built-in Tetris

## Issues

* Cannot charge the battery when using MAGLDR
* However, MAGLDR can boot when plugged in. Once you boot into an actual operating system, the battery will charge.
* Closed source: the community cannot assist in maintaining it
* Starting to feel the effects of code rot

## Installing MAGLDR 1.13

1. Open the [HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783).
1. Make sure that your phone's battery is more than 50% charged! MAGLDR cannot charge the battery, only the operating system is able to.
1. Power off phone.
1. Press and hold *volume down + end* until the HSPL (multi-colored) screen appears. Make sure that it says `CotullaHSPL`.
1. Plug in your USB cord to your phone. At the bottom of your Phone it should say `SERIAL` until your USB is connected. Once USB is connected it should say `USB` at the bottom.
1. The bottom of your phone will change from saying `Serial to USB`
1. Click on the bottom right hand button that says `Install Magldr`
1. Install by following on screen directions. (press end key)
1. Remove battery
1. Replace battery and power on the phone.
1. MAGLDR is now installed! 
1. You now need to install Android or Windows Phone 7 to your phone, it does not have an OS at the moment.

## Installing Operating Systems with MAGLDR

After you've installed MAGLDR, the stock Windows Mobile 6.5 OS will be completely erased (not that it will really be missed). However, you are left without an OS, so choose between some of the below.

Before choosing on Android or WP7, note that you can actually have both at once! See the section **Dual-Booting Android and WP7**.

### Dual-Booting Android and WP7

There's a dirty little secret with dual booting that is rarely explained well. The reality is that WP7 uses an uniquely esoteric file storage scheme rather than using FAT like everyone else, so you can't share the same data partition between Android and WP7. 

However, you can still dual boot Android and WP7; you just need to have two card (recommended) or one card divided between the two systems.

#### Method 1: Two-SDCards

The simplest and most efficient way is probably to have two SDCards, one for WP7 and one for Android. There is the issue of having to carry around the second SDCard, but it's easier than having to divide the partition between the two.

1. Find two SDCards, and decide which one to dedicate to which system. (for example, I use Android more than Windows, so I gave WP7 the smaller card)

2. Now take the card meant for WP7 and plug it into the phone. Remember, this SDCard will be completely erased in the process, so back up any files on it.

3. Install WP7 as stated in the section, **Windows Phone 7 (NAND Only)**. If you've already done so, that SDCard will be stuck to that system unless you reformat it, reinstall WP7, or divide it between Android and Windows in **Method 2**.

4. Now use the method in the section **Android (NativeSD)** using the other SDCard.

5. (Optional) Currently, MAGLDR will be set to automatically boot WP7 first. Since WP7 will not work without it's sdcard, it's a good idea to set MAGLDR to allow you to choose at boot. Get to the MAGLDR menu, go to **10. Services** and into **1. Boot Settings**. Select the **2. AlwaysMenu** option and your phone will always go straight to MAGLDR and give you the choice.

6. Now, when you want to run WP7, insert WP7's SDCard and boot to `WP7`. When you want to run Android, insert Android's SDCard and boot to `Android SD`.

7. Your HD2 is now set up for dual boot! Now go to the section **Using your new and shiny HD2** to see what to do after install.

#### Method 2: One SDcard

> Note: You should only use this if you can only afford one SDCard, or *really* don't feel like switching them out. This is more difficult and gives fewer benefits, and can make your HD2 a bitch to use when you want Android with the new NativeSD method or when it's time to update WP7.

Notice that even with PDAImateJam's ROM, your SDCard will have been reformatted and you will only have a paltry 200MB of space available on it. The rest is some crazy "unformatted" filesystem. 

However, this "unformatted" part is where WP7 stores it's data, which is a big problem if you want to use Android or something else. To rectify this issue, you will need to split the SDCard between the two.

[Link to guide on XDA](http://forum.xda-developers.com/showthread.php?t=945565)

### Windows Phone 7 (NAND Only)

Windows Phone 7 ROMS can only be installed to phone memory (NAND). You can dual-boot Android from the SDCard, however. See the below guides for more info.

If Android is currently installed to the NAND, or if any errors occur when flashing, erase the NAND with Task29 using the [HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783).

The instructions here are for installing Pdaimatejam's ROMs, the better pick in my opinion. Note the conditions for each step.

#### Step 0: Format the SDCard

Notice that during WP7 flashing, all files on the SDCard will be deleted (though you can put them back). Backup all files before proceeding. 

#### Step 1: (If WP7 never or not installed on phone)

If this is your first time or Android is installed to phone memory, follow this step.

1. Erase the NAND with Task29 using the HD2 Toolkit.
1. Insert the FAT32 formatted microSD card in your phone

For some ROMs, you might want to do the following to make them work. Check your specific WP7 ROM's instructions for more information.

1. (optional) Flash a new radio if you need to, or use radio upgrade during ROM flashing (put radio file `part00.bin` in `data.zip` file before ROM flash)
1. (optional) If you use a bigger ROM, you might want to squeeze out every byte you can. After booting to MAGLDR, select **10. Services**. Select **4. UseLast24NAND**.
1. (optional) Select **10. Services** again in MAGLDR and choose **5. ClearSD MBR**. This deletes the partition table on your sdcard (which WP7 will format anyway).

Now proceed to step 2.

#### (optional) If Yuki(BTTF) ROM is already installed

This step only applies if you have installed a Yuki(BTTF) edition of WP7 in the past, or any other WP7 system that locks the SDCard.

On some WP7 ROMs, your sdcard will be locked down to WP7 on it's first boot. Not only are they locked to the ROM, but reformatting them to unlock the card is pretty difficult. You're going to need to unlock it for use in Pdaimatejam's ROM, or pretty much anywhere else. [This link](http://forum.xda-developers.com/showthread.php?t=1242071) has more information on this issue.

Some WP7 ROMs like Pdaimatejam's have managed to hack this problem away, but Yuki(BTTF) ROMs retain the issue.

To retake control deploy a [special CAB to unlock the card](http://forum.xda-developers.com/showpost.php?p=17288471&postcount=2650). Alternatively, you can use [Killdisk](http://forum.xda-developers.com/showthread.php?t=1280293) on the [Ultimate Boot CD](http://www.ultimatebootcd.com/).

#### Step 2: Flashing a WP7 ROM

1. When you turn on phone press and hold power button to boot direct to MAGLDR:
1. Go to **5. USB Flasher** and run `DWI.exe` to flash ROM
1. After flashing process done, and when show Main screen with Tiles, do hard reset (Settings - About - reset my phone)
1. Run **Connection Setup**, with OK complete configuration and soft reset (restart) phone
1. You are done.

### Android (NAND)

Android can also be installed to phone memory, but because WP7 cannot run from the SDCard, you need to have Android installed to the SDCard to dual-boot.

#### Installing a Recovery Image

If you are installing Android ROMs, you also need to install a recovery image. This thing allows users to flash new ROMs or other mods from zip files, a method that most Android users are accustomed to.

ClockworkMod is the most famous of these.

(needs fleshing out)

* forum post: http://forum.xda-developers.com/showthread.php?t=898913
* linx: http://forum.xda-developers.com/showpost.php?p=29167786&postcount=1383
#### Installing a ROM with ClockworkMod

(use a template for this?)

### Android (NativeSD)

[NativeSD](http://forum.xda-developers.com/showthread.php?t=1869673) is an exciting new project that fully utilizes the greater space and faster speeds of the microSD cards. Rather than using a chroot image on dated FAT, you will need create a purpose-built ext4 partition on the card.

More info can be found in the link, the project is a bit dynamic and we don't want to end up with outdated info. (Actually, we do want to clear up a method. Will write stuff here soon...)

### Android (SDCard)

This is the older method for getting Android on SDCards. It's as simple as moving folders and images, but the result is a bit slower than the new NativeSD method.

1. Extract the downloaded zip file and place the folder on the SDCard.
2. Set MAGLDR to use this folder (method?)

### Linux (SDCard)

Running full-blown Linux works similarly to the old Android SDCard method; you just copy a folder to the card and set MAGLDR to use that directory.

1. Extract the downloaded zip file and place the folder on the SDCard.
2. Set MAGLDR to use this folder (method?)
