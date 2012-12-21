If you're new to Android modding, nice little toolkits will make things easy. If you're a bit more experienced, we do recommend that you try out the Manual method to get a taste of ADB.

## Windows

### Wug's Nexus Root Toolkit (Windows)

A nice GUI toolkit designed to root any and all Nexus devices. Best for newbies.

Requirements:

* [Wug's Nexus Root Toolkit](http://forum.xda-developers.com/showthread.php?t=1766475)
* [[Android ADB drivers|Nexus Drivers]] (alternatively, Toolkit will guide you in installing them)

1. Open up the program.
2. If you haven't already installed Android drivers, click **Full Driver Installation Guide** or check [[our own guide|Nexus Drivers]].
3. On your Nexus device, go to **Settings > Developer Options** and enable **USB Debugging**.
3. Press the **Backup** button to save your data; in order to unlock the Nexus 7, all data will be deleted.
4. Click **Unlock** and follow the directions to unlock your bootloader. Make sure that you've saved your data somewhere safe.
5. Select the **Custom Recovery** option and click **Root**. Once that is done, your device is fully rooted.

* To go back to factory settings, click **Back to Stock** and select the current status of your device.
* To relock the bootloader (perhaps for warranty purposes), click **OEM Lock**.

### MSKip's Google Nexus 7 Toolkit (Windows)

While there are a ton of toolkits for the Nexus 7, this one has the most features out there.

Since updates are constant and the program literally explains itself, just get to the [forum page](http://forum.xda-developers.com/showthread.php?t=1766475), download the toolkit, and follow the directions.

## Mac OS X and Linux

### N7Root (Linux)

A small bash script that automates the Manual method seen below. It also has portable adb/fastboot binaries, so you don't have to get the entire Android SDK.

Requirements:

* [n7root.sh](http://forum.xda-developers.com/showthread.php?t=1813329)
* If you use a 64-bit system, install `ia32-libs` (32-bit support)

1. Download and extract the script. 

2. Open a terminal and use `cd` to go to the directory the script is in.

3. Run the script with the command below, and follow the onscreen directions.

    ./n7root.sh

## Sources

* [XDA-Developers - All in One Nexus 7 Dev Guide](http://forum.xda-developers.com/showthread.php?t=1736578)
* [XDA-Developers - Returning Nexus 7 to Stock](http://forum.xda-developers.com/showthread.php?t=1781250)

### Programs and Toolkits

* [XDA-Developers - Wug's Nexus Root Toolkit](http://forum.xda-developers.com/showthread.php?t=1766475)
* [XDA-Developers - Mskip's Google Nexus 7 Toolkit](http://forum.xda-developers.com/showthread.php?t=1809195)
* [XDA-Developers - N7Root](http://forum.xda-developers.com/showthread.php?t=1813329)