This guide was mostly organized by [Novaspirit](http://novaspirit.com/blog/?p=6), refined on [the Debian Wiki](https://wiki.debian.org/HowtoDebianInAndroid), and based on notes from [XDA-Developers.](http://forum.xda-developers.com/showthread.php?t=497280&highlight=native+debian&page=2)

Here, we've fixed some glaring errors and updated it for Debian squeeze.

This guide will create a dual-boot Linux and Android system. The phone will boot normally into Android; just hold home+power when turning on to enter Debian Linux.

### Working / Not Working

**Working**

-   Phone can boot!
-   SDCard reader/writer
-   Keyboard
-   LEDs
-   Touchscreen
-   Vibrator
-   USB Ethernet
-   Xorg with OpenMoko Kernel
-   Phone Call : I am able to answer an incomming call from console!
-   Unlock SIM Card and register on Network

**Working with bugs**

- **Trackball** - No event on click with ball - must click and move ball slightly
- **TouchScreen** (MonoTouch) - I can use it in console FBDEV, but with Xorg, the calibration doesn’t
work - calibration is very difficult but doable
- **ALSA** - Sound is low, when phone works, sound is very low, and alsamixer, for select OutPut has device bugs.
-   **Xorg with my Kernel** - The phone crashes (freeze) when you leave Xorg  found this only happens
sometimes not all

**Not working**

-   WiFi card is detected, but crashes when doing “ifconfig wlan0 up”.

**Not tested**

-   GPS
-   Accelerometers/Compas
-   Other USB Gadgets, like Storage
-   Bluetooth
-   Internet throug GSM/3G APN
-   Power management
-   Accelerated GL
-   Camera
-   TouchScreen (MultiTouch)

### HOWTO

You will need: 

* A laptop with Debian-based Linux (Ubuntu, Debian, Linux Mint, etc.)
  * Just run it off a [live CD](http://www.ubuntu.com)
* An HTC Dream/G1 or MyTouch 3G
* 8GB or larger SDCard
  * 4GB for Linux, 4GB for Android
* An Android 1.6 or higher Custom ROM that supports EXT2/3
  * only a few older Android versions lack it.
* USB Debugging Enabled
* HardSPL and Engineering SPL
  * gives you `fastboot` support
* ADB and Fastboot
  * The easiest way to install them is to use [Minimal ADB](http://forum.xda-developers.com/showthread.php?t=2317790).

### Partitioning the SDCard

> It's possible to use Android itself to partition it, but that's another guide...

obtain `gparted` using:

    sudo apt-get install gparted

select your sdcard and select it on the top right menu

You will need three partitions:

-   fat32 (android)
-   ext3 (android apps and stuff if you got app2sd)
-   ext3 (debian)

For example, an 8GB SDCard would be partitioned like this:

-   2 GB FAT32 for Android
-   2 GB EXT3 for app2sd
-   4 GB EXT3 for my real Debian

After creating the partitions, make sure to record the names, found in `gparted`'s top-right corner (ex. `/dev/sdb1`, `/dev/sdc6`). 

The G1 will see those partitions with names: `/dev/mmcblk0p3` or whatnot. Just add the last number of the `/dev/sdb1` name, replacing that `3`.

Keep your SDCard plugged in.

### Generate the Debian Root Filesystem with `debootstrap`

We will use `debootstrap` to install all the necessary system packages to an image, which you will flash onto the G1.

     mkdir debdroid
     sudo /usr/sbin/debootstrap --foreign --arch armel squeeze debdroid/ http://http.debian.net/debian

### Copy `debootstrap` to the SDCard

We now need to copy the system image to the G1. Change `/dev/sdb3` to the EXT3 partition for Debian on your SDCard (The names were previously obtained from GParted).

     mount /dev/sdb3 /mnt/memory   # change correct device
     sudo cp -pfr debdroid/* /mnt/memory/
     umount /mnt/memory

### `debootstrap` Second Stage

Now reboot into your G1, and connect it to the computer to begin the second phase of installation. Make sure **USB Debugging** is enabled, and your phone is recognized by ADB.

Mount the debian EXT3 partition:

    adb shell
    mkdir /data/mnt
    mount -t ext3 /dev/block/mmcblk0p3 /data/mnt

Now your debian partition should be mounted to file system at `/data/mnt`

Next, we will chroot into the debian partition to start the second stage of installation. This will take about 25 minutes, so be patient and keep your phone charged.

    export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
    export TERM=linux
    export HOME=/root
    export USER=root
    chroot /data/mnt /debootstrap/debootstrap --second-stage
    umount /data/mnt
    rmdir /data/mnt

### Set the SSH service to start on boot

We will need an SSH service running on the G1 for internet tethering from the PC. We have to install Galoula's SSH modules, and edit configuration files to start SSH on boot.

Insert the sdcard back into your Linux PC and run these commands: 

(replace `/dev/sdb2` with the name of your debian EXT3 partition)

(the package links will have to be updated for squeeze)

    mount /dev/sdb2 /mnt
    cd /mnt/tmp
    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Native_Debian/2.6.32_GALOULA-001/Modules-2.6.32_GALOULA-001.tar.bz2
    tar -jxvf Modules-2.6.32_GALOULA-001.tar.bz2 -C ..
    echo g_ether >> ../etc/modules
    echo "auto lo" >> ../etc/network/interfaces
    echo "iface lo inet loopback" >> ../etc/network/interfaces
    echo "auto usb0" >> ../etc/network/interfaces
    echo "iface usb0 inet static" >> ../etc/network/interfaces
    echo "        address 192.168.0.202" >> ../etc/network/interfaces
    echo "        netmask 255.255.255.192" >> ../etc/network/interfaces
    echo "        network 192.168.100.0" >> ../etc/network/interfaces
    echo "        gateway 192.168.0.200" >> ../etc/network/interfaces
    echo "none /sys sysfs rw,nosuid,nodev,noexec 0 0" >> ../etc/fstab
    echo "none /proc proc rw,nosuid,nodev,noexec 0 0" >> ../etc/fstab
    echo "udev /dev tmpfs rw,size=10240k,mode=755 0 0" >> ../etc/fstab
    echo "devpts /dev/pts devpts rw,nosuid,noexec,gid=5,mode=620 0 0" >> ../etc/fstab
    echo "HTC-Dream" > ../etc/hostname
    echo "127.0.0.1       localhost HTC-Dream" > ../etc/hosts
    cat /etc/resolv.conf > ../etc/resolv.conf
    mkdir ../dev/pts
    sync
    cd
    umount /mnt

Later on, we will also install the SSH packages on the phone itself.

Now insert the sdcard back into the G1, and plug the G1 into the computer. 

### Chroot Setup

> **Note:** Don't worry; we are still installing Native Debian Linux. We are only temporarily using a chroot for greater convenience when pumping in commands.

Make sure your Android G1 has a WiFi internet connection and USB Debugging enabled.

* Set your phone to Stay Awake, so the phone will not suddenly cut off your wifi connection. `Settings->Application->Development->Stay Awake`
* Disable WiFi sleep, which will cause download issues. `Settings->Wifi->Menu Button->Advanced->Wifi Sleep Policy->Never sleep when plugged in`

#### Enter the chroot

First, mount the Debian partition on the G1 from your PC, using these commands:

    adb shell
    mkdir /data/mnt
    mount -t ext3 /dev/block/mmcblk0p3 /data/mnt

Then, enter the chroot:

    export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
    export TERM=linux
    export HOME=/root
    export USER=root
    chroot /data/mnt /bin/bash

#### Set up Squeeze Package Repositories

This will install the necessary Debian repositories and some basic packages to the G1.

Type the commands below to add squeeze package repositories:

    echo "deb http://ftp.debian.org/debian/ squeeze main non-free contrib" >> /etc/apt/sources.list
    echo "deb-src http://ftp.debian.org/debian/ squeeze main non-free contrib" >> /etc/apt/sources.list
    echo "deb http://security.debian.org/ squeeze/updates main contrib non-free" >> /etc/apt/sources.list
    echo "deb-src http://security.debian.org/ squeeze/updates main contrib non-free" >> /etc/apt/sources.list
    echo "deb http://ftp.debian.org/debian squeeze-updates main contrib non-free" >> /etc/apt/sources.list
    echo "deb-src http://ftp.debian.org/debian squeeze-updates main contrib non-free" >> /etc/apt/sources.list
    apt-get update
    apt-get install bzip2 build-essential

#### Install SSH

Finally, we can install the openssh packages. An SSH server allows you to access a USB connected phone from your computer, so you can pump in terminal commands using copy and paste.

Type this command in the same chroot at your computer:

    apt-get install openssh-server openssh-client libkrb53 openssh-blacklist libedit2 udev libvolume-id0 libkeyutils1 
    /etc/init.d/ssh stop

> **Note:** During installation, the G1 might restart unexpectedly. Simply enter the chroot again (see previous section).

#### Create a Root user password and exit the Chroot

We will want to create a root user password.

    passwd

Type in the password you want to use (make sure that you only use numbers and letters! special characters cannot be easily entered). 

As a security measure, text will not appear onscreen, so just keep typing and press enter when you've put it in.

#### Exit the Chroot

We're all done, so you can exit the chroot.

    sync
    exit                # exits the chroot
    umount /mnt
    rmdir /data/mnt
    exit                # exits `adb shell`

### Boot Linux

Put the sdcard back into your G1, Plug in your G1 to the PC, and type this command to enter `fastboot` mode:

    adb reboot bootloader

Type this command on your Linux PC to download and boot the kernel.

    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Native_Debian/2.6.32_GALOULA-001/zImage
    fastboot -c "console=tty0 no_console_suspend=1 root=/dev/mmcblk0p3 rootdelay=2 fbcon=rotate:1" boot ./zImage

Your phone will now boot into Debian.

### Type in the Username and Password

As a security feature, nothing will be displayed while you type your password.

    username: root
    password: <the password that you created>

### Tether your G1's internet connection to the PC

We have to forward your PC's internet connection to your G1. Type these commands in the computer:

    ifconfig usb0 192.168.0.200/26
    iptables -A POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE
    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -D POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE

(not tested) Alternatively, use these commands: (recommended by [Jorge Peñalba](http://novaspirit.com/blog/?p=6&replytocom=31322))

     ifconfig usb0 192.168.0.200/26\
     iptables -A POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE\
     echo 1 \> /proc/sys/net/ipv4/ip\_forward\
     ssh 192.168.0.202 -l root\
     iptables -D POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE\
     echo 0 \> /proc/sys/net/ipv4/ip\_forward

### SSH into the G1

Use this command to SSH into the G1's command line, so you can send commands to it from your computer. Log into your phone with the same username and password you set before.

    ssh 192.168.0.202

### Enable Dual Boot (optional)

We will create a custom kernel for the phone to dual-boot between Android and Linux. This way, you will be able to hold **power+home** to boot Linux.

Use your computer to SSH into the G1 and run these commands:

    cd /usr/src
    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Outils/mkboot.tar.bz2
    tar -jxvf mkboot.tar.bz2
    cd mkboot
    make && make install
    cd /usr/src
    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Outils/android-imagetools.tar.bz2
    tar -jxvf android-imagetools.tar.bz2
    cd android-imagetools
    make && make install
    cd /tmp
    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Native_Debian/2.6.32_GALOULA-001/zImage
    wget http://wiki.openmoko.org/images/f/f6/Newramdisk.cpio.gz
    mkbootimg --cmdline "console=tty0 no_console_suspend=1 root=/dev/mmcblk0p3 rootdelay=2 fbcon=rotate:1" \
    --kernel zImage --ramdisk ./Newramdisk.cpio.gz -o Recovery-boot.img
    cat /dev/zero > /dev/mtd1
    mkdir /dev/mtd
    cd /dev/ && for i in `ls -w1 mtd?`;do ln -s /dev/$i /dev/mtd/$i; done && cd - || cd -
    flash_image recovery Recovery-boot.img

-   Normal boot will get you into Android
-   Holding home and power will boot into debian