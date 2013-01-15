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