This is the exploit used in SuperOneClick and z4root.

## Requirements

* [[Android SDK Platform Tools]]
* SuperOneClick (just for the exploit, add link)
* USB Debugging Enabled: Open **Settings->Applications->Development** and enable **USB Debugging**. It will give you a warning, just press yes.

## Method

First, plug in your phone and check if your device is recognized by `adb`:

    adb devices
    
You should see the serial number of the phone. If not, check if USB Debugging is enabled.

Next, go to the directory where you saved the SuperOneClick files to, using the command `cd`.

    cd /location/of/SuperOneClick
    
Push `rageagainstthecage` to a temporary directory.

    adb push rageagainstthecage /data/local/tmp/rageagainsthtecage

Next, we will get into the Android system and run the exploit from there.

    adb shell
    cd /data/local/tmp
    # gives it permissions to execute
    chmod 0755 rageagainstthecage
    ./rageagainstthecage
    
Wait until you get kicked out from `adb`, and run this command to get back into the Android system:

    adb shell
    
If everything worked, you should see a `#` instead of a `$`. This means that `adb` is now running as root. Now we will mount the system and install apps that will allow you to use the root account. If these commands give you a **permission denied** message, you are not rooted, so try again.

    mount -o rw,remount /dev/block/mdtblock4 /system
    exit
    adb push su /system/bin/su
    adb push busybox /system/bin/busybox
    adb push sqlite3 /system/bin/sqlite3
    adb push Superuser.apk /system/app/Superuser.apk
        
Finally, we go into the Android system and modify the permissions so the programs can be ran.

    adb shell
    cd /system/bin
    chmod 4755 su
    chmod 4755 busybox
    chmod 4755 sqlite3
    exit
    adb reboot
    
After all that, you are now rooted!

## Sources

* [XDA-Developers - Rooting the U8150](http://forum.xda-developers.com/showthread.php?t=890138)
