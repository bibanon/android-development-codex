If you have any issues at all or if you need to return it for warranty repair, just reflash your device back to stock. This makes it easy to recover from a brick.

## Restore to Stock image

[Here](http://www.youtube.com/watch?v=-E-EF0QC0Gc) is a video guide by XDA user *SladeNoctis*.

1. Turn on USB Debugging *Settings/Developer Options/USB Debugging* if it isn't already enabled.

  * If you do NOT see **Developer Options** in **Settings**, go to *Settings/About Phone*, scroll down to the bottom, and tap on the **Build Number** section 7 times. A pop-up should show telling you that you are "now a developer."

2. Connect your phone to the computer via USB

3. Check the ADB connection status with this command: If a serial number is displayed, the connection is successful

    adb devices

![](http://i.imgur.com/dpZBo.jpg)

1. Download the latest factory image for your Nexus device: [here](https://developers.google.com/android/nexus/images).

2. Extract the factory image into the same directory as your ADB and Fastboot executables (on Windows it's "C:\android-sdk\platform-tools", on Mac/Linux dump it anywhere you like)

3. Plug in your device. If you are booted into Android, open a command prompt to your ADB and Fastboot directory, then reboot to bootloader.

    adb reboot bootloader

> **Tip**: If the device is off and/or Android is not available, press and hold **both volume keys** and the **power button** simultaneously. After holding all three buttons for a couple of seconds, your bootloader should launch. This should reboot you into the bootloader. 

4. Reflash the old bootloader. Replace `<version-num>` with the one you see in the folder.

    fastboot flash bootloader bootloader-<type>-<version-num>.img

5. Reboot your phone back to bootloader mode.

    fastboot reboot-bootloader

6. Now type this. Replace `<device>` and `<version-num>` with the ones you see in the image filename.

    fastboot -w update image-<device>-<version-num>.zip

## Relock the Bootloader
    
> **Optional**: If you need to relock your bootloader for warranty or security purpouses, stay in bootloader mode and run this in the computer:

Use this command to relock the bootloader.

    fastboot oem lock

If your tablet hasn't already rebooted automatically, type

    fastboot reboot

## Sources

* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)