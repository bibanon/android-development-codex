## Flashing a custom ROM, kernel, mod, etc.

1. Download the custom ROM, kernel, mod, etc. of your choice. [This XDA thread] (http://forum.xda-developers.com/showthread.php?t=1975842) contains a nice index of things you can try out.  

2. Copy the file you want to flash to your Nexus 4's storage with a file explorer.

3. Reboot into recovery. You have several options to do this.  

3a) Download *any* root-enabled reboot app. [This is one such example.] (https://play.google.com/store/apps/details?id=simple.reboot.com&feature=search_result#?t=W251bGwsMSwxLDEsInNpbXBsZS5yZWJvb3QuY29tIl0.)  

3b) With your phone plugged in, type  

    adb reboot recovery

3c) Power off your phone holding the power button. Then, power on your phone by holding the power button AND holding the volume down button. Your phone should boot into the bootloader. Next, you can boot into the recovery mode by pressing volume down and selecting "Recovery."  

4. Once in the recovery, do the following sequence of steps (you will notice how repetitive it gets!):  

-----IF FLASHING A NEW ROM, PLEASE DO A FACTORY RESET THEN DO THESE STEPS-----   

4a) Tap "**install zip from sdcard**"  

4b) Tap "**choose zip from sdcard**"  

4c) FIND THE ZIP FILE YOU WANT TO FLASH AND TAP ON IT, ex. XXXXXXXX.zip

4d) Tap "**Yes - Install XXXXXXXX.zip**"

4e) Once it finishes installing, tap "**+++++Go Back+++++**"  

4f) Repeat steps 4a-4e to install the Google Apps zip, or a custom kernel or other mod if you wish.

4g) Tap "**reboot system now**"

## Sources

* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)