Windows Phone 7 ROMS can only be installed to phone storage (NAND) using MAGLDR.

The instructions here are for installing Pdaimatejam's ROMs, the better pick in my opinion. Note the conditions for each step.

## Step 0: Format the SDCard

If Android is currently installed to the NAND, or if any errors occur when flashing, use the [HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783) to erase the NAND with Task29.

Notice that during WP7 flashing, all files on the SDCard will be deleted (though you can put them back). Backup all files before proceeding. 

## Step 1: (If WP7 never or not installed on phone)

If this is your first time or Android is installed to phone memory, follow this step.

1. Erase the NAND with Task29 using the HD2 Toolkit.
1. Insert the FAT32 formatted microSD card in your phone

For some ROMs, you might want to do the following to make them work. Check your specific WP7 ROM's instructions for more information.

1. (optional) Flash a new radio if you need to, or use radio upgrade during ROM flashing (put radio file `part00.bin` in `data.zip` file before ROM flash)
1. (optional) If you use a bigger ROM, you might want to squeeze out every byte you can. After booting to MAGLDR, select **10. Services**. Select **4. UseLast24NAND**.
1. (optional) Select **10. Services** again in MAGLDR and choose **5. ClearSD MBR**. This deletes the partition table on your sdcard (which WP7 will format anyway).

Now proceed to step 2.

## Step 2: Flashing a WP7 ROM

1. When you turn on phone press and hold power button to boot direct to MAGLDR:
1. Go to **5. USB Flasher** and run `DWI.exe` to flash ROM
1. After flashing process done, and when show Main screen with Tiles, do hard reset (Settings - About - reset my phone)
1. Run **Connection Setup**, with OK complete configuration and soft reset (restart) phone
1. You are done.

## If your SDCard is locked by WP7 and unformattable

This step only applies if you have installed a Yuki(BTTF) edition of WP7 in the past, or any other WP7 system that locks the SDCard.

On some WP7 ROMs, your sdcard will be locked down to WP7 on it's first boot. Not only are they locked to the ROM, but reformatting them to unlock the card is pretty difficult. You're going to need to unlock it for use in Pdaimatejam's ROM, or pretty much anywhere else. [This link](http://forum.xda-developers.com/showthread.php?t=1242071) has more information on this issue.

Some WP7 ROMs like Pdaimatejam's have managed to hack this problem away, but Yuki(BTTF) ROMs retain the issue.

To retake control deploy a [special CAB to unlock the card](http://forum.xda-developers.com/showpost.php?p=17288471&postcount=2650). Alternatively, you can use [Killdisk](http://forum.xda-developers.com/showthread.php?t=1280293) on the [Ultimate Boot CD](http://www.ultimatebootcd.com/).
