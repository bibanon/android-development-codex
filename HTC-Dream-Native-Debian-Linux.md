\*Disclaimer! not my fault if your phone bricks!\*

This guide was mostly organized by [Novaspirit](http://novaspirit.com/blog/?p=6), based on notes from [XDA-Developers.](http://forum.xda-developers.com/showthread.php?t=497280&highlight=native+debian&page=2)

keep in mind this a dual boot! option so you can still get into your
normal android then / boot into debian after restart.

### Working

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

### Working with bugs

-   Trackball

No event on click with ball - must click and move ball slightly

-   TouchScreen (MonoTouch)

I can use it in console FBDEV, but with Xorg, the calibration doesn’t
work - calibration is very difficult but doable

-   ALSA

Sound is low, when phone works, sound is very low, and alsamixer, for
select OutPut has device bugs.

-   Xorg with my Kernel

The phone crashes (freeze) when you leave Xorg  found this only happens
sometimes not all

### Not working

-   WiFi card is detected, but crashes when doing “ifconfig wlan0 up”.

### Not tested

-   GPS
-   Accelerometers/Compas
-   Other USB Gadgets, like Storage
-   Bluetooth
-   Internet throug GSM/3G APN
-   Power management
-   Accelerated GL
-   Camera
-   TouchScreen (MultiTouch)

**HOWTO**

For this tutorial I have an HTC Dream with Android WITH EXT2/3 SUPPORT
and 8GB SDCard, I use it with :

You must have HARD SPL and fastboot

My configuration :

HTC Dream Orange (SIM locker or not is not a problem, tested) with 8GB
SDCARD:

-   2 GB FAT32 for Android
-   2 GB EXT3 for app2sd
-   4 GB EXT3 for my real Debian

Android 1.6(or higher) rooted.

PC HOST : Linux.

I have windows also but i mainly did everything on Linux cause it’s
eaiser!

**Create Partition table**

you can use your phone for this but that will be another guide.

I use ubuntu 10.04 when i perform this. you can download a copy at
[ubuntu](http://www.ubuntu.com "ubuntu") and use the live cd.

obtain gparted! by using the command

    sudo apt-get install gparted

select your sdcard and select it on the top right menu

3 partitions are needed

-   fat32 (android)
-   ext3 (android apps and stuff if you got app2sd)
-   ext3 (debian)

**Installing the base of Debian**

Don’t remove your SD card just yet from your Linux PC. there’s still
work that needed to be done

goto your terminal and type:

    mount /dev/sdb2 /mnt
    debootstrap --verbose --arch armel --foreign lenny /mnt http://ftp.debian.org/debian
    sync
    umount /mnt

sb2 being the SDcard location (in gparted top right corner would tell
you)

when that’s all done you would now need to reboot into your phone and we
can now finish the base install from there. those of you who we used to
“adb shell” go ahead and use it will be easer to type with.

mounting the debian partition:

    mkdir /data/mnt
    mount -t ext3 /dev/block/mmcblk0p3 /data/mnt

now your debian partition should be mounted to file system at /data/mnt

next step is to type this into the android term:

    export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
    export TERM=linux
    export HOME=/root
    export USER=root
    chroot /data/mnt /debootstrap/debootstrap --second-stage
    umount /data/mnt
    rmdir /data/mnt

if any error occurs it’s cause something is not typed in correctly
(trust me i did it few times)

now sit back and let it’s do it’s thing (takes i believe about 25 min or
so) and remember to keep this on the charger!

in the mean time. if you don’t have the android sdk for fastboot later
get it now
([http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html))

**SSH on boot**

this is a really important still i believe. without this i wouldn’t have
gotten so far but its optional!

now insert the card back into the linux PC and type this in the terminal

    mount /dev/sdb2 /mnt
    cd /mnt/tmp
    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Native_Debian/2.6.32_GALOULA-001/Modules-2.6.32_GALOULA-001.tar.bz2
    wget http://ftp.debian.org/debian/pool/main/o/openssh/openssh-server_5.1p1-5_armel.deb
    wget http://security.debian.org/debian-security/pool/updates/main/k/krb5/libkrb53_1.6.dfsg.4~beta1-5lenny4_armel.deb
    wget http://ftp.debian.org/debian/pool/main/o/openssh-blacklist/openssh-blacklist_0.4.1_all.deb
    wget http://ftp.debian.org/debian/pool/main/o/openssh/openssh-client_5.1p1-5_armel.deb
    wget http://ftp.debian.org/debian/pool/main/k/keyutils/libkeyutils1_1.2-9_armel.deb
    wget http://ftp.debian.org/debian/pool/main/libe/libedit/libedit2_2.11~20080614-1_armel.deb
    wget http://ftp.debian.org/debian/pool/main/u/udev/udev_0.125-7+lenny3_armel.deb
    wget http://ftp.debian.org/debian/pool/main/u/udev/libvolume-id0_0.125-7+lenny3_armel.deb
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

this will acutally download all the files needed and write the config
files for the ssh for boot

now transfer the sd card back into the phone and in terminal type

    mkdir /data/mnt
    mount -t ext3 /dev/block/mmcblk0p3 /data/mnt
    export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:$PATH
    export TERM=linux
    export HOME=/root
    export USER=root
    chroot /data/mnt /bin/bash
    cd /tmp
    dpkg -i *.deb
    /etc/init.d/ssh stop
    passwd
    sync
    exit
    umount /mnt
    rmdir /data/mnt

this will install the deb files we have dowloaded earlier again this
will take some time. while you wait you can come up with a new password
for your debian system. i kept it simple like “s” (note: keyboard isn’t
working very well 1st time booting so that’s why i kept it simple)

**Test boot and ssh!**

almost there few more steps and we should be done!

now you need fastboot for this! so if you havn’t got so earlier get it
now! [http://developer.android.com/sdk/index.html](http://developer.android.com/sdk/index.html)

powerdown the phone and boot it up with **power+camera** or if your in
your terminal type

    reboot bootloader

this next code is for you Linux PC, this will download the kernel and
boot it

    wget http://www.galoula.net/fr/Tutoriels/HTC-DREAM-G1/FTP/Native_Debian/2.6.32_GALOULA-001/zImage
    fastboot -c "console=tty0 no_console_suspend=1 root=/dev/mmcblk0p3 rootdelay=2 fbcon=rotate:1" boot ./zImage

NOW your phone should be booted into Debian

username: root

password:whateveryoumadebefore

once everything is booted and awaiting login you can actually SSH into
phone and start playing around.  but before that i
would basically forward your internet to your phone so your phone can go
online with SSH.

    ifconfig usb0 192.168.0.200/26
    iptables -A POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE
    echo 1 > /proc/sys/net/ipv4/ip_forward
    iptables -D POSTROUTING -t nat -s 192.168.0.0/24 -j MASQUERADE
    ssh 192.168.0.202

once connected to the phone and feeding internet I went ahead and
updated the sources

    echo "deb http://ftp.debian.org/debian/ lenny main non-free contrib" >> /etc/apt/sources.list
    echo "deb-src http://ftp.debian.org/debian/ lenny main non-free contrib" >> /etc/apt/sources.list
    echo "deb http://security.debian.org/ lenny/updates main contrib non-free" >> /etc/apt/sources.list
    echo "deb-src http://security.debian.org/ lenny/updates main contrib non-free" >> /etc/apt/sources.list
    echo "deb http://volatile.debian.org/debian-volatile lenny/volatile main contrib non-free" >> /etc/apt/sources.list
    echo "deb-src http://volatile.debian.org/debian-volatile lenny/volatile main contrib non-free" >> /etc/apt/sources.list
    apt-get update
    apt-get install bzip2 build-essential

amost done!

**Dual Boot Installation**

now we gotta make the kernel for the phone to dual boot with holding
**power+home**.

in the SSH with the phone type

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

Finally! everything is installed and ready to go with your native
debian.

-   Normal boot will get you into Android
-   Holding home and power will boot into debian