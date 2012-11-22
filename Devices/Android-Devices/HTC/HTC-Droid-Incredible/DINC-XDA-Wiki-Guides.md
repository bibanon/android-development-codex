== Files ==
Update files, RUU files, etc.

=== Kernel Source ===
http://member.america.htc.com/download/RomCode/Source_and_Binaries/incrediblec_cc1c2268.tar.bz2
no longer available 2011-01-24

=== OTA Updates ===
1st May 2010 - https://android.clients.google.com/packages/incrediblec/OTA_IncredibleC_Verizon_WWE_1.22.605.2_1.22.605.0_release_sign.a33bc3bf.zip

31 August 2010 (froyo) - http://android.clients.google.com/packages/ota/verizon_incredible/8e5ad8d6ea2d.OTA_IncredibleC_Verizon_WWE_3.21.605.1_1.22.605.2_release_sign.zip

=== Signed RUU ===
2nd June 2010 (This will downgrade the May 1st OTA Update) - http://shipped-roms.com/shipped/Incredible/RUU_IncredibleC_Verizon_WWE_1.22.605.0_Radio_1.00.03.04.06_release_161493_NoDriver.exe

== Installing the drivers ==
The Unr'''evo'''ked3 recovery tool comes with the phone drivers you will need to use. They are in the directory '''hboot driver_files'''. Unrevoked has a great [http://unrevoked.com/rootwiki/doku.php/public/windows_hboot_driver_install walk through] for installing the drivers.

Remember where you saved those driver files (possibly c:\sdk\usb_driver)

== Unr'''evo'''ked recovery reflash tool ==
Thanks to Unr'''evo'''ked, rooting the phone is now easier than ever.

# Make sure the phone is fully booted, connected to the computer via USB, and USB debugging is on
# Go to the directory where you extracted the Unr'''evo'''ked3 files. Run the program reflash.exe
# Watch and wait. When the program says “Done,” you’re done!

You’ll end up in the Clockworkmod recovery menu – it’s black with green text and will say “Clockworkmod Recovery v*.*.*.*” at the top. 

The ClockworkMod recovery has great features, plus it allows you to easily access your phone’s operating system. Having this kind of access to the OS allows you to do a lot more with your phone.

The new recovery mod works differently than the original recovery. You can navigate the options with the volume key or the joystick. Rather than selecting an option, the power button turns off the screen in the main menu, otherwise, it is used to move back to a previous menu. To select an option you need to press the joystick in.

== Nandroid backup ==
From the Clockworkmod recovery screen select nandroid, then select backup. The backup will take a few minutes. The backup is stored on the SD card in the directory clockworkmod/backup/

With this backup you can safely start editing your phone files. If you do something wrong, and want to restore it, you’ve got yourself covered. Never rename nandroid backups! Renaming the directory is known to cause problems. Keep a text file in the clockworkmod directory with notes about specific backups.

One of the best features of a nandroid backup is the ability to restore just one part of the phone. Under Nandroid > Advanced Restore select the date of the backup you want to restore from, then select which partition you want to restore. For example, if you accidentally deleted the wrong files from /system you can restore just the system portion of the most recent nandroid backup. Brilliant!

== Removing Bloat ==
Removing stock applications you don’t want can easily be dealt with.

# Boot into Clockworkmod recovery by powering off the phone and pressing and holding the volume down and power button until the screen lights up.
# At the menu press volume down to select Recovery, then press power.
# At the Clockworkmod main menu select partitions menu, then select mount /system
# On the computer click Start > Run, and type CMD to open a command prompt.
# In the command prompt type cd\sdk\tools
# At the command prompt type adb shell. Now you’re in the phone’s OS.
# Before we being, let’s review some basic unix commands!

* mkdir – make directory – This makes a directory (mkdir /system/newdirectory)
* mv – move – This moves something (mv /what.i.want.moved/file.apk /where.it.is.going/file.apk)
* cp – copy – This copies a file from one place to another (cp /what.i.want.copied/file.apk /where.it.is.going/file.apk)
* ls – list – This lists the contents of the current directory, or the specified directory (ls, ls /system)
* cd – change directory – This changes from the current directory to a new directory (cd /system)
* rm – remove – This deletes! Permanently! There is not waste can to recover files. (rm /system – DON’T DO THIS)

Deleting apps may not necessarily be a great idea primarily because replacement files are hard to come by if you end up needing them again so you will probably want to back the deleted system apps into one place.  A suggetion would be to create a directory for disabled apps.

mkdir /system/app.disabled

Now, run the following commands (which are case sensitive) to disable various apps:

This will remove CityID
# mv /system/app/CityID.apk /system/app.disabled/
# mv /system/framework/com.cequint.platform.jar /system/app.disabled/
# mv /system/framework/com.cequint.platform.odex /system/app.disabled/
# cd /system/bin
# pm uninstall com.cequint.cityid


This will remove the Facebook app, NOT Facebook for HTC Sense
* mv /system/app/Facebook.apk /system/app.disabled/

This will remove Facebook for HTC Sense (2 files)
* mv /system/app/*HtcFace* /system/app.disabled/

This will remove Foot Prints and the Foot Prints Widget (2 files)
* mv /system/app/HtcFoot* /system/app.disabled/

These will remove Peep, and Peep Widget (4 files)
* mv /system/app/HtcTwit* /system/app.disabled/
* mv /system/app/*htc.Twit* /system/app.disabled

Removes Quick Office
* mv /system/app/Quickoffice.apk /system/app.disabled/

Removes Teeter (2 files)
* mv /system/app/teeter* /system/app.disabled/

Removes Friend Stream (4 files)
* mv /system/app/*Fri* /system/app.disabled/

When you are done removing apps type exit to leave the the OS and then unmount /system and reboot the phone.

'''Note!!!:''' If you already have an account setup in the phone under ‘Settings > Accounts and Sync’ for an app you need to remove the account for the app first. If you plan on using any of the built in sync features for Twitter, Facebook, or Flickr (like contacts or photos) you need to keep Friend Stream. If you have accounts setup and remove the apps you will have a persistent sync symbol in your message bar and Accounts and Sync may be inaccessible.

== Improved Call Quality for Incredible ==

Thank you: ejhart - [[http://forum.xda-developers.com/showthread.php?t=684022| http://forum.xda-developers.com/showthread.php?t=684022]]

# Go to Phone and Dial ##778
# Choose Edit Mode
# Password is 000000
# Go to CDMA Settings
# Scroll all the way to bottom
# Change Home Page, Home Orig, and Roam Orig from EVRC to EVRC-B
# Hit Menu and Commit Changes

Phone reboots and walla no more muffed voice calls! Enjoy your uber phone.
Enhanced Variable Rate Codec B : [[wikipedia:Enhanced_Variable_Rate_Codec_B|Enhanced Variable Rate Codec B on Wikipedia]]

'''*** Not Supported in all areas (Unable to call out)'''

== Tethering out of the box == 

Thank You: Schyzm - [[http://forum.xda-developers.com/showthread.php?t=670642&page=2| http://forum.xda-developers.com/showthread.php?t=670642&page=2]] Updated, Fixed and Posted by: Pimpindexter

To Recap: In order to tether this without paying the extra $25 per month to Verizon, or installing PDAnet (and putting up with free pdanet limitations), here's what to do:

Step 1: reprogramming your phone
* from your phone, dial ##pst - Press Call
* click "edit mode"
* enter security code 000000
* scroll down to Security
* change the "S.IP DUN User Name" to "<your phone number>@vzw3g.com"
* hit back
* scroll down to "M.IP Default Profile"
* change "DUN NAI" to "<your phone number>@vzw3g.com"
* press menu, choose "Commit Modifications."
* The phone will power cycle.
Step 2: Computer setup
* Download Drivers: http://db.tt/1fV1jK (Link Broken) - (WModem_Driver_Installer_v2.12.0.0) - (Extracted from VZAM Setup)
* run Setup WModem_Driver_Installer_v2.12.0.0.exe
* Next, plug your phone in to the computer. Let windows take care of the driver installation.
* Per your version of windows, you'll need to set up a manual dial-up networking connection. Settings you'll need:
** Phone Number: #777 
** Username: "<your phone number>@vzw3g.com" 
** Password: vzw

Step 3:
* browse the internet. Duh.

== Changing out PRL to full Verizon (for Legacy Alltel Users) or to Alltel/Verizon Hybrid for Verizon users in Alltel tower Areas ==

Some Verizon customers have had success calling in and getting the Hybrid applied to their phone. However, Verizon will not do this for Legacy Alltel users and leaves them on Alltel first, then Verizon. One byproduct for Alltel customers is the Pulldown will now say Verizon Wireless and so will the lock screen.

Thank You: Framework43 http://forum.xda-developers.com/showthread.php?t=673661 Updated, Modified and Posted by: hdialchemy aka dnoyeb

Step 1A:
* To access Verizon towers (if Legacy Alltel user) - Grab 51893.PRL (extract the enclosed file): http://forum.xda-developers.com/attachment.php?attachmentid=336911&d=1275578848

Or Step 1B:
# To access Alltel/Verizon Hybrid towers (for Verizon users) - Grab the hybrid PRL: http://www.multiupload.com/NJK6YLHXW5

Setp 2:
# Copy the PRL of your choice to your phone's SD card's root folder.
# Launch the dialer and type in ##775 and press call, wait a moment and you should see a pop-up.
# enter 000000 (6 zeros) as the password.
# press Update PRL. (Please wait a while, it takes some time)
# Once there you should see the PRL file we're flashing and click it and then press OK.
# It should bring you back to where you were before, press the menu button on your phone and select Commit Modifications.
# The phone will update and reboot.

To return to your default PRL simply dial *228 and perform option 2. This will overwrite any added PRL.

== Downgrade ROM (currently only works from hboot .79 back to .77) ==

Originally Posted  by IncredibleDoes : http://forum.xda-developers.com/showthread.php?t=695825
Extract the rom.zip from the RUU and rename it to PB31IMG.zip and flash via bootloader.

== Wiping thoroughly prior to installing a "Custom Rom" ==

Original draft by: jermaine151

'''(Written for ClockworkMod versions 5.0.2.0 and greater)'''


This method is the one I use to ensure a sterile phone environment when trying a new Rom out. If you follow these steps, you will have the best possible experience with a new rom and limit the self inflicted bugs that you may inadvertently report to a developer.


'''VERY IMPORTANT:'''
# Make a nandroid backup of your current setup. (See nandroid wiki above)
# Make a titanium backup of the apps that you've added to your current rom.

'''Remaining steps:'''
# Reboot into recovery
# Choose wipe data/factory reset and confirm
# Go into "mounts and storage" menu and choose to format boot, system (One at a time and confirming each)
# MAKE SURE TO '''NOT''' FORMAT sdcard
# Install your custom rom
# During the initial setup, select your language, add your wireless if applicable, choose your GPS preferences and skip everything else, including adding accounts.
# Open Gmail and add your gmail account to the phone.

Now your market it ready for use and you can add the rest of your accounts (Facebook, Corporate mail, etc.). This will prevent most applications from being automatically installed and old settings from being restored.

# You may also install Titanium Backup, from the market, and restore your individual apps with data (Be sure NOT to restore system apps or system data)

== See also ==
*[[Droid Incredible|HTC Droid Incredible]]
*[[HTC Incredible/ROMs|HTC Droid Incredible ROMs]]

[[Category:HTC]] [[Category:HTC Incredible]]
[[Category:Guides]]
