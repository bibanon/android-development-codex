MAGLDR is the first, and best-known bootloader for the HD2, made by Cotulla from the Dark Forces Team (DFT). It can boot both Android and Windows Phone 7. 

MAGLDR is closed source software, but free to use. The current build is stable, but has not been updated in over a year, with a few unsolved issues. However, Cotulla *is* actively working (on a WP8 port, to boot); just not actively releasing.

## Features

* Ability to dual-boot Windows Phone 7 and Android
* HTC Windows Phone Style USB flasher mode
* Connection Type = RMNET
* *The Only Bootloader with Built-in Tetris (TM)*

## Issues

* Battery does not charge on MAGLDR screen, you need to boot into an operating system for it to charge.
* Closed source: All work and features come from Cotulla. We are beholden to him and him only.
* Starting to feel the effects of code rot

## Installing MAGLDR 1.13

1. Get the [HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783) running.
1. Make sure that your phone's battery is more than 50% charged! MAGLDR cannot charge the battery, only the operating system is able to.
1. Power off phone.
1. Press and hold *volume down + end* until the HSPL (multi-colored) screen appears. Make sure that it says `CotullaHSPL`; if not, [[please install the HSPL|HD2 Radio and HSPL]].
1. Plug in your USB cord to your phone. At the bottom of your Phone it should say `SERIAL` until your USB is connected. Once USB is connected it should say `USB` at the bottom.
1. The bottom of your phone will change from saying `Serial to USB`
1. Click on the bottom right hand button that says `Install Magldr`
1. Install by following on screen directions. (press end key)
1. Remove the battery, put it back in, and turn on the phone.
1. MAGLDR is now installed! 
1. Your phone currently has no operating system, so you need to install one. See the next section.

## Installing Operating Systems with MAGLDR

After you've installed MAGLDR, the stock Windows Mobile 6.5 OS will be completely erased (not that it will really be missed). You now need to install a new operating system.

* [[Install Windows Phone 7|HD2 MAGLDR WP7]]

### Installing Android

Below are instructions on installing Android to your HD2.

You have two ways of installing in MAGLDR:

* [[Install to NAND|HD2 MAGLDR Android NAND]]: Installs Android directly to your phone. Note that Windows Phone 7 must run from NAND memory, so install to SDCard if you want to dual-boot.
* [[Install to SDCard (NativeSD)|HD2 Android NativeSD]]: Installs Android to your SDCard. This is a new method that gives a performance boost if you use high performance cards, and allows you to install multiple ROMs.
* [[Install to SDCard (Old Method)|HD2 Android SD]]: Installs Android to your SDCard. It is easier, but Android will run slower.

### HD2 Dual-boot

Before choosing on Android or WP7, note that you can actually have both at the same time! Use this guide if you feel like it; it does take a bit of work.

* [[Dual Boot Android and WP7|HD2 MAGLDR Dual Boot]]

### Installing Linux

If you really want to get into new frontiers, you can try Linux on the HD2. It doesn't see as much work as Android or WP7, so it's a bit buggy and messy.

* [[HD2 Linux]]
