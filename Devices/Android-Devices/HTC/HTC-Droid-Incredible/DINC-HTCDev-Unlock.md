> **Note:** This guide is almost entirely based on Scotty85's guide to unlocking the Droid Incredible on 2.3.4, albeit heavily rewritten and revised. A link to his guide can be found in the [[DINC Sources]] section.

> Note: Most of the critical commands in this guide will be exactly the same for Linux or Mac. Just make sure that you have adb and fastboot installed. Check the **Android SDK Platform Tools** guide for more info.

1. Go to [HTCdev - Unlock Bootloader](http://www.htcdev.com/bootloader) and register/sign in to your account. Choose **HTC Droid Incredible** from the **select your device bar** and click the green **begin unlock bootloader** button underneath.

2. Click yes to proceed. The warnings basically explain that your warranty is now void, and any repairs that your phone needs (especially from software) may no longer be covered under warranty. (though by now, your warranty probably already expired...)

3. Get to your hboot screen (see instructions in the **Things to Know** section). Check the version number at the top; If you already have hboots `1.02.0000`, or `1.07.0000` then skip ahead to the next step. If you have hboot `0.92.0000`, you will need to upgrade your hboot. Download the RUU for the new hboot, right click it,and run as administrator. Follow the instructions to flash the newer hboot.

4. Steps 1-4 on the site describe how to get your phone into bootloader mode and connect it to your PC, which we have already done. Ignore these steps and simply type in your cmd window:

    adb reboot bootloader

This command should boot your phone into the "fastboot" screen which is white with a bunch of colored writing. Once this happens, make sure your phone is still being seen in fastboot. type:

    fastboot devices

This should return your phone's serial number.

5. Click the green **Proceed to Step 5** bubble. Steps 5-7 on HTCDev tells you how to find the files and utilities inside your `mini-adb` folder. You already have them,so ignore these steps. Click the green **Proceed to Step 8** bubble.

6. Here's where the steps are important. Steps 8-10 tell you how to get your unlock token and send it to HTC. It is phone specific, so no, you cant use your buddy's token and unlock your bootloader. Copy the command below and paste it into the prompt in your cmd window.

    fastboot oem get_identifier_token

7. After hitting enter, you will get your identifier token. Follow the directions in steps 9 and 10 to copy and submit your identifier token to HTC. Make sure you get only the characters as shown in their picture, with no extra lines or letters.

8. Click the green submit button. wait patiently for an email containing your unlock code. (don't worry, it comes pretty quickly )

9. Save the `unlock_code.bin` that HTC sends you, and move to your `miniadb_inc` folder.

10. Click the link in your aforementioned email to get the rest of the unlock instructions.

11. Step 12 is where the magic happens. Run the command from below:

    fastboot flash unlocktoken Unlock_code.bin

12. You'll see the purdy screen pictured in HTCDev's step 13. Use the volume rocker to chose "yes unlock bootloader" and select it with the power button. 

13. Your phone will reboot, performing a factory data reset that wipes all your data. This boot may take a bit longer than normal, so don't freak out, be patient.

> **Special Note:** Do NOT remove `unlock_code.bin` from `miniadb_inc`. we will use it again in the next part.
