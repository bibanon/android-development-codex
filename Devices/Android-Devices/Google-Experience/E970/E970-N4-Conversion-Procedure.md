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