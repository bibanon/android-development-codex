After getting a Nexus 4, my brother needed a more powerful smartphone, so I decided to pass it down to him, and shop for a new one. $300 unlocked was my maximum price, so that ruled out pretty much all the phones I wanted (SGS4 GPE, HTC One GPE, Sony Xperia Z).

I was about to buy another Nexus 4, but I discovered that the AT&T LG Optimus G E970 had exactly the same hardware, but added an SDCard slot and LTE support. It could even be reflashed to accept Nexus 4 ROMs. So, I bought one in great condition for only $250, and a SIM unlock cost $10.

In this guide, you too can turn an LGOG into a Nexus 4 with LTE and an SDCard slot.

## Comparison to Nexus 4

These comparisons are all about hardware, rather than software, since the LG Optimus G can easily be reflashed into a Nexus 4.

### Benefits

* The LG Optimus G has an SDCard slot, in conjunction with the existing 16GB of onboard memory. This was the killer function for me.
* The slot holding the SDCard and MicroSIM is easy to open with a fingernail. The Nexus 4 requires a special tool to take out the MicroSIM.
* While the two phones have the same processor, the Nexus 4's processor is not properly heatsinked, resulting in chronic overheating and throttled performace. The Optimus G has no such problem whatsoever, and this may explain it's better performance.

---

* The Optimus G has physical capacitive buttons located on the very bottom of the bezel, which saves screen space that would normally be eaten up by virtual buttons. (However, if you don't like it or would prefer to use PIE, just disable it after rooting.)
* Although this is just a software thing, the screen on the Optimus G looks better; but only because the software is calibrated better. For some reason, the Nexus 4's software has no color calibration of any kind. 
  * For Nexus 4 users, or Optimus G converters, don't fret; Franco's kernel offers color calibration, and Paranoid Android does it automatically with it's Halfbreed colors.

### Drawbacks

* Transforming the LGOG into a Nexus 4 is a "some assembly required" process, that we ourselves are struggling to understand. Not everything may work as expected.
* Unlike the Nexus 4's classic and comfy curves, the LG Optimus G instead has boxy rectangular corners, which jab into your wrist. Maybe you just have to hold it a certain way, but Google's design is far more comfortable.
* The Nexus 4 has a far prettier, subtle disco ball effect on the back glass. In comparison, the Optimus G's glass is a less flashy, subtle triangle pattern.
* The Optimus G that can use Nexus 4 ROMs is locked to AT&T by default. You'll need to buy an $8 unlock code, or convince AT&T to unlock it for you.

## LG UI Review

The LG UI actually looks pretty cool at first glance, with the smooth animations of the lockscreen and the launcher. LG deserves credits for keeping their phone's UI light and snappy. But all the other apps, themes, and icons just look like a clone of Touchwiz.

There are two features worth a look at, though. However, they really aren't too useful.

* QSlide - (Sadly, this only works when playing videos. And Moboplayer can do the same, so you're not missing out on much. But it's a cool concept for multitasking that Paranoid Android should adopt.) Unlike the awkward and tiny multiwindow of Touchwiz, or the limited HALO of Paranoid Android, LG has finally created a dual-app solution that actually works. You can run two apps at once, and switch between them by using a slider to transparently fade between the two until one is opaque. You can even see both at the same time, with a transparent layer between the two. [But it has to be seen to be believed.](http://www.youtube.com/watch?v=LI0RMh6nEe4)
* The Camera - Just like any other manufacturer, LG pours out a lot into the camera. Even though the hardware is the same as the Nexus 4, something in LG's Camera app optimizes the image. However, it's still no match for the powerful cameras on the market today.
* Quick notes - draw notes on any screen. Meh.

## SIM Unlock

Before changing the system ROM, you will want to unlock the SIM, because only the original firmware is able to unlock the phone.

You have two methods for getting the unlock code; getting the original owner to ask AT&T for one, or paying an unlock service to generate one for you.

### Ask AT&T

If you bought the Optimus G from AT&T, or able to ask the original owner, first try to get the unlock code free from AT&T.

(Write the process here)

### Buy Unlock Code

If you don't have the ability to get the unlock code from AT&T, 

There are many sites dealing in this business, but [SIM-Unlock.net](http://sim-unlock.net/simlock/LG/Optimus_G/) is the one we will use as an example (Not that I endorse them, but they worked for me). There, unlocks cost $9. After registering, remember to pay using Paypal.

You can buy a code there, and await the unlock code in about an hour. It takes this long because the unlock code is generated using a special algorithm in software, using your IMEI.

1. Go to sim-unlock.net and choose the LG Optimus G from the settings.
2. Press "Unlock LG Optimus G"to start the process.
3. Choose unlock product for your LG ( in some cases only one product is available ).
4. Enter your LG IMEI number and other required information.
5. Press "order code".
6. At the shopping cart, fill all needed information such as name or e-mail.
7. Pay for an unlock code with PayPal to start the calculation.
8. After the estimated average time, you will be emailed all codes and unlock guide to your LG Optimus G .

---

1. Insert a microSIM card for a carrier other than AT&T.
2. The phone will prompt you for a carrier unlock code. Enter the one you got from the site.
3. After your phone reboots, it will be unlocked to use any GSM carrier.

[Source](http://www.howardforums.com/showthread.php/1778549-How-to-unlock-LG-Optimus-G-to-use-all-sim-cards)

## Rooting

The only method is through an automatic toolkit, called FreeGee. There is no known manual, computer based method for stock Jelly Bean.

1. Install LG USB Drivers
2. Enable USB Debugging and plug in phone
3. Root the phone using the [toolkit](http://forum.xda-developers.com/attachment.php?attachmentid=2084528&d=1372717878) (provide manual method too)
4. Then use the FreeGee app to install CWM/TWRP and disable LG security.

[Source](http://forum.xda-developers.com/showthread.php?t=2006946)

## Converting Nexus 4 ROMs for the LG Optimus G

Because the hardware of the Optimus G is almost identical to the Nexus 4, ROMs from the Nexus 4's massive ROM development scene can be easily ported over to the Optimus G. 

This is a safer and better alternative to a full transformation into a Nexus 4 (described below), but requires more knowledge and a bit of work for each ROM you want.

* [XDA-Developers: How to Convert LGOG E970 into a Nexus 4](http://forum.xda-developers.com/showthread.php?t=2099784)

## Conversion into a Nexus 4

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

## Miscellaneous Mods

### Symlink the SDCard to a folder on the Internal Storage

Because apps almost always save to the internal storage, and generally don't see the other SDCard; and for greater accessibility in general; it's a good idea to symlink the sdcard to a folder on the Internal Storage, for easy access by you and any app.

### Symlink Internal OBB Folder to Gamedata on External SDCard

[OBB to SD](http://forum.xda-developers.com/showthread.php?t=2056662)

OBB Files are game binaries, and those can get pretty big, pretty fast.

### Changing Menu button into a Recent Apps button

The Menu button is a dated leftover from an older time, and is strongly discouraged by Google. Multitasking demands the availability of a Recent Apps button at all times, and holding the home button can get to be annoying.

Some custom ROMs have the option built in, but if they don't, it just takes a change in a configuration file (look it up)

### Disabling Capacitive Buttons

Some people don't like the physical capacitive buttons at all, or might prefer to use Paranoid Android's PIE.  Here's how to disable them (other then the N4 conversion)

## Sources

* [Ultimate LGOG Pastebin](http://pastebin.com/7CqE62Bj)
* [XDA-Developers: How to Convert LGOG E970 into a Nexus 4](http://forum.xda-developers.com/showthread.php?t=2099784)