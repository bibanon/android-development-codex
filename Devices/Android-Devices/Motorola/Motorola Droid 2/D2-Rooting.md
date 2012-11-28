## Linux (SBF Flash root)

You'll need adb and sbf_flash.
1. Download the RootDroid2 file, extract it wherever you like.
2. Using adb enter
Code:
adb shell ln -s /data/local.prop /data/preinstall_md5/magic.md5
3. Flash using sbf file in download.
4. Reboot
5. adb shell will now be root

## Linux (Longer way)

What you need: Stock SBF (thanks to droid-developers.org), custom preinstall.img, adb (from android sdk), and sbf_flash

1) Enable USB debugging on your phone and send this adb command:

	adb shell ln -s /data/local.prop /data/preinstall_md5/magic.md5

2) Unpack the custom preinstall file, then reboot your phone into flash mode by holding the up arrow on the keypad. Then send the custom SBF file with sbf_flash:

	sbf_flash -r --preinstall preinstall.img <stock sbf filename>

(For example, I used 1FF-p2a_droid2_cdma_droid2-user-2.3.4-4.5.1_57_DR4-51-120117-release-keys-signed-Verizon-US.sbf so the command is "sbf_flash -r --preinstall preinstall.img 1FF-p2a_droid2_cdma_droid2-user-2.3.4-4.5.1_57_DR4-51-120117-release-keys-signed-Verizon-US.sbf")

3) Wait for phone to boot after flashing, then reboot again one final time.

4)
	adb shell
should give you a root prompt (# instead of $)

5)Send superuser utils from Superuser

	adb shell mount -o remount,rw /dev/block/system /system
	adb push su /system/bin/su
	adb shell chmod 4755 /system/bin/su

	adb push Superuser.apk /system/app/Superuser.apk
	adb shell chmod 644 /system/app/Superuser.apk
	adb shell mount -o remount,ro /dev/block/system /system

Thanks to Dan Rosenberg (djrbliss) and those that helped him researchhttp://vulnfactory.o...ng-the-droid-3/ for ideas  
