# HTC Droid Incredible

The HTC Droid Incredible lives up to it's name; it has the strong aesthetic design of the Droid series, but because of this droid's unlockable bootloaders and it's development community, it remains incredible to this day when compared to it's predecessor and successors.

## Development Info

* **Developer Friendliness:** Acceptable
* **Bootloader Unlockable?:** Yes, through HTCDev
* **Ease of Rooting/Custom ROMs:** Grueling downgrade with ADB, No GUIs
* **Range:** Verizon Wireless Exclusive, United States
* **Dev Community Health:** Acceptable, declining
* **Stock Android Version:** Android 2.3.4 GB with HTC Sense 1.0
* **Optimal Android Version:** Android 4.0 ICS

## Disclaimer

Nearly all the content in this guide is a consolidation and rewrite of the groundbreaking work of others. I have attempted to find all the people whose contents and guides are a part of this compilation, with the credits and source links below. However, if you feel that your name and guide is not in the credits, contact us and we'll put you in.

## Bypass Activation

Like all Verizon phones, you will have to make a special call to Verizon to activate your phone before using it. What you may not know is that there is a way to bypass this screen, if you don't have a contract with them.

When you see the screen that tells you to call to activate just hit **call to activate**, wait a few seconds, and press **end call** as soon as it starts calling. The Droid will beep three times if it "failed" successfully. 

Afterwards, press **Try Again** and repeat this 4 times. Sooner or later the Droid will give up and bypass activation. 

You can now use your Android with Wi-Fi as a conventional multimedia device, perhaps like an iPod Touch, without needing the Verizon service.

## Glossary

### General Android Terms

* **Rooting** - Gaining the ability to use the superuser account (root), which can read and make changes to system files.
* **ROM** - An installable image containing the operating system to be installed to your phone.
* **Radio** - An installable image containing proprietary firmware for the cell phone chip.
* **Custom ROMs** - Installable operating system images modified by ROM builders.
* **Custom Recovery** - Software that allows users to flash ROMs directly from the device without need for RUUs. A livesaver in case of bad ROMs.
* **Android Version Names** - Android uses a specific and memorable naming convention for it's releases. They will be used interchangeably with version numbers. Here they are in order:
  * **Froyo** (Android 2.2)
  * **Gingerbread [GB]** (Android 2.3)
  * **Honeycomb [HC]** (Android 3.0, tablets only)
  * **Ice Cream Sandwich [ICS]** (Android 4.0)
  * **Jelly Bean [JB]** (Android 4.1)

### HTC Android Specific Terms

* **RUU** - ROM Update Utility. The official HTC-sanctioned method to update your phone. 
* **hboot** - The HTC bootloader for Android devices. Starts up your system and interfaces with `fastboot` and RUU flashes.
* **S-ON** - Security ON; the default state of the bootloader. This makes it a bit harder to flash custom ROMs along with other security constraints..
* **S-OFF** - Security OFF; the ideal state of the bootloader. This allows you to flash any custom ROM quite easily without having to jump through hoops.

## Preperation

You will need to download two files and extract them.

