There are multiple methods for rooting the HTC One X Evita. Make sure to find a guide for the right carrier and version number (check in **Settings->About Phone->Software**)

* Latest AT&T Version: **2.20**

## AT&T 2.20 X-Factor

In build 2.20: full S-ON is now in effect, which NAND-locks the storage. In other words, you need to unlock the bootloader to gain permanent root.

XDA User Djrbliss built an exploit that gains temporary root access by leveraging two vulnerabilities and uses these newly gained root privileges to overwrite the CID ("superCID"), so that it's possible to unlock the bootloader via HTC's website.

Choose one and only one method below:

### Hansoon2000's HOX Evita Toolkit (Windows)

http://forum.xda-developers.com/showthread.php?t=1952426

### Djrbliss's X-Factor Script (Windows, Mac OS X, Linux)

{{Note|If it doesn't work, try wiping your phone. If the script fails in the middle, you may need to wipe your phone to try again.}}

1. Download Djrbliss's X-Factor exploit:
* [Windows](http://vulnfactory.org/public/X_Factor_Windows.zip)
* [Linux/Mac](http://vulnfactory.org/public/X_Factor_Linux_OSX.zip) - Made with assistance from Jesse Osiecki (@jesseosiecki) for providing me with a working version (that Djrbliss ended up re-writing).

2. Extract the entire zip file.

3. Connect your device via USB, ensure you have the latest **HTC USB drivers** installed (only needed on Windows), and ensure **USB debugging mode** is enabled.

4. **Windows:** Double-click `run.bat` .
  * **Linux/Mac**: open a terminal, change directories to the extracted exploit, and run `./run.sh`.

5. Follow the instructions printed by the exploit. You will need to authorize two backup restorations during the exploit's execution.

6. If the exploit is successful, it will print `[+] Set CID!`. If it does not print this, the exploit has failed, so please do not continue.

7. The exploit will automatically reboot into bootloader mode. Press enter after bootloader mode is finished booting, and the exploit will print your CID. If the exploit was successful, it should return `11111111` as your CID.

8. If your CID was successfully set, press enter to generate an unlock token.

9. Visit `htcdev.com`, navigate to the **Bootloader unlock** section, choose **All other supported models** from the drop-down menu, and provide the unlock token when asked.

10. After unlocking the bootloader, you can flash a custom recovery partition via fastboot, boot into recovery mode, and use a recovery ADB shell or [install from an `update.zip` to install Superuser and su.](http://download.chainfire.eu/298/SuperSU/CWM-SuperSU-v0.99.zip)

11. From here, you now can install a [[custom recovery|OneXS4 Recovery]], which can install a custom ROM.

### Manual Method

Download Djrbliss's X-Factor exploit:

* [Windows](http://vulnfactory.org/public/X_Factor_Windows.zip)
* [Linux/Mac](http://vulnfactory.org/public/X_Factor_Linux_OSX.zip) - Made with assistance from Jesse Osiecki (@jesseosiecki) for providing me with a working version (that Djrbliss ended up re-writing).

1. Enable USB Debugging on your phone, connect it to the computer, and use this to check if it's working:

    adb devices

2. These commands overwrite a telephone app that gets in the way with a backup file. Then we mess around with it.

    adb restore backup1.ab
    adb shell "rm /data/data/com.android.providers.telephony/databases/a/b 2>/dev/null"
    adb shell "ln -s /dev/diag /data/data/com.android.providers.telephony/databases/a/b 2>/dev/null"

3. The below restores the second backup, and runs the X-Factor exploit. If the `pwn` command does not say `[+] SetCID`, you need to factory reset your phone and start over.

    adb restore backup2.ab
    adb push pwn /data/local/tmp
    adb shell "chmod 755 /data/local/tmp/pwn"
    adb shell "/data/local/tmp/pwn"

4. Reboot to `fastboot` bootloader, and close `adb`.

    adb reboot bootloader
    adb kill-server

5. Check if your phone is recognized with `fastboot`.

    fastboot devices
    
6. Here, we see if the CID has been changed by SuperCID. If it is not `11111111`, factory reset your phone and start over.

    fastboot oem readcid

7. If and only if the CID was changed, use this command to get the identifier token for HTCDev.

    fastboot oem get_identifier_token

9. Visit [HTCDev](http://htcdev.com/bootloader/), navigate to the **Bootloader unlock** section, choose **All other supported models** from the drop-down menu, and provide the unlock token when asked.

10. After unlocking the bootloader, [[flash a custom recovery.|Evita Recovery]] If you just want to root, and don't need custom ROMs, [download this zip and install it with the custom Recovery to get root.](http://download.chainfire.eu/298/SuperSU/CWM-SuperSU-v0.99.zip)

## Sources

### AT&T 2.20 X-Factor

* [XDA-Developers - One X X-Factor Root Exploit](http://forum.xda-developers.com/showthread.php?t=1952038)
* [XDA-Developers - Evita All-in-One Toolkit](http://forum.xda-developers.com/showthread.php?t=1952426)