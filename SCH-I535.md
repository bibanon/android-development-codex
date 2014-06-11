# Verizon Galaxy S3

----

## Version 4.1.2

## Version 4.3(I535VRUCML1)

This update will **Forever** lock your bootloader. DO NOT install this update at all if you haven't already.

### Downgrading

* This is only for phones that are on NC1

1. Get ODIN 3.09
2. Download the Firmware(ML1) 
3. Now, put the Verizon Galaxy S3 SCH-I535  in Download Mode by pressing and holding down the Home & Volume Down button together while pressing the Power button. Then press Volume Up button to accept the warning and enter Download Mode.
4. Now run Odin3 v3.09.exe (see Step 3) as an **Admin**
5. Now connect your device to your PC using USB cable. An “Added!!” message will appear in Odin’s message box.
6. Click the AP Button, and select that .tar.md5 file that you get in Step 2. If you are using old Odin then add the file to PDA button.
In Odin window, make sure only Auto Reboot and F. Reset Time checkboxes are selected.
Now, check all the settings and make sure they are correct
Press the START button to begin the flashing process.


Source: http://true-android.blogspot.com/2014/01/install-vrucml1-android-43-jb-firmware.html

### Rooting

* If you upgraded to NC1 you must downgrade to ML1 to root

1. Download SafeRoot and Extract it.
2. Run SafeRoot and it will explain how to do everything

Download Link: http://forum.xda-developers.com/attachment.php?attachmentid=2743319&d=1400069747

Source: http://forum.xda-developers.com/showthread.php?t=2565758 
### SafeStrap Install

* Safestrap is a Bootstrap / Recovery for locked bootloader phones
* If you install this you can only install roms with the same kernel as the stock rom
* DOWNLOAD THE KERNEL MODULES .ZIP THAT MATCHES YOUR BUILD

1.    Requirement: Root
2.    Requirement: Allow APK install from Unknown Sources
3.    Download the Safestrap APK
4.    Find the APK using a Filemanager tool and open it on your device, then click "Install".
    (If updating from an existing Safestrap you might be warned that this will over-write the existing installation. Click the "Yes" equivalent to this message.)
5.    Once installed, open up the Safestrap application as you would any other app.
6.    Then press the "Install Recovery" button. You should see the current version down in the lower left corner of the window. And the "Status:" should say "Installed" when you're done.
7.    From there you can reboot and you *should* see a new splash screen during the boot up. While this is showing you can enter Safestrap Recovery using the [ menu ] button.
8.    That's it for the installation! Read below for a brief overview of Safestrap Recovery v3.x

> Source: http://forum.xda-developers.com/showthread.php?t=2605648


#### Download Links

SafeStrap: http://forum.xda-developers.com/devdb/project/?id=2405#downloads

Kernel Modules: http://forum.xda-developers.com/devdb/project/dl/?id=3130

