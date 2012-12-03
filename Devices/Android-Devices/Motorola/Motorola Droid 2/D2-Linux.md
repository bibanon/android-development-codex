## Installing Linux

Installing BASH not enough for you? You want the full Linux experience? Some people have gotten a full Linux chroot environment running on their X. Currently this is a stripped down version of Ubuntu, but the next iteration is moving toward Slackware-based Gentoo.


You'll need a few things to get started. First, I'm assuming you're rooted and probably running a custom ROM. The version of BusyBox with CM7 seems to work fine but some other versions are a bit broken according to legend (yes, I'm actually still running CM7 and getting used to the AOSP camera and lack of HDMI - plus I haven't had any time to go back to Liberty or try out Justice).


You'll also need to install the Android SDK. I'm also going to assuming you're running Linux, because if you want to run Linux on your phone and can't get it working on your computer you'll probably want to skip this tutorial. Note that you can run Linux in a Virtual Machine (I like VirtualBox) and then just share the Android's USB port with the VM.


The full instructions are found here where you can also download Laika Beta 1.3 (an Ubuntu-based distribution built for mobiles) or download it from me. REMEMBER: This page is for your Droid X. The page linked in this paragraph has a list of other phones supported by this process which may have slightly different implementations.


You'll also want the bootubuntu script, but there's a typo in it so I've fixed it and placed it here. Place this file on your SD card before you begin.


If this is a fresh install of the Android SDK you'll probably want to run ~/android-sdk-linux_x86/tools/android update sdk and download the suggested packages. All you really care about is making sure that ~/android-sdk-linux_x86/platform-tools/adb exists. The following set of commands should help you install stuff on your phone. It will install into the internal storage area, if you want to install to your SD card, stop and ask yourself why. You've got gobs of space internally, but all of your media needs to sit in that tiny little 16GB (or 32GB if you've upgraded) SD card. Why waste it on a Linux install if you don't need to?


	# Start from your home directory
	cd ~
	# Extract and mount the Ubuntu image
	unrar e ~/Downloads/Laika_Beta_1.3.rar
	sudo losetup /dev/loop0 ~/ubuntu.img
	sudo mount -t ext2 /dev/loop0 ~/ubuntu
	sudo rm ~/ubuntu/usr/bin/X11
	sudo chmod 777 ~/ubuntu
	# Run some commands on your phone
	sudo ~/android-sdk-linux_x86/platform-tools/adb shell
	mount -o remount,rw -t yaffs2 /dev/block/mtdblock3 /system
	mkdir /data/local/mnt
	chmod 777 /data/local/mnt
	cp /sdcard/bootubuntu /system/bin
	chmod 777 /system/bin/bootubuntu
	exit
	# Push the files to the phone - this takes a LONG time
	sudo ~/android-sdk-linux_x86/platform-tools/adb push ~/ubuntu /data/local/mnt

Now opening up a terminal on your phone you should be able to run bootubuntu as root (you may need to run su first). Note that I needed to create a few directories for some things to work:


	mkdir /var/lib/dpkg/updates
	mkdir /etc/apt/preferences.d
	mkdir sys
	mkdir dev/pts
	mkdir proc
	sudo apt-get install vim

If course, everyone needs to install VIM. EMACS users just don't get it... To start up a GUI, try these commands:


	export DISPLAY=localhost:0.0
	Xvnc -localhost -geometry 854x480 -depth 24 -deferupdate 0
	startlxde

Now you can run your favorite VNC viewer on localhost:5900 to access a Linux GUI. Pretty cool, eh? Remember, you can't just copy Ubuntu binaries over from your desktop and have them work. You'll need to use things compiled for an ARM processor, most of the things in the Ubuntu repositories (and the Debian repositories from which they're derived) have ARM builds in them so hopefully most of what you need will work just fine.
