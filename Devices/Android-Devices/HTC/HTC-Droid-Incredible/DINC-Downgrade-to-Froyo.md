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
