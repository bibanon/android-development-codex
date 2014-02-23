{{Note|This guide is only for rooting the HTC One X (Evita).}}

Make sure to find a guide for the right version number (check in **Settings->About Phone->Software**). Usually, it's the latest version.

* Latest AT&T Version: **2.20**
* Latest Rogers Version: Unknown
* Latest Telstra One XL Version: Unknown

## AT&T 3.18
*[Download the files here](http://forum.xda-developers.com/attachment.php?attachmentid=1973170&d=1368918573)

* Step One: Download and extract the file
* Step Two: Get the Htc Drivers(Windows)
* Step Three: Get adb and fastboot(if you dont have it)
* Step Four: Do all the commands listed below

    adb push oneXchopper /data/local/tmp/xpwn
    adb push busybox /data/local/tmp/busybox
    adb push ownage /data/local/tmp/phase1.sh
    adb shell chmod 755 /data/local/tmp/xpwn /data/local/tmp/busybox
    adb shell 
          (within ADB shell)
          ln -s /data/local/tmp/busybox /data/local/tmp/sed
          /data/local/tmp/xpwn
    
    You will see this: 
    [+] This may take a few minutes.
    [+] Success!
    2+0 records in
    2+0 records out
    1024 bytes transferred in 0.001 secs (1024000 bytes/sec)
    2+0 records in
    2+0 records out
    1024 bytes transferred in 0.001 secs (1024000 bytes/sec)
    2+0 records in
    2+0 records out
    1024 bytes transferred in 0.008 secs (128000 bytes/sec)
    
    exit (will exit from shell)

    adb reboot bootloader
* Step Five: Get an unlock code from HTCdev.com

*[Link](http://forum.xda-developers.com/showthread.php?t=2285086)

## AT&T 2.20 X-Factor

In build 2.20: full S-ON is now in effect, which NAND-locks the storage. In other words, you need to unlock the bootloader to gain permanent root.

XDA User Djrbliss built an exploit that gains temporary root access by leveraging two vulnerabilities and uses these newly gained root privileges to overwrite the CID ("superCID"), so that it's possible to unlock the bootloader via HTC's website.

**Choose one and only one method below:**

* [Hansoon2000's HOX Evita Toolkit (Windows)](http://forum.xda-developers.com/showthread.php?t=1952426)
* [[Djrbliss's X-Factor Script (Windows, Mac OS X, Linux)|Evita X-Factor Script]]
* [[Manual X-Factor Exploit|Evita Manual X-Factor]]

## Sources

### AT&T 2.20 X-Factor

* [XDA-Developers - One X X-Factor Root Exploit](http://forum.xda-developers.com/showthread.php?t=1952038)
* [XDA-Developers - Evita All-in-One Toolkit](http://forum.xda-developers.com/showthread.php?t=1952426)