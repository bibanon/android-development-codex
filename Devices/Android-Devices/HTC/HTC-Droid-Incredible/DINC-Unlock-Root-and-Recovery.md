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
