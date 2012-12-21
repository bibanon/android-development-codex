## Required Files

You'll need to install the [[Android SDK Platform Tools]] before proceeding. Follow the guide in the link to do so.

Next, download the files below:

* [SuperSu (allows you to use root apps)](http://download.chainfire.eu/298/SuperSU/CWM-SuperSU-v0.99.zip)

![](http://i.imgur.com/IrelS.jpg)

Copy the SuperSU file to your phone.

### Pushing the SuperSU File to Your Phone

If you're running Linux or Mac and the device has issues mounting due to MTP, push it directly with ADB. 

1. Turn USB Debugging back on (*Settings/Developer Options/USB Debugging*) after completing the initial set-up

  * If you do NOT see **Developer Options** in **Settings**, go to *Settings/About Phone*, scroll down to the bottom, and tap on the **Build Number** section 7 times. A pop-up should show telling you that you are "now a developer."

2. Download [SuperSu](http://download.chainfire.eu/298/SuperSU/CWM-SuperSU-v0.99.zip) from your computer and place it in the `platform-tools` folder.

2. In the command prompt, enter this command to send your SuperSU zip directly to your device.

    adb push CWM-SuperSU-v0.99.zip /sdcard/  

## Sources

* [Reddit r/GalaxyNexus: /u/LAR0311 - How to root your Galaxy Nexus] (http://www.reddit.com/r/GalaxyNexus/comments/1192xd/how_to_root_your_galaxy_nexus_with_adb_a_tutorial/)
* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [I have posted the guide to lock/unroot here.] (http://www.reddit.com/r/nexus4/comments/14mdq4/how_to_lockunroot_your_nexus_4_with_adb_a/)