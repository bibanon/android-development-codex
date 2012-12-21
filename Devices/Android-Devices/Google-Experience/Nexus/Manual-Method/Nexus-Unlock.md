**Make sure that all your files are backed up before proceeding; this section wipes your phone!** 

## Unlocking the Bootloader

(replace with USB Debugging Template)

1. Turn on USB Debugging *Settings/Developer Options/USB Debugging* if it isn't already enabled.

  * If you do NOT see **Developer Options** in **Settings**, go to *Settings/About Phone*, scroll down to the bottom, and tap on the **Build Number** section 7 times. A pop-up should show telling you that you are "now a developer."

2. Connect your phone to the computer via USB

3. Check the ADB connection status with this command: If a serial number is displayed, the connection is successful

    adb devices

![](http://i.imgur.com/dpZBo.jpg)

1. Go to the `platform-tools` folder in a command line.

2. Reboot to the bootloader. You will see a large **Start** button with a large Android.

    adb reboot bootloader

3. Unlock your device with this command (run as root with Mac/Linux). **Your device will take a long time to restart**; this is normal, don't panic.

    fastboot oem unlock

![](http://i.imgur.com/ey43n.jpg)
    
{{Note|If a FAILED message pops up like in the picture, just ignore it.  Everything works just fine}}
    
4. You will have to accept and erase all the user data on the device. Use the {{Key|Volume Up/Down}} keys to choose yes or no, and the {{Key|Power}} button to select. Then press {{Key|Power}} a second time to reboot.

**PROTIP: Keep the command line open; we'll need it again soon.**

## Sources

* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)