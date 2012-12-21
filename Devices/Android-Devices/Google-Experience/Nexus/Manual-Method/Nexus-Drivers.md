If your devices aren't detected by ADB, install these drivers. For Windows and Linux.

## Install ADB Drivers (Windows)

1. Plug your device into your computer with the USB cable. Wait for the drivers to install.

2. If you do NOT see a **Developer Options** menu in **Settings**, then go to *Settings --> About Phone*, scroll down to the bottom, and tap on the **Build Number** section **7 times**. A pop-up should show telling you that you are "now a developer." Yay!

2. Enable **USB debugging** in *Settings --> Developer Options*.   

* Wait for the second set of drivers to install and you're ready to move to Part 1

### If the drivers are not automatically installed

Download the [**LG Nexus 4 USB Driver**](http://forum.xda-developers.com/showthread.php?t=1992345) and follow the instructions in the above guide.

OR

Download the drivers by installing the desktop client for [PDANet for Android] (http://junefabrics.com/android/). Once the program is installed, you should select "LG" for the driver installation section. 

{{Note|You can remove the program after the drivers are installed.}}

## Configure udev rules (Linux)

Edit the following file (or create it if it doesn't exist)

* **Ubuntu/Debian**: `/etc/udev/rules.d/51-android.rules`
* **Arch/Chakra**: `/usr/lib/udev/rules.d/51-android.rules`

Add these rules to that file:

    # LG - Nexus 4
    SUBSYSTEM=="usb", ATTR{idVendor}=="1004", MODE="0666"
    # ASUS Nexus 7 and Samsung Nexus 10
    SUBSYSTEM=="usb", SYSFS{idVendor}=="18d1", MODE="0666"
    
## Sources

* [Mount Nexus 4 in Linux](http://forum.xda-developers.com/showthread.php?t=2004182)
* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)