* [miniadb_inc.zip](http://dl.dropbox.com/u/22186524/files/miniadb_inc.zip) - Modified from Scotty's original miniadb package. Now with Linux installation instructions and binaries, and cleaned up to work for all phones.
* [dinc_2.3.4_unlock_files.zip](http://dl.dropbox.com/u/22186524/files/dinc_2.3.4_unlock_files.zip) - Contains all the little files you need to work with your droid. It's just a compilation of the links in the next section.
* PB31IMG for froyo: [PB31IMG.zip](http://www.mediafire.com/?uvha2u2pv3xp8d5)
  # md5: `31bb1611a0fa8197d447c0438426717e`

Then, you'll need to go to [HTCdev - Unlock Bootloader](http://www.htcdev.com/bootloader) and register an account.
  
### Included in the archive

This is a list of what is inside the archive and where to get the files. Just download the one above and you'll have everything.

* [miniadb_inc](http://www.mediafire.com/?o6c4kq4wyccuom5)
  * md5: `7c5211686a20b558ccd660c782f82e2b`
- PB31IMG for froyo: [PB31IMG.zip](http://www.mediafire.com/?uvha2u2pv3xp8d5)
  # md5: `31bb1611a0fa8197d447c0438426717e`
- superuser files: [superuser 3.07](http://downloads.androidsu.com/superuser/Superuser-3.0.7-efgh-signed.zip) (found on [revolutionary public wiki](http://unrevoked.com/rootwiki/doku.php/public/revolutionary))
- forever patch [unrevoked-forever](http://downloads.unrevoked.com/forever/current/unrevoked-forever.zip) from [public:forever RootWiki](http://unrevoked.com/rootwiki/doku.php/public/forever)

### Prepare ADB (Windows)

> Might want to incorporate into one big **Android SDK Platform Tools** section

You will need to get the proper drivers to interface with your phone. You can choose either to install HTCSync for the drivers, or better yet, use the [modified HTC drivers from revolutionary](http://downloads.unrevoked.com/HTCDriver3.0.0.007.exe). Follow the instructions there to install them.

First, unzip your `mini-adb-inc.zip` file into the root folder of your hard drive, such as `C:\`. This means the top level, not inside any folders, so just copy and paste the folder onto `C:\` with everything else that is there.

You actually can call it whatver you want,but directions from here forward will assume this folder to be named `miniadb_inc`

Open a command window. In Windows 7, click the start bubble in the lower left and type `command` in the search box to find the Command Prompt application. In Windows XP, go to **Run** and type `cmd.exe` to run it.

Type the following at the prompt in your cmd window to change to your `miniadb_inc` directory. 

    cd c:\miniadb_inc

Your command prompt should display `c:\miniadb_inc>` provided you: 

1. unzipped the miniadb_inc zip
2. put the folder on your c drive
3. didn't change the name

Now make sure usb debugging is checked in **settings/apps/development** on your phone,and plug your phone into your PC with a usb cable

Make sure your phone is being recognized- type:

    adb devices

If your drivers are installed correctly, this should show your phone's serial number. You should hear the **found device** noises when you plug your phone in. if it starts installing drivers,wait for it to finish before typing the `adb devices` command.

### Things to Know

In the guides below, you may be told to do specific things. Refer here for those specific methods.

#### Boot to HBoot

Completely turn off your droid (sometimes it is also necessary to replace the battery after powering off). Then, hold the volume and power buttons until you see a screen with three Androids on the bottom and text for options. This is the hboot.

You can use the volume rocker to navigate options, and the power button to select them.

#### Boot to `fastboot`

Sometimes you may want to use `fastboot` to flash things. Your phone will need to be in `fastboot` mode to do so. Get to the `hboot` screen as above and select the `fastboot` option. Once you connect your phone to USB, it will display **fastboot USB** if you are connected correctly.

#### Boot to Recovery

After installing a custom recovery, you can enter it at any time from the above HBoot menu. Just choose the `recovery` option.

#### Enable USB Debugging

USB debugging mode allows adb to work with your phone. To enable it, make sure that it is checked in **settings/apps/development** on your phone

#### Checking MD5SUMs

MD5 Checksums allow you to see if a file is exactly the same as it was originally. If even one bit is wrong, the checksum will be completely different, so it is vital when flashing radios and hboots, where no errors can be made.

On Windows, the md5sum program is included with the `miniadb` tools that you've previously downloaded. Move the file you want to check to the `miniadb` directory and use this command in the command prompt:

    md5sum.exe your_filename_here

On Linux and macs, just type the command `md5sum` anywhere, as it is already installed:

    md5sum your_filename_here

#### Flashing a new radio or hboot

Sometimes you will need to flash a new radio. Get the radio zip file, and check the md5sum! If it is corrupt, your phone will be bricked, so make sure.

boot your phone to `fastboot` mode (see above), and run the commands below:

    fastboot devices
    fastboot erase cache
    fastboot oem rebootRUU
    fastboot flash zip your-zipfile-name-here.zip
    fastboot reboot-bootloader
    fastboot reboot

## Unlock, Root, Downgrade and Install Recovery

The Droid Incredible in it's current state has a very grueling unlock method. Verizon has managed to patch out most of the easy root and S-OFF methods available with the Android 2.3.4 update. So find a bit of time and patience and grit your teeth; because it's going to be a long, but rewarding journey.

Now, we are left with the Official HTCDev Unlock, which, thankfully, *always* works. However, this unlock has some limitations, such as the following:

- it does technically void "all or parts of your warranty." please be well aware of this.
- htcdev only unlocks boot,recovery and system. it is NOT a full unlock,or s-off,by any means.
- it does NOT allow the boot partition to be written from recovery. kernels must be flashed as `PB31IMG` files,or using the "fastboot flash" command. i.e.,flashing roms and restoring nandroids is much more of a PITA
- due to being s-on,you cannot change radios,hboots,or go backwards in firmware versions.

No worries, though. By this point in time it's not like there's any warranty left on your old phone. And once your phone is unlocked with HTCDev, *we actually can downgrade to get S-OFF using an exploit* with the method in the next section.

Here is the roadmap of the steps we will do:

1. Unlock the bootloader with HTCDev
2. Flash a Recovery Image
3. Flash superuser root files.
4. Rewrite the misc image with adb and downgrade to Android 2.2 Froyo
5. Re-unlock HTCDev hboot
6. Re-flash recovery
7. Re-flash superuser root files and flash unrevoked's "forever" s-off patch

### HTCDev Unlock

This guide is almost entirely based on Scotty85's guide to unlocking the Droid Incredible on 2.3.4, albeit heavily rewritten and revised. A link to his guide can be found in the **Sources** section below.

> Note: Most of the critical commands in this guide will be exactly the same for Linux or Mac. Just make sure that you have adb and fastboot installed. Check the **Android SDK Platform Tools** guide for more info.

1. Go to [HTCdev - Unlock Bootloader](http://www.htcdev.com/bootloader) and register/sign in to your account. Choose **HTC Droid Incredible** from the **select your device bar** and click the green **begin unlock bootloader** button underneath.

2. Click yes to proceed. The warnings basically explain that your warranty is now void, and any repairs that your phone needs (especially from software) may no longer be covered under warranty. (though by now, your warranty probably already expired...)

3. Get to your hboot screen (see instructions in the **Things to Know** section). Check the version number at the top; If you already have hboots `1.02.0000`, or `1.07.0000` then skip ahead to the next step. If you have hboot `0.92.0000`, you will need to upgrade your hboot. Download the RUU for the new hboot, right click it,and run as administrator. Follow the instructions to flash the newer hboot.

4. Steps 1-4 on the site describe how to get your phone into bootloader mode and connect it to your PC, which we have already done. Ignore these steps and simply type in your cmd window:

    adb reboot bootloader

This command should boot your phone into the "fastboot" screen which is white with a bunch of colored writing. Once this happens, make sure your phone is still being seen in fastboot. type:

    fastboot devices

This should return your phone's serial number.

5. Click the green **Proceed to Step 5** bubble. Steps 5-7 on HTCDev tells you how to find the files and utilities inside your `mini-adb` folder. You already have them,so ignore these steps. Click the green **Proceed to Step 8** bubble.

6. Here's where the steps are important. Steps 8-10 tell you how to get your unlock token and send it to HTC. It is phone specific, so no, you cant use your buddy's token and unlock your bootloader. Copy the command below and paste it into the prompt in your cmd window.

    fastboot oem get_identifier_token

7. After hitting enter, you will get your identifier token. Follow the directions in steps 9 and 10 to copy and submit your identifier token to HTC. Make sure you get only the characters as shown in their picture, with no extra lines or letters.

8. Click the green submit button. wait patiently for an email containing your unlock code. (don't worry, it comes pretty quickly )

9. Save the `unlock_code.bin` that HTC sends you, and move to your `miniadb_inc` folder.

10. Click the link in your aforementioned email to get the rest of the unlock instructions.

11. Step 12 is where the magic happens. Run the command from below:

    fastboot flash unlocktoken Unlock_code.bin

12. You'll see the purdy screen pictured in HTCDev's step 13. Use the volume rocker to chose "yes unlock bootloader" and select it with the power button. 

13. Your phone will reboot, performing a factory data reset that wipes all your data. This boot may take a bit longer than normal, so don't freak out, be patient.

> **Special Note:** Do NOT remove `unlock_code.bin` from `miniadb_inc`. we will use it again in the next part.

### Flash a Recovery Image

Since everything will be overwritten in the process of S-OFF, we will not get too deep into explaining the recovery until the second flash. Just follow the instructions below:

* The recovery image is included in the `miniadb_inc` folder. If you don't already have it, download it here and move it to that folder: [ClockworkMod Droid Incredible](http://download.clockworkmod.com/recoveries/recovery-clockwork-5.0.2.0-inc.img) - MD5: `ea382ca5809cb872d0582aa22741d592`

1. Open a cmd window, if it's not still open from unlocking.
  * If you had to re-open a cmd window, don't forget to change back to your `miniadb_inc` directory using `cd C:\miniadb_inc`
2. Once again, enable usb debugging, and plug in your phone.

3. Make sure youre connected by typing this command. It should return your phone's serial number

    adb devices

4. Check the md5 of your recovery image. Make sure the resulting md5 matches: `ea382ca5809cb872d0582aa22741d592`

    md5sums recovery-clockwork-5.0.2.0-inc.img

5. Boot to bootloader:

    adb reboot bootloader

6. Check for connectivity. This should return serial number

    fastboot devices

7. Flash your recovery to the phone's recovery partition:

    fastboot flash recovery recovery-clockwork-5.0.2.0-inc.img

8. You'll see (or might see) a really fast green status bar on the top right as your PC sends the recovery to your phone, then an extremely fast red bar as it flashes it. You now have clockwork recovery installed on your phone. Reboot your phone with the command below:

    fastboot reboot

### Installing Superuser Zips

> Note: On ClockworkMod Recovery for the Droid Incredible, unlike most others, you use the trackpad rather than the volume rocker/power button to select options.

1. Place `superuser 3.07.zip` onto the root of your sd card.
2. Enter recovery via the hboot menu(power off,power on while holding vol down. once in hboot,wait for green writing to flash,then select recovery with power button and vol rocker)
3. Use the recovery menu on your phone to:
  * Make a backup of your stock,unrooted rom. Completely optional, but it's recommended in case problems happen.
  * wipe cache
  * wipe dalvik cache(youll find this in the "advanced" menu)
  * install zip from sd card(chose your superuser file)
  * reboot

By this point, the HTCDev part of unlocking is now complete; in theory, you can now install custom ROMs and gain superuser permissions. 

However, since it is still S-ON, it is very inconvenient to flash custom ROMs, as you will need to use `fastboot` to install kernels for your phone to boot a new one. It is no subsitute for the full power of a completely S-OFF enabled phone, where you can install anything you choose.

If you want to stay with your stock ROM, you can stop here (but it's not like it's going to be updated). If you want to install custom ROMs from XDA or something, continue on to get S-OFF.

Next, we will downgrade to Froyo, where we can get permanent S-OFF using the conventional exploits.

### Downgrade to Froyo

> WARNING: make sure your phone is charged to 100% before starting. Who knows what could happen if you ran out of power?

1. Take the `PB31IMG.zip` file and place it into your `miniadb_inc` folder
2. open a cmd window,as above

3. Make sure phone is plugged in and usb debugging checked on,in charge only mode

4. At the prompt in your command window, change to your `miniadb_inc` folder by  entering this:

    cd c:\miniadb_inc 
    
5. Next, check that your phone is connected correctly with this command. It should output your phones serial number,indicating its recognized

    adb devices

6. An important step is to make sure that the files have not been corrupted (or else you put yourself at risk of a brick). We do this by using md5 checksums, which will drastically change if even one bit is off. To proceed safely, those numbers must match exactly. Redownload the zip and extract again if they don't.
    
7. The next command should tell you the md5sum, which is: `34307be744275f1db1dd16af04c37839`
    
    md5sums mtd0.img 

8. This command should tell you the md5sum, which is: `0098a7dd6600b55fac34fc6645be5d7a`
    
    md5sums flash_image

9. Now place the `PB31IMG.zip` firmware ROM file into the same folder using a file manager. This is a big file, and will take a couple minutes to check, so be patient even if nothing seems to happen. It should output `31bb1611a0fa8197d447c0438426717e`

    md5sums PB31IMG.zip

10. If all these numbers match, you can now flash the files.

    adb push flash_image /data/local/
    adb push mtd0.img /sdcard/

11. Now we will run commands from within the Android.
    
    adb shell 

12. Your prompt should change to a `#`. if it changes to a `$`, then use the command `su`. Note that your phone may pop up a message asking you to allow permissions the first time you do this. If it does check **always** and touch **allow** on the superuser request on the phone screen. Now we can run the below to enable downgrading:

    cd /data/local
    chmod 0755 /data/local/flash_image
    
    cd /data/local
    ./flash_image misc /sdcard/mtd0.img

13. When that's done, type `exit` twice; once to leave the root shell, and a second to get out of your adb shell back into your home prompt.
    
    exit 

14. We are now able to downgrade to Android 2.2 Froyo. Use this command to boot your phone to `fastboot`

    adb reboot bootloader

15. The next command will tell you if you have successfully re-written your misc image. If you see anything other than `1.22.605.2`, then start over at step 4,and try again.

    fastboot getvar mainver 

16. The below command relocks your bootloader. If you are already relocked (e.g. it says **LOCKED** at the top) then you can skip this command. My phone was already relocked when I got to `fastboot`, so i did NOT need this step.
    
    fastboot oem lock 

17. Now erase the cache and get into RUU mode:

    fastboot erase cache
    fastboot oem rebootRUU

18. This last command should flash your downgrade zip file. Be patient, it's a big file to install.
    
    fastboot flash zip PB31IMG.zip

19. when the phone finished flashing the downgrade, do a reboot.

    fastboot reboot

Once your phone reboots, you should be in stock froyo.

> **NOTE:** If your phone does not fully boot (a common problem due to lack of backwards compatibility), go back to the `hboot` and select **factory reset**.

### Re-unlock with HTCDev

Now we are back to square one, except that you have just downgraded to Froyo! We will need to unlock, install recovery, and root the phone all over again. Find the unlock code you had from the first time (if you didn't save it, you will have to get it all over again), and copy it back into the `miniadb_inc` folder:

1. Open a cmd window, if it's not still open from unlocking.
  * If you had to re-open a cmd window, don't forget to change back to your `miniadb_inc` directory using `cd C:\miniadb_inc`
2. Once again, enable usb debugging, plug in your phone, and run these commands (don't include the comments after `#`)

    adb devices					# check conectivity
    adb reboot bootloade	r		# boot to fastboot
    fastboot devices				# check connectivity
    fastboot flash unlocktoken Unlock_code.bin	# re-unlock

Like the first time, on your phone select **yes** to unlock. Your phone will reboot. 

### Reinstall a recovery

Now that the bootloader is unlocked for development, we need a way to flash ROMs and modifications, and easily recover from bad flashes. This is where the recovery comes in.

You have two choices for recovery, ClockworkMod and TWRP. ClockworkMod is tried and true software that was the face of Android Developement. TWRP is the preferred recovery on the Droid Incredible for it's nice touch interface and newer features. Try both, and use whatever works for you.

* [ClockworkMod Droid Incredible](http://download.clockworkmod.com/recoveries/recovery-clockwork-5.0.2.0-inc.img) - MD5: `ea382ca5809cb872d0582aa22741d592`
* [TWRP](http://www.teamw.in/project/twrp2/4) - Go to the download section, and click the link to download. Please make note of the MD5 sum number.

> Note: On ClockworkMod Recovery for the Droid Incredible, unlike most others, you use the trackpad rather than the volume rocker/power button to select options.

1. Enable usb debugging once again. Open a cmd window, if it's not still open from unlocking.

2. if you had to re-open a cmd window,dont forget to change back to your miniadb_inc directory:

    cd c:\miniadb_inc

3. Make sure you're connected correctly by typing:

    adb devices

* This should return the serial number of your phone.

5. Check the md5 of your recovery image. If you are using TWRP, replace the below with TWRP's image filename.

    md5sums recovery-clockwork-5.0.2.0-inc.img

* make sure the resulting md5 matches the one you saw above or on the download page!

6. Reboot directly to bootloader:

    adb reboot bootloader

7. Check for connectivity with this command:

    fastboot devices

* This should return the serial number of your phone.

8. Flash your recovery image to the phone's recovery partition: If you are using TWRP, replace the below with TWRP's image filename.

    fastboot flash recovery recovery-clockwork-5.0.2.0-inc.img

9. You might see a (really fast) green status bar on the top right as your PC sends the recovery to your phone,then a (really,really fast) red bar as it flashes it. Once it's done, your recovery is now installed on your phone.

    fastboot reboot

10. Your phone will soon reboot.

If you have any problems with a recovery, no worries. Just repeat this method using the other image.

### Reinstall Superuser and Install Unrevoked Forever Patch

Now we will get root privileges again and finally flash the Unrevoked Forever Patch to get S-OFF. You're almost done!

1. Place `superuser 3.07.zip` and [unrevoked-forever.zip](http://downloads.unrevoked.com/forever/current/unrevoked-forever.zip) onto the root of your sd card.
2. Enter recovery via the hboot menu(power off,power on while holding vol down. once in hboot,wait for white screen with text, then select recovery with power button and vol rocker)
3. Use the recovery menu on your phone to:
  * Make a backup of your stock,unrooted rom. Completely optional, but it's recommended in case problems happen.
  * wipe cache
  * wipe dalvik cache(youll find this in the "advanced" menu)
  * install both zips from sd card(chose your superuser file)
  * reboot

If all that worked, you have finally gotten permanent S-OFF on your Droid Incredible!

### Update HBoot and Install New Radios

Since downgrading to Froyo also downgrades the HBoot and the Radio, you will want to flash the new version back in for more features and stability.

#### 4.08.605.15 radio and 1.07 hboot:

Download both files below and flash them both. One is the hboot, one is the radio.

[PB31IMG-4.08.605.15-hboot-1.07.zip](http://www.mediafire.com/?ah7gvum7ndainc7)
md5: db019de010ae8ef6a2c250fd8b378ba1

[PB31IMG-4.08.605.15-radio.zip](http://www.mediafire.com/?4g8jqiaxlxmxgpm)
md5: cb8b3ac72c0ae13e1f088b302135bd58

#### Flashing the files

> NOTE: The bootloader may still be in its previous state when you re-flash it (i.e.,if it was unlocked,it will still be). If for some reason, you find it to be locked, you can use your original `unlock-code.bin` to re-unlock it, if you wish.

> **CAUTION:** Make sure to double check the md5s, as a bad hboot or radio flash can and will leave your device unworking and unrecoverable. Also, your battery should be more than 50% charged before proceeding.

Boot your phone to `fastboot` mode (see Things to Know), and run the commands below:

    fastboot devices
    fastboot erase cache
    fastboot oem rebootRUU
    fastboot flash zip your-zipfile-name-here.zip
    fastboot reboot-bootloader
    fastboot reboot
    
Repeat this process for the other zip file. Once you've finished that, you're now ready to get some custom ROMs.

## Custom ROMs

Custom ROMs can breathe new life into old phones, giving them more features, better performance, and new Android updates (which, as you may know, are a very big deal).

### Choosing a Custom ROM

The biggest forum for custom ROMs is [XDA-Developers](http://forum.xda-developers.com/forumdisplay.php?f=635). Here, in the Droid Incredible Android Development section, you can choose from a multitude of ROMs to fit your needs. 

There is a (kind of old) list of good ROMs in [this thread](http://forum.xda-developers.com/showthread.php?t=969371).

Since the lineup changes all the time, we really can't make a decent list here, so go to [the forum](http://forum.xda-developers.com/forumdisplay.php?f=638) and find a ROM that fits your needs. Once you find it, download the accompanying `.zip` file, and we will install it in the next section.

Notice that unless specifically stated in the ROM, most do not include Google Apps, such as the Play Store or Google Maps due to legal constraints. If you want them (definitely recommended), download the [Google Apps here.](http://goo.im/gapps/)

### Installing a Custom ROM

1. Place the ROM's `.zip` file somewhere easily accessible on your SDCard. You might also want to get the [Google Apps](http://goo.im/gapps/) `zip` file if you want the Play Store.

2. Enter recovery via the hboot menu(power off,power on while holding vol down. once in hboot,wait for white screen with text, then select recovery with power button and vol rocker)

3. Use the recovery menu on your phone to:
  * Make a backup of your stock,unrooted rom. Completely optional, but it's recommended in case problems happen.
  * If you are going to a new ROM (not updating an old one), it is strongly recommended to do a factory reset. Just select the factory reset option.
  * install both zips from sd card(chose your superuser file)
  * reboot

## Extra Modifications

For the most part, once you install a custom ROM you are pretty much done, the builder has usually done the big system modifications for you. Most Gingerbread and Sense 3 ROMs are already perfect.

For ICS and JB ROMs, you might want to add a few replacement apps to increase speed and add more features. Get these from the Play Store:

* **Nova Launcher** - The better, faster launcher for Android. Feature-filled and lightning fast, even on the slower phones. The launcher is the face of Android and most of the big, visible speed issues start here, so it's important to have something that works nicely.
* **Quickpic** - The better image viewer for Android. Way better than the slow and clunky default Gallery.
* **MX Video Player** - This is Android's equivalent of VLC. Plays anything you can throw at it.

Next, you might want to flash the [Adrenaline Injector](http://forum.xda-developers.com/showthread.php?t=1236779) with your recovery to add scripts to speed things up, reduce battery usage, and give a smoother experience. Finally, the [Ext4 4 ALL](http://forum.xda-developers.com/showthread.php?t=1315372) mod will update your filesystem on the phone to Linux's best and fastest.

This only scratches the surface of what you can do with your phone. For more info, see the **[[Android Modifications]]** page.

## Credits

If you feel that you have somehow played a part in the content of this guide, but have not been credited, contact us and we'll add you in below. Just ask.

* antonizoon (Lawrence Wu) - The compiler of this remastered and updated guide, as part of the Android Development codex. 

* scotty85 (Phandroid) - For creating the 2.3.4 Rooting/Unlock guide that forms the basis of this guide.

- first and foremost,the good folks at htc for listening to customers and implementing their unlock program,even for older devices
* alpharev and unrevoked for all they for the root community 
- iowabowtech for point me in the direction of this thread that i collected the misc image,and parts of the guide. also for his support answering questions.
- sele and the crew in the "rescue squad" on the thunderbolt forum for what i like to call the "mini-adb" concept.
- zamkat for testing the forever patch with the 1.02 htcdev hboot in this thread

* POQbum (XDA) - For creating a nice list of ROMs and kernels.

* Any developer who participated in making the HTC Droid Incredible what it is today. (too many to name)

## Sources

* [XDA-Developers - List of ROM's + MODS, KERNELS, RADIOS, HBOOT and MORE -- For the HTC Incredible](http://forum.xda-developers.com/showthread.php?t=969371)
* [Phandroid - Root and S-OFF Droid Incredible](http://androidforums.com/incredible-all-things-root/531353-how-unlock-downgrade-achieve-s-off-htcdev.html)