## Flash a Recovery Image

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
    
## Installing Superuser Zips

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
