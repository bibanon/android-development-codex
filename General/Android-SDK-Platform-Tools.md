The Android SDK Platform Tools are programs used to directly interface with the Android operating system. This includes tools such as `adb` and `fastboot`. 

It supports Windows, Linux, and Mac OS X. There is an installable version and a portable version. 

## Android SDK Platform Tools

### Windows

1. Download the [**Android SDK**](http://dl.google.com/android/installer_r21-windows.exe)  (from Google's website) and install it.

![](http://i.imgur.com/M5pEl.jpg)]

3. Be sure to record the destination folder, or choose where you would like it. Default is `C:\android\android-sdk` .

4. Once installed, start **SDK Manager** (the checkbox will already be selected)

![](http://i.imgur.com/sSYns.jpg)

5. Once the SDK opens, check the first three (3) boxes; they are labeled "**Tools**," "**Android SDK Tools,**" and "**Android SDK Platform-tools**". Install these packages.

6. Once the packages have finished installing, you can close the program.

7. You will have to be in the `platform-tools` folder to use the tools, so move any needed files there.

### Mac OS X



### Ubuntu/Debian/Linux Mint

On Ubuntu 12.10,  `android-tools` are inside the repositories and can be easily downloaded.

    sudo apt-get install android-tools-adb android-tools-fastboot

This package includes `adb`, `fastboot`, and other binaries.

On older Ubuntu version or Debian systems, you'll need to manually add the PPA:

    sudo add-apt-repository ppa: nilarimogard/webupd8
    sudo apt-get update
    sudo apt-get install android-tools-adb android-tools-fastboot

Once that package is installed, `adb` and `fastboot` can be run from anywhere in the terminal.

### Fedora



### Arch Linux/Chakra

Just install these two packages from the AUR:

* `android-sdk-platform-tools`
* `udev-android-rules`

You can now use `adb` and `fastboot` from the terminal, anywhere.

### Other Linux Distros

If all else fails or your distro doesn't support the packages we give you, no worries. Just use the `linux_sdk_adb-installer_v2.sh` script under the "linux" folder in the archive, and everything will be installed in no time.

This script comes from [here](http://www.droidforums.net/forum/droid-hacks/48692-im-back-v2-linux-sdk-adb-auto-installer.html) 

Make sure your phone is being recognized- type:

    adb devices

If your drivers are installed correctly, this should show your phone's serial number. You should hear the **found device** noises when you plug your phone in. if it starts installing drivers,wait for it to finish before typing the `adb devices` command.

## Quick and Dirty ADB

If you need ADB on a portable drive or don't feel like installing the Platform Tools, just use this.

{{Note|Put all files to be used by ADB in the folder where you extracted it to, since it is not a system program.}}

### Files to Get

You will need to download this archive and extract it.

* [miniadb_inc.zip](http://dl.dropbox.com/u/22186524/files/miniadb_inc.zip) - Modified from [Scotty's original miniadb package](http://androidforums.com/incredible-all-things-root/531353-how-unlock-downgrade-achieve-s-off-htcdev.html). Now with Linux installation instructions and binaries, and cleaned up to work for all phones.

### Quick and Dirty ADB (Windows)

First, unzip your `miniadb-inc.zip` file into the root folder of your hard drive, such as `C:\`. This means the top level, not inside any folders, so just copy and paste the folder onto `C:\` with everything else that is there.

You actually can call it whatver you want,but directions from here forward will assume this folder to be named `miniadb_inc`

Open a command window. In Windows 7, click the start bubble in the lower left and type `command` in the search box to find the Command Prompt application. In Windows XP, go to **Run** and type `cmd.exe` to run it.

Type the following at the prompt in your cmd window to change to your `miniadb_inc` directory. 

    cd c:\miniadb_inc

Your command prompt should display `c:\miniadb_inc>` provided you: 

1. unzipped the miniadb_inc zip
2. put the folder on your c drive
3. didn't change the name

Now make sure usb debugging is checked in *Settings/Apps/Development* on your phone,and plug your phone into your PC with a usb cable

### Quick and Dirty ADB (Mac and Linux)

Extract the `miniadb-inc.zip` somewhere accessible, like the `/home` folder.

* **Mac OS X**: Use the `adbmac` binary: substitute all `adb` commands with `./adbmac`.
* **Linux**: Use the `adblinux` binary: substitute all `adb` commands with `./adblinux`.

## Sources

* [Reddit r/Nexus4: IAmAN00bie - How to unlock/root your Nexus 4 with ADB.](http://www.reddit.com/r/nexus4/comments/14kghb/how_to_unlockroot_your_nexus_4_with_adb_a/)
* [Droid Forums - Linux Android SDK Auto Installer](http://www.droidforums.net/forum/droid-hacks/48692-im-back-v2-linux-sdk-adb-auto-installer.html)
* [XDA-Developers - Set up ADB and Fastboot On A Mac Easily](http://forum.xda-developers.com/showthread.php?t=1917237)