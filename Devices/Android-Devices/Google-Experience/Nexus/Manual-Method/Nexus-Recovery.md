## Installing a Custom Recovery

Recovery images make it easy to flash zip files to the system. 

You have a choice between ClockworkMod and TWRP for a recovery image; download one of them. 

* [TWRP](http://www.teamw.in/project/twrp2/) - A hot new recovery that gives a touch interface and has GooManager integration, making it even easier to flash ROMs. Find your device from the drop down box, and download the `img` file, not any `apk` files.
* [ClockworkMod](http://www.clockworkmod.com/rommanager) - The tried and true Android recovery that we all grew up on. Find the section for your device and choose either *touch* or *regular*.

1. Turn USB Debugging back on (*Settings/Developer Options/USB Debugging*) after completing the initial set-up.

  * If you do NOT see **Developer Options** in **Settings**, go to *Settings/About Phone*, scroll down to the bottom, and tap on the **Build Number** section 7 times. A pop-up should show telling you that you are "now a developer."

2. Return to the bootloader.

    adb reboot bootloader  

3. Copy the downloaded file to the `platform-tools` folder if you're on Windows, or anywhere convenient if you're on Mac or Linux.

* If you want to stay on stock and **keep getting updates from Google**, use this command, which will temporarily boot to a custom recovery.

    fastboot boot <recovery-name>.img
    
* If you want to **use custom ROMs from XDA** instead, use this command, which will make the custom recovery stay on your device until you restore to stock.

    fastboot flash recovery <recovery-name>.img

  * To enter into recovery after flashing, select the "Recovery" option with the {{Key|Volume Keys}}, and press the {{Key|Power}} button to reboot into recovery mode.

5. If you were successful, your phone should have booted into a custom recovery. Stay in the recovery for the next step.

## Sources

* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)