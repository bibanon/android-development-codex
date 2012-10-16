## HTC Desire V

The HTC Desire V is a low-end smartphone announced in June 2012 and sold in India, Europe, Taiwan, and China. It sports nearly the same processor and GPU as the Google/HTC Nexus One and HTC Desire, which as of writing is nearly two years old. However, it also has the HTC Sense 4.0a UI on top of that.

This phone is new and still under research, so it's a good project for me to start my first foray as an XDA-Developer. It is also a perfect time to build a great guide from the start, rather than rely on a mess of others.

## Specifications

> from [GSM Arena](http://www.gsmarena.com/htc_desire_v-4805.php)

## Rooting

## Bootloader unlocking

[This zip contains all required files.](http://mediafire.com/?783kthx72x3uf5d)

1. Let's change the language to English first so we understand the phone better. Open the apps menu and go to the Settings icon (the cogwheel icon). Scroll down to the setting with the **A** icon. Click the first item in the list and choose English.

2. Go to [HTCDev](http://htcdev.com), create an account and click the Unlock bootloader icon. After logging in, choose **All Other Supported Models** from the list and click the Begin Unlock Bootloader button. Accept that you may lose any guarantee and continue to follow the instructions.

3. To enter bootloader mode, make sure the phone is off (or remove the battery for a few seconds). Then hold _Volume Down_ and start pressing the _Power_ button – without any USB cable. Use the up and down buttons to select **Fastboot** and select it using the Power button. Now connect your USB cable and continue following the HTC instructions.

4. All the files you need are in the zip you can get above. I also installed the HTC Sync program which installs the drivers. Using the command prompt you can simply navigate to the extracted files and run the fastboot command. (Use the command `cd C:/myextractedzip` to change to a directory).

5. Save the `Unlock_Code.bin` attachment which you get from HTC by Email into the same extracted zip folder and run the next command. You now have an unlocked bootloader and the phone will start up and an HTC wizard will appear where you can choose the English language again.

## Flashing clockworkmod

1. Remove any USB cables and boot again into the bootloader mode. Click Fastboot and reconnect your USB cable. Now run the following command on your computer: `fastboot flash recovery recovery.img` . This flashes the clockworkmod recovery image onto the phone.

2. Switch off your phone. Make sure your USB cable is removed.

3. Now copy the **app** folder from the zip onto a micro-sd card. Also copy the **CWM-SuperSU-v0.92.zip** and **rootexplorer_2.16.apk** onto the micro-sd card.

4. Insert the micro-sd card into the phone and boot into boatloader mode again.

5. Now choose the recovery option instead of fastboot and wait for clockworkmod recovery to appear.

## Rooting the phone

1. In clockworkmod recovery, choose install zip from sdcard

2. Choose **choose zip from sdcard** and choose **CWM-SuperSU…zip**

3. Scroll down to **Yes – Install CWM-SuperSu** and wait. Now go back and reboot the phone normally.

## Installing Google Apps

1. Using the included file manager on the phone, click on `rootexplorer.apk` and install it. When launching root explorer, make sure you grant it superuser permissions.

2. Go click the **sdcard** folder and press and hold the **app** folder that you copied from the zip file. Click **Copy** and then navigate to `/system` . Press **Mount R/W**. And then click **Paste**. Choose Yes to overwrite. Exit root explorer.

3. Now we need to fix the permissions. The easiest way is if you enable USB Debugging mode from the **Developer Options** settings. Make sure you connect your USB cable.

4. Open a command prompt to our extracted zip folder and type `adb shell`. Press enter and you should see `shell@android:/ $`. Run `su`. Run `cd /system/app`.

5. Now to fix all permissions, run `chmod 644 *.apk` and then run `chown root.root *.apk` .

6. Now run the command **reboot** to reboot your phone.

## Removing bloatware apps

1. Thanks to *dark_hawk* from xda-developers, we have a list of system apps/bloatware that are save to remove. You can easily do this from the root explorer app. Go to `/system/app` and hold each item you want to delete. Then click **Delete**. You can also remove each app’s odex file.

The list:

* 116114.apk
* 2254_HTCCU_WO3G_SIE.apk
* DoubanFM.apk
* DreyeCHSPkg40.apk
* HTCCN_FileManager.apk
* HTC_Widget_Renren.apk
* HTC_Widget_Sina_Weibo.apk
* HTC_Widget_Sina_Weibo_Nearby.apk
* HTC_Widget_Sina_Weibo_Trend.apk
* HTC_Widget_Sina_Weibo_Trend.apk
* HtcMusicEnhancer_China_Sina.apk
* HtcMusic_China_Sina.apk
* PhoneMail.apk
* QQ2011.apk
* Renren_FSplugin.apk
* Renren_GLRplugin.apk
* SinaMusic.apk
* Sina_Weibo_FSPlugin.apk
* Sina_Weibo_GLRplugin.apk
* SohuNews.apk
* VDisk.apk
* Weibo.apk
* eMoney.apk
* mapbar.apk
* renren.apk
* unicomclient_HTCT328W.apk
* vegetable.apk
* wefound.apk

2. Then run **reboot** to reboot your phone.

3. After the reboot you might still find some Chinese language apps. These can be removed with an app from the Play Store such as Root Uninstaller.

## Mods

### Update Radio

[jp1980's Guide to updating Desire V radio version](http://forum.xda-developers.com/showthread.php?t=1764337)

If you are running a custom ROM and you are experiencing network connection problems, check your radio version. If you are running 1.04, it may be good to update the radio to a newer and better edition (1.06), since the old one has big problems with wifi and some carriers.

Note that this procedure is the equivalent of a factory reset on your smartphone. Make sure to back up all files before proceeding.

If your phone's wifi and bluetooth still doesn't work, Reboot to fastboot and flash the original kernel. 

    fastboot flash boot boot_signed.img

### Restore Missing Google Play Store (Chinese edition)

The Chinese version of the Desire V does not include the Google Play Store or any Google apps, a significant handicap. The Taiwanese version does, however, so it is very helpful to flash that in.

[See this thread.](http://forum.xda-developers.com/showthread.php?t=1714317)

### Flash European ROM on Chinese Desire V

Alternatively, you could flash a European ROM. 

[European ROM on Chinese Desire V](http://forum.xda-developers.com/showthread.php?t=1751788)

[Flash European or Taiwanese ROM on Chinese T328W](http://forum.xda-developers.com/showthread.php?t=1751986)

## RUU Downloads

### OG (Original Stock RUUs)

* Taiwan
* China
* Europe
* India
* Pakistan

## Sources

* [Team Android Guide to HTC Desire V](http://www.teamandroid.com/2012/09/02/root-htc-desire-v-android-403-install-clockworkmod-custom-recovery/)
* [SeBsZ's Complete Modding Guide for Chinese Desire V](http://forum.xda-developers.com/showthread.php?p=28172565#post28172565))