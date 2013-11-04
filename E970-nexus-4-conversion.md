This mod completely converts your LG Optimus G (AT&T E970 Only) into a Nexus 4. After the conversion, any mod or custom ROM that can be installed to the Nexus 4 will work on your LGOG, including the following:

* **Stock Nexus 4 ROM** - The stock Nexus 4 ROM can recieve OTA (Over-the-air) system updates from Google, giving you the very latest Android version.
* **Nexus 4 Custom ROMs** - ROMs with special features, found on XDA. Nexus 4 Custom ROMs include CyanogenMod, ParanoidAndroid, AOKP, PACman, OmniROM, etc.
* **Nexus 4 Custom Kernels** - Some kernels give improved performance, improved battery life, or extra features.
* **MultiROM** - Allows you to dual-boot (or triple boot or whatnot) Android ROMs, Ubuntu Touch, Firefox OS, etc.
* **Any other modification or zip compatible with the Nexus 4**

### Warning

There are many different variants of the Optimus G (E973, E975, etc), but **only the AT&T (E970) variant** uses the exact same hardware as the Nexus 4. **Do not use this conversion with any other variant**, you will brick your phone.

This mod works by using LGNPST to replace the stock LGOG partition scheme with one compatible with the Nexus 4. Since this mod replaces the stock bootloader, it is **far riskier** than a typical ROM flash. The LGOG has a few extra features and quirks, which need to be fixed with zip mods.

Generally, if your phone doesn't run out of power or get disconnected during the process, things will be okay, and afterwards, the modification is completely reversible using LGNPST. However, **you are ultimately responsible for anything that happens to your device.**

And before embarking on this difficult journey, you should first check out the [LGOG Android Development forums on XDA](http://forum.xda-developers.com/forumdisplay.php?f=1921) to see if the Custom ROMs there are good enough for you. Most of them are ported from the N4 anyway.

### What to Find

This method needs a ton of rewriting, clarification, and documentation, especially with dead links galore.

* **[Found]** - [Regain all 16GB of space](http://forum.xda-developers.com/showthread.php?t=2160124)
* **[Found]** - [Generic fixes zip file (lte, sdcard, nfc, etc)](http://forum.xda-developers.com/showthread.php?t=2117576)
    * SDCard fix
    * Volume keyfix (reversal)
    * NFC fix (check if the separate file is equivalent, probably is
* AT&T Radio for LTE (and find out which radio is best and most stable)
* Capacitive button fix

---

* [LGNPST + Drivers](http://pastebin.com/g8hXBaaA)
* N4 files - (Stock ROM Google, Custom Recovery, SuperSu)
* LGOG convert to N4 file LGNPST
* **[Found]** [AT&T LGOG Restore `.tot` in LGNPST](http://forum.xda-developers.com/showthread.php?t=1984545)
* SDCard mod for MultiROM (create it)
* Test results: what configuration is best, radios, instability, issues, etc. Check the XDA threads for info

### Procedure Outline

#### Core Procedure

* Backup all internal storage, and TWRP/CWM if necessary
* Install SDK Platform Tools, drivers
* Install LGNPST
* Use LGNPST to flash N4 partition table
* Factory Reset with Fastboot `fastboot - w`
* *(ONLY if it is still bootlooping, wipe /system)* Turn off the phone, hold volume down+power button (or volume up, due to reversal?) while turning on, select and enter recovery option, use volume key to select "wipe data/factory reset". [Source](http://forum.xda-developers.com/showpost.php?p=36976814&postcount=412)
* Flash AT&T Radio for LTE, and general stability

#### Custom Recovery

* **Stock ROM users:**
    * Run Custom Recovery
    * Install SuperSu (optional)
    * Stay in custom recovery for next step
* **Custom ROM users:**
    * Install Custom Recovery (TWRP/CWM)
    * Install Custom ROM and/or Kernel

#### Fixes

* Flash NFC fix (only if needed)
* General fixes file, recompile and test it for non CM/AOSP ROMs
* Volume key fix (reverse)
* Capacitive Button fix (optional)

#### Other Mods

* MultiROM N4
    * Dual-boot Android ROMs
    * Ubuntu Touch, Firefox OS, Linux, etc.
* Restore AT&T/LG Stock Firmware with LGNPST

---

* Install a Nexus 4 Custom Recovery, such as [TWRP](http://forum.xda-developers.com/showthread.php?t=2010984) (You MUST get rid of your existing Optimus G recoveries)

### Restore to Stock AT&T/LG Firmware

This conversion is fully reversible, since flashing a stock AT&T/LG ROM through LGNPST will restore the original partition table.

* run fastboot -w before beginning, to conduct a factory reset (otherwise LGNPST will spit out [an unhelpful "encryption error"](http://forum.xda-developers.com/showpost.php?p=40178202&postcount=365) that demands a factory reset)
* Then start flashing

### Sources

* [XDA-Developers: How to Convert LGOG E970 into a Nexus 4](http://forum.xda-developers.com/showthread.php?t=2099784)
* [XDA-Developers: Fix the N4-Converted LGOG to use all 16GB of space](http://forum.xda-developers.com/showthread.php?t=2160124)
* [Dev Host: NFC Fix](http://d-h.st/51v)

---

* [XDA-Developers: Share your Nexus 4 Conversion Experience](http://forum.xda-developers.com/showthread.php?t=2160124)

### Install Fixes

Unlike the Nexus 4, you will need to do one extra step after installing any ROM: 

Install a special zip file (using the custom recovery) to fix the following:

* LTE & GPS(JB AT&T modem)(4.2.2)
* Volume keys
* Internet APNs(AT&T)
* SD card fix (stock 4.2.1 & 4.2.2 based roms only for now)
* NFC(Might or might not work)

[Flash Fixes zip file](http://forum.xda-developers.com/showthread.php?t=2117576)

(we need to figure out how this thing works...)

#### Customize the Fixes zip file

Each custom ROM variant uses a unique `framework-res.apk` file that cannot be used in other variants, so we cannot make a universal fix. 

However, you can modify the fixes file to work with any other ROM in less than 1 minute. (We should really create a script to do this automatically, though... Maybe a zip.js app, or integration with Android auto-patcher?) Download the fix zip file and follow these instructions:

1. Download and install [7zip](http://www.7-zip.org/).
2. Get *the zip file of your current custom ROM*, and view the files inside.
2. Extract the `framework-res.apk` file from your custom ROM's zip file. It is found under `framework/`.
3. Right-click `framework-res.apk`, go to the 7zip menu, and select **Open archive**.
4. A new window will open. Browse to `res/xml/` and copy [this modified `storage_list.xml`](https://dl.dropbox.com/u/35009953/storage_list.xml) into it (to download, click the link, right-click save-as).
5. It will ask to to overwrite, click **Yes**.
6. Replace the `framework-res.apk` in **the fixes zip file** (under the folder `framework/`) with your modified one.
7. You can now flash the modified fix to your phone.