The HTC HD2 is truly the dream phone of the mobile world, and a testament to the golden age of HTC. Upon it's release in late 2009, it had a huge screen of unprecedented size (for it's time), half a gig of memory, and a 1 GHz Qualcomm Snapdragon processor. What's there not to like?

There was only one crippling flaw; it was stuck on the dated and later abandoned Windows Mobile 6.5, in a time where Windows Phone 7 was in the cards, iPhone was king and Android was quickly catching up.

The story would have ended there, but as the most powerful phone in the market and firesales looming, developers quickly looked for ways to load different mobile operating systems to this superphone. 

Eventually, they managed to stuff not just each of the newest versions of Android, but also Windows Phone 7, and even entire Linux operating systems. Each year, the phone just kept getting better and better, becoming the stuff of developer legend.

As of this writing, even the venerable HD2 is beginning to feel a bit dated, but it's safe to say that it will still be loved for quite a while longer. 

## Issues

* HD2 History may contain some problems... please fix if you see them
* It's not adequately explained how to flash a new radio...
* finish up the ClockworkMod recovery guide, how to install to MAGLDR and cLK
* Make guide to variants and how to identify them
* Stock is SPL/OSPL, HSPL is the engineering SPL
* Suck in guide to NativeSD, it's very unclear even at the source
* Suck in single SDCard guide
* The Accessories guide sucks
* Add guide to Debian Linux on HD2
* Create a "Credits" section with all the names of the people whose work was used in this guide...
* Finish NativeSD Boot switch app guide

## Glossary

> Should be imported like a Mediawiki Template...

* [[Glossary Windows]]
* [[Glossary HTC HD2]]
* [[Glossary Android]]

## What makes the HD2 so special?

> _This is a long bit of history about why the HTC HD2 became what it is today, and what technologies gave it such abilities. You don't need to know this to use the phone, but it's good to know how things came together_

HTC started out as the creator of the first Windows Mobile PDA/smartphones in 1999, blowing away old Palm PDAs with a dream to bring the power of a true computer to your pocket. You may not have heard this before; indeed, HTC had to sell out to third-party brand-names like Compaq and HP to even get these phones to market. 

For the next 7 years, the tech world was swamped with phones running Windows Mobile with that same ideal in mind. But by the release of the iPhone, the quirks that made Windows on smartphones untenable were dreadfully clear; Underpowered CPUs, unappealing design, lack of space, and the dependency on unreliable and uncomfortable stylus-based touchscreens. 

Eventually, two camps of phone manufacturers came about, one that would work on reforming Windows Mobile to fight back, and another that wanted to create an entirely new standard operating system, open-sourced for all parties to use without the cost of licensing fees. The latter camp banded together to form the Open Handset Alliance, eventually creating the Android Operating System. HTC itself ended up being the first to create a smartphone based on Android, known as the HTC Dream. (T-Mobile G1)

However, the plucky company was not one to put all it's eggs in one basket, and  began the development of TouchFLO on Windows Mobile, to retrofit modern multitouch methodologies on the aging OS. This mix pretty much blew Android out of the water, and the company readied their efforts to create the best phone ever designed. The phone would have true capacitive touchscreens, a massive 4.7 inch display (unheard of at the time), a decent camera, a 1GHz Snapdragon CPU with half a gig of RAM (reaching the abilities of actual PCs) and HTC's newest edition of TouchFLO, HTC Sense.

The result was the HTC HD2, a well-designed, internationally sold, and heavily hyped smartphone right from the start. Unfortunately, due to the unexpected announcement of Windows Phone 7, the HTC HD2 was now a general without an army, unmatched in specs yet obselete upon release. Additionally, Android, HTC's little side project, was fast improving and growing in popularity. Sensing the markets, the company refocused it's efforts on Android and moved it's signature Sense interface there, which would later bring HTC out of OEM servitude into first-party territory.

As for the HD2, Microsoft would not bother to give updates for a WM6 device, no matter how powerful it was. Firesales loomed, hopes broke down, but interest grew in porting Android and WP7 to the superpowered phone. These unique conditions of a phone too powerful to abandon and too big to fail meant that the HD2 had the benefit of a large, international userbase composed of all the last and the greatest Windows Mobile developers, now in a mad rush to keep the phone relevant. 

When users couldn't decide on running either Android or WP7, developers split up and worked on both. Early efforts were underwhelming, but things quickly improved with experience and time, once Android phones were introduced with similar specs. Android was discovered to be able to run from the SDCard easily, ported from the pitiful attempts at Linux on other WM6 phones from the past. 

But this wasn't enough, and MAGLDR was developed to completely replace Windows Mobile with Windows Phone 7, later gaining the ability to run Android from SDCard, and even Android from phone memory to boot. Another group made an open-source bootloader called cLK, with the ability to interface with `adb` and `fastboot` like a plain-old Android device, and added some improvements not found in MAGLDR. It was later found that the method used to run Android on the HD2 could be used to run full desktop Linux. 

In the space of a year, the HD2 had gained all of it's signature features, quickly becoming famous for the community's unprecedented longevity, recieving the newest Android and WP7 builds even when phones of it's caliber never got close. The latest development was the introduction of Android (NativeSD), to make Android run as fast as possible on SDCards.

The HD2 is a product of unparalleled design, bad luck, and a massive community's fight to turn lemons into lemonade by giving this lost phone a second life. Who knows when such an arrangement will occur again, or if anything can even think of equaling the HD2's abilities?

## The benefits of modding the HD2

If your HD2 is currently on stock Windows Mobile 6.5, it's well worth taking the jump to a whole new world and a whole new phone experience. Let's look at the many benefits. 

No phone to date has ever matched the versatility of the HD2, and unfortunately, it does not seem like there will be anything like it in the future.

* Ability to use a multitude of modern, stable phone OSes
  * Android (currently up to 4.1 Jelly Bean as of 9/28/12)
  * Windows Phone 7 (up to 7.8 as of 9/28/12)
  * Linux (Fully featured, no-holds-barred Debian Linux ARM)
  * Quite a few more (and some others under research, like Tizen and Firefox OS)
* Ability to dual-boot Android from SDCard and Windows Phone 7 on phone memory with MAGLDR
* cLK can make the HD2 work like an ordinary Android device with adb and fastboot

Pretty amazing for a 3 year old phone. Not even the greatest of Google's Nexus devices can stand up to the HD2's longevity and versatility.

### HD2 Models

The HD2 has multiple models throughout the world, and it would do good to find out which one you have, to ensure that you do not flash the incorrect file and risk bricking your phone!

### SIM Unlocking your phone

Notice that you can only unlock your phone from within stock Windows Mobile 6.5. If there is even the slight chance that you will use any carrier other than the one your HD2 is shipped with, it is strongly recommended to SIM unlock your phone. 

It will suck to take the long road back to WM6, so it's best to make your decision now.

Some carriers will give you the unlock code for free, and others will not. If you have money to spend, you can easily get unlock codes for a small sum. Below are some good sites for codes. Follow the instructions on their site to unlock your HD2.

* [UnlockUSA, gives unlock codes for $4.00](http://stores.ebay.com/unlockusa)
* http://www.pdamagician.com/unlocking.html
* http://unlock-now.com/
* http://leo.unlock-now.com/

Once you unlock your phone, it is permanently unlocked, and nothing short of hardware modification can ever change that.

### Getting the tools

There are a ton of flashing utilities and methods for installing things onto the HD2, and it can get to be a unwarranted, dangerous, and confusing mess. 

Instead, we'll be using bzdeme's (based on [ksubedi's](http://forum.xda-developers.com/showthread.php?t=1090783) ) [HD2 Toolkit](http://d-h.st/qgm) as our bread and butter. This program pretty much does everything short of the new NativeSD method, so download it and [install the drivers](http://d-h.st/jIk) before proceeding.

Sadly, all of these flashers only work with Windows (due to the nature of how HSPL works), so if you don't have it, get Windows or fire up [Virtualbox with USB passthrough](https://www.virtualbox.org/).

## Flash HSPL and Radios

To install custom ROMs to your HD2, you will need to install a special HSPL to your HD2 that will allow you to do so. Installing an engineering HSPL is the equivalent of rooting on Android. 

To really do anything useful, you need to install a radio v. 2.08.50 or later. These control the cell phone radio chip, which can sometimes be impediments.

### CotullaHSPL

This is the standard engineering HSPL that most people use, developed by Cotulla, the creator of MAGLDR.

1. Power off your phone.

2. Hold the *Volume Down* Button and press the End (red) key once. Continue holding until a multi colored screen appears.

3. Plug in your USB cord to your phone. At the bottom of your Phone it should say SERIAL until your USB is connected. Once USB is connected it should say USB at the bottom.

4. Launch the previously downloaded **HD2 Toolkit**.

5. Click **Install HSPL** at the bottom right hand of the screen. Make sure to install `HSPL 2.08` . Just follow the steps, and make sure your device meets the requirements before proceeding. (50% battery, anti-virus disabled, etc)

*Note* After HSPL is flashed, hold down volume down button as soon as the phone reboots. Your phone will enter the bootloader screen. 

## Install a Bootloader

The unique bootloaders of the HD2 are what make it so special. To run and dual-boot operating systems, you will need a bootloader, like MAGLDR or cLK. Choose the one you prefer and follow the instructions to install.

### MAGLDR

MAGLDR is the first, and best-known bootloader for the HD2. As such, it is the best supported (for now), and is the most versatile pick since it also supports booting Windows Phone 7. Unfortunately, it is closed source and has not been updated in over a year, with a few unsolved quirks. cLK may prove to be the more sustainable choice in the future, but for now, most people use MAGLDR.

#### Features

* The most common bootloader
* Ability to Boot Windows Phone 7 or Android from a SD Card
* USB flasher mode
* Connection Type = RMNET
* The Only Bootloader with Built-in Tetris

#### Issues

* Cannot charge the battery when using MAGLDR
* However, MAGLDR can boot when plugged in. Once you boot into an actual operating system, the battery will charge.
* Closed source: the community cannot assist in maintaining it
* Starting to feel the effects of code rot

#### Installing MAGLDR 1.13

1. Open the **HD2 Toolkit** previously downloaded.

1. Make sure that your phone's battery is more than 50% charged! MAGLDR cannot charge the battery, only the operating system is able to.

1. Power off phone.

1. Press and hold *volume down + end* until the HSPL (multi-colored) screen appears. Make sure that it says `CotullaHSPL`.

1. Plug in your USB cord to your phone. At the bottom of your Phone it should say `SERIAL` until your USB is connected. Once USB is connected it should say `USB` at the bottom.

1. The bottom of your phone will change from saying `Serial to USB`

1. Click on the bottom right hand button that says `Install Magldr`

1. Install by following on screen directions. (press end key)

1. Remove battery

1. Replace battery and power on the phone.

1. MAGLDR is now installed! 

1. You now need to install Android or Windows Phone 7 to your phone, it does not have an OS at the moment.

### cLK

cLK is a hot new bootloader that is fully open-sourced, still updated to this day, and professes to make the HD2 as close to a normal Android device as possible, with HBOOT and fastboot support. It's a better choice if you only plan to use Android ROMs.

Unfortunately, as such, it is currently unable to run Windows Phone 7 ROMs, and has no RMNET support. However, it will be good to watch it's progress, since is the most promising bootloader available for the HD2.

#### Features

* Off-Mode Charging
* Ability to resize partitions without a computer
* Connection Type = PPP, no RMNET
* Better ROM manager support
* Faster bootup
* Works better in general
* Never seen after install unless needed
* Built-In Flashlight
* Clk 1.5 = No need for Usb
* Open-source and still in development
* Many more features as time goes on!

#### Installing cLK 1.5

1. Download the latest cLK from [this thread.](http://forum.xda-developers.com/showthread.php?t=1114053)

2. Unzip file to someplace convenient.

3. Open HD2 Toolkit.

4. Shutdown phone.

5. Press volume down + end key and hold until tri-colored screen appears.

6. Format with **Wipe (Task 29)** using the HD2 toolkit. The phone will no longer have an OS of any kind, so get to the tri-colored screen again.

7. On bottom left of HD2 toolkit theirs an option to **Install Custom RUU**, click **Browse**.

8. Navigate to the place you previously unzipped `leoimg.nbh` and select that file.

9. Click **Install RUU**. 

10. You're done, now install some new OSes! Jump to the [[next section.|HTC HD2#Installing Operating Systems with cLK]]

#### Installing CLK 1.5 Without USB

> **Note: This method is dangerous, you should only use this method if your USB port is broken.**

1. Format SD card.

2. Download **cLK v 1.5** (The attached `LEOIMG.zip` file)

3. Extract this file somewhere convenitent

4. Put `leoimg.nbh` (from the `LEOIMG.zip` file) onto root of SD card.

5. Power off phone.

6. Press *volume down + end* .

7. Install by following on screen directions. (press end key)

8. Remove the battery.

9. Replace battery and power on the phone.

10. Power up phone, and you will have cLK.

## Installing Operating Systems with MAGLDR

After you've installed MAGLDR, the stock Windows Mobile 6.5 OS will be completely erased (not that it will really be missed). However, you are left without an OS, so choose between some of the below.

Before choosing on Android or WP7, note that you can actually have both at once! See the section **Dual-Booting Android and WP7**.

### Dual-Booting Android and WP7

There's a dirty little secret with dual booting that is rarely explained well. The reality is that WP7 uses an uniquely esoteric file storage scheme rather than using FAT like everyone else, so you can't share the same data partition between Android and WP7. 

However, you can still dual boot Android and WP7; you just need to have two card (recommended) or one card divided between the two systems.

#### Method 1: Two-SDCards

The simplest and most efficient way is probably to have two SDCards, one for WP7 and one for Android. There is the issue of having to carry around the second SDCard, but it's easier than having to divide the partition between the two.

1. Find two SDCards, and decide which one to dedicate to which system. (for example, I use Android more than Windows, so I gave WP7 the smaller card)

2. Now take the card meant for WP7 and plug it into the phone. Remember, this SDCard will be completely erased in the process, so back up any files on it.

3. Install WP7 as stated in the section, **Windows Phone 7 (NAND Only)**. If you've already done so, that SDCard will be stuck to that system unless you reformat it, reinstall WP7, or divide it between Android and Windows in **Method 2**.

4. Now use the method in the section **Android (NativeSD)** using the other SDCard.

5. (Optional) Currently, MAGLDR will be set to automatically boot WP7 first. Since WP7 will not work without it's sdcard, it's a good idea to set MAGLDR to allow you to choose at boot. Get to the MAGLDR menu, go to **10. Services** and into **1. Boot Settings**. Select the **2. AlwaysMenu** option and your phone will always go straight to MAGLDR and give you the choice.

6. Now, when you want to run WP7, insert WP7's SDCard and boot to `WP7`. When you want to run Android, insert Android's SDCard and boot to `Android SD`.

7. Your HD2 is now set up for dual boot! Now go to the section **Using your new and shiny HD2** to see what to do after install.

#### Method 2: One SDcard

> Note: You should only use this if you can only afford one SDCard, or *really* don't feel like switching them out. This is more difficult and gives fewer benefits, and can make your HD2 a bitch to use when you want Android with the new NativeSD method or when it's time to update WP7.

Notice that even with PDAImateJam's ROM, your SDCard will have been reformatted and you will only have a paltry 200MB of space available on it. The rest is some crazy "unformatted" filesystem. 

However, this "unformatted" part is where WP7 stores it's data, which is a big problem if you want to use Android or something else. To rectify this issue, you will need to split the SDCard between the two.

[Link to guide on XDA](http://forum.xda-developers.com/showthread.php?t=945565)

### Windows Phone 7 (NAND Only)

Windows Phone 7 ROMS can only be installed to phone memory (NAND). You can dual-boot Android from the SDCard, however. See the below guides for more info.

If Android is currently installed to the NAND, or if any errors occur when flashing, erase the NAND with Task29 using the [HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783).

The instructions here are for installing Pdaimatejam's ROMs, the better pick in my opinion. Note the conditions for each step.

#### Step 0: Format the SDCard

Notice that during WP7 flashing, all files on the SDCard will be deleted (though you can put them back). Backup all files before proceeding. 

#### Step 1: (If WP7 never or not installed on phone)

If this is your first time or Android is installed to phone memory, follow this step.

1. Erase the NAND with Task29 using the HD2 Toolkit.
1. Insert the FAT32 formatted microSD card in your phone

For some ROMs, you might want to do the following to make them work. Check your specific WP7 ROM's instructions for more information.

1. (optional) Flash a new radio if you need to, or use radio upgrade during ROM flashing (put radio file `part00.bin` in `data.zip` file before ROM flash)
1. (optional) If you use a bigger ROM, you might want to squeeze out every byte you can. After booting to MAGLDR, select **10. Services**. Select **4. UseLast24NAND**.
1. (optional) Select **10. Services** again in MAGLDR and choose **5. ClearSD MBR**. This deletes the partition table on your sdcard (which WP7 will format anyway).

Now proceed to step 2.

#### (optional) If Yuki(BTTF) ROM is already installed

This step only applies if you have installed a Yuki(BTTF) edition of WP7 in the past, or any other WP7 system that locks the SDCard.

On some WP7 ROMs, your sdcard will be locked down to WP7 on it's first boot. Not only are they locked to the ROM, but reformatting them to unlock the card is pretty difficult. You're going to need to unlock it for use in Pdaimatejam's ROM, or pretty much anywhere else. [This link](http://forum.xda-developers.com/showthread.php?t=1242071) has more information on this issue.

Some WP7 ROMs like Pdaimatejam's have managed to hack this problem away, but Yuki(BTTF) ROMs retain the issue.

To retake control deploy a [special CAB to unlock the card](http://forum.xda-developers.com/showpost.php?p=17288471&postcount=2650). Alternatively, you can use [Killdisk](http://forum.xda-developers.com/showthread.php?t=1280293) on the [Ultimate Boot CD](http://www.ultimatebootcd.com/).

#### Step 2: Flashing a WP7 ROM

1. When you turn on phone press and hold power button to boot direct to MAGLDR:
1. Go to **5. USB Flasher** and run `DWI.exe` to flash ROM
1. After flashing process done, and when show Main screen with Tiles, do hard reset (Settings - About - reset my phone)
1. Run **Connection Setup**, with OK complete configuration and soft reset (restart) phone
1. You are done.

### Android (NAND)

Android can also be installed to phone memory, but because WP7 cannot run from the SDCard, you need to have Android installed to the SDCard to dual-boot.

#### Installing a Recovery Image

If you are installing Android ROMs, you also need to install a recovery image. This thing allows users to flash new ROMs or other mods from zip files, a method that most Android users are accustomed to.

ClockworkMod is the most famous of these.

(needs fleshing out)

* forum post: http://forum.xda-developers.com/showthread.php?t=898913
* linx: http://forum.xda-developers.com/showpost.php?p=29167786&postcount=1383
#### Installing a ROM with ClockworkMod

(use a template for this?)

### Android (NativeSD)

[NativeSD](http://forum.xda-developers.com/showthread.php?t=1869673) is an exciting new project that fully utilizes the greater space and faster speeds of the microSD cards. Rather than using a chroot image on dated FAT, you will need create a purpose-built ext4 partition on the card.

More info can be found in the link, the project is a bit dynamic and we don't want to end up with outdated info. (Actually, we do want to clear up a method. Will write stuff here soon...)

### Android (SDCard)

This is the older method for getting Android on SDCards. It's as simple as moving folders and images, but the result is a bit slower than the new NativeSD method.

1. Extract the downloaded zip file and place the folder on the SDCard.
2. Set MAGLDR to use this folder (method?)

### Linux (SDCard)

Running full-blown Linux works similarly to the old Android SDCard method; you just copy a folder to the card and set MAGLDR to use that directory.

1. Extract the downloaded zip file and place the folder on the SDCard.
2. Set MAGLDR to use this folder (method?)

## Installing Operating Systems with cLK

### Install Generic Google ADB Drivers

In order to install a recovery, you will need to install the drivers to interface with cLK.

* [Uploaded.to - Google ADB Drivers](http://uploaded.net/file/ypksx8zb)

After that, power on phone and it should boot into cLK.  When Windows prompts you to install drivers, select the folder where you extracted them.

Power on phone and it should boot into cLK. Plug up to computer then do this from the start menu:

    Start>Control Panel>Hardware & Sound>Device Manager

An 'unknown device' should be shown. Right click it and select **Update driver software**.

When menu pops up select **Browse My Computer**.

Select the folder of drivers you previously downloaded, click **Next**, and the drivers will be installed.

### Flashing ClockworkMod Recovery

1. Open HD2 Toolkit. Make sure your HD2 is plugged in.

2. Select **cLK Install Recovery**.

3. Under **Functions**, click **Install**.

4. A dialog box will pop up. Press **Yes**, since Android has not yet been installed.

5. A Command Prompt will pop up. Follow the directions to flash (press **Enter** twice).

6. Once the flash is complete, press **Enter** to return to the HD2 Toolkit.

7. The device will reboot twice, taking you back to cLK.

### Flashing ROMs with ClockworkMod

## Full Restore to Stock WM6.5

If for any reason you need to go back to stock (like for servicing), just follow these steps. Note that you will have to install everything back again, just like a new HD2.

Download an [official Windows Mobile Rom from here](http://forum.xda-developers.com/showthread.php?t=577717). The newest ROM edition is `2.13`, so look for the `Leo 2.13` folder and find your model. *Double check that you have the right ROM for the right model.*

1. Back up your sd card and format it.

2. Extract the file `leoimg.nbh` from the official rom you previously downloaded.(This can be done with a program like 7zip)

3. Copy `leoimg.nbh` onto the root of your sd card. Only copy this file-- No OTHERS!

4. Press and hold *volume down + end* keys

5. Follow the onscreen steps. These steps will install Windows Mobile 6.5

6. Reboot your phone. Your phone wil boot into Windows Mobile 6.5 and HSPL is uninstalled. 

## Using your new and shiny HD2

Now that all is right with your phone, it's time to actually use it. Here are a few tips to make your experience better.

### Accessories

What is a smartphone without overpriced accessories? Some of them are quite useful though, so take a look.

#### Extra Batteries and External Battery Charger

Smartphones drain battery life with in the matter of a few days at best, so getting an extra battery pack and an external charger will allow you to just switch them out when it's time is up.

OEM HTC HD2 batteries are actually pretty cheap, around $10 or so on Amazon.

#### Cases 

I, for one, hate those plastic phone covers. But you can't doubt their effectiveness in keeping scratches, dings, and cracks away from your treasured HD2. Silicon cases are pretty good for the money, but they get cracks themselves and collect dust. For hard cases, take the trouble to find a high quality one.

The slip cover that HTC provides out of the box is pretty nice. However, it can suck to have to take your phone out all the time, so they sell another leather flip case that is pretty good if you can find it. Otterbox is the best for hard cases.

#### Screen Protectors

I don't like screen protectors at all, and the HD2's Gorilla Glass does a pretty good job of resisting pretty much anything other than sand. Still, if you're one to put your keys with your phone, it's a good idea to use protection.

### Android

#### NativeSD ROM Switcher

One great be

### WP7

The Windows Phone development community on XDA is strikingly different from that of Android. It is reminiscent of an older time, when XDA Developers actually worked on HTC's O2 XDA phones. As such, most modifications run quite deep, are more developer-centered, and are unique to each custom ROM.

#### Using your WP7 device as USB Mass Storage

[XDA-Developers - Use Your Windows Phone 7 HD2 As A Portable USB Drive](http://forum.xda-developers.com/showthread.php?t=915664)

#### Activating your phone with Windows Live

Note that because the HTC HD2 is not an officially approved device from Microsoft, it will ask you for an activation key if you want to use Live Services on the phone. This means that Windows Marketplace will not allow you to download apps until your phone has been activated.

Obviously, there is no real alternative to the Windows Marketplace at the moment (though Pdaimatejam's ROM can install apps directly from `.xap`), so you will have to somehow activate it. The way most people have been doing it for 2 years without issue to call up Microsoft, ask them for a key (saying their phone is an **HD7**, not an HD2), and then using the code. You might need a US cell phone number in some cases.

* [XDA-Developers - Activating Windows Live via Microsoft Chat Assisted Support](http://forum.xda-developers.com/showthread.php?t=1911246)
* [XDA-Developers - HowTo actvate your wp7/HD2 Live services.](http://forum.xda-developers.com/showthread.php?t=911579)

If you're not able to get a code for any reason, put your request in the forum and hopefully someone will hail your distress.

* [XDA-Developers - WP7 activation code sharing](http://forum.xda-developers.com/showthread.php?t=1532197)

Once you've activated, note that your WP7 ROM needs to have internally named itself an HTC HD7 (Schubert) in order to work at all. Most roms already do this for you, so read up.

#### CAB Sending

**NOTICE:** This option can be use only with Pdaimatejam ROM v7 or newer
You can do this in two ways: with CAB Sender or with wXYUpdater
- With CAB Sender, download tool first, unrar (decompress).
- From folder “if needed install this tool” depends to your system, run and
install Setup-UpdateWP-x86.exe or Setup-UpdateWP-x64.exe
- download desired CAB files and copy it to folder where you unrar WP7 Update Cab Sender
There must be file “WP7 Update Cab Sender.bat”
- Zune must be closed
- Run “WP7 Update Cab Sender.bat” and with key “S” start sending process

#### Backup Application Settings and Game Saves

It is advantageous to make backups in case new ROMs are released or problems occur.

The first method simply saves settings and data, so it will be useful when migrating to a new ROM.

1. Before flashing new ROM, you can save desired applications settings and game saves.
1. You can’t backup complete app or game, only settings and saves.
1. Download [**Windows Phone Device Manager (WPDM) v1.10.0.0**](http://www.touchxperience.com/en/applications/summary/22/33.html), install, run and sync with your phone
1. Go to **Manage applications**, wait to scan for installed apps be done
1. Select desired apps or game which you want backup, right click an select Backup.
1. To restore backup, install fresh app or game to device, run **WPDM** and sync your phone, then run backup file on your PC.

Another method, introduced in WPDM v.10.0.0, is to make a Complete Zune Backup. This will allow you to restore an older system with all it's data if you don't like the new ROM.

1. In the main screen of **WPDM**, select from drop menu **Backup/Restore phone**
* WARNING: if you flashed new ROM, restoring backup will restore older system in time of backup. If you don’t want this, use simple backup of applications and games as described before.

### Linux

## Troubleshooting

### My HD2 won't turn on with battery power! (but the battery is fully charged...)

Before throwing it in the bin, check that the pin connections actually touch the battery. The HD2 has the unfortunate flaw of having a pin stick out from time to time, so just push it back in and you're ready to go.

### My HD2 won't charge! (just installed MAGLDR)

If MAGLDR was just installed, note that it cannot charge the battery.when fully powered off; your HD2 will only charge once it has booted into an operating system. That's why it is imperative to have your battery more than 50% charged when first installing MAGLDR.

Your phone is not dead yet, though. Just buy a cheap external battery charger and your HD2 will work again. It's also advantageous to have two or more batteries so that you can just switch them out and lose the downtime of having to plug in your phone.

### My music keeps skipping/pausing when plugged into headphones!

In most cases, your headphones are being wrongly recognized as a headset, confusing the music player into interpreting signals from a nonexistent play/pause/skip button. 

The solution is to disable headset commands from your music player app. If it cannot be disabled or there are problems elsewhere, the simplest solution is to actually use headphones with 3 ring jacks or buttons (like iPod earphones). 

If you want to use your normal headphones, you need to get a "audio input/output splitter", which will redirect the headset band to nothing, and also allow you to use conventional microphones with the HD2. This is nice to get, especially now that new laptops are using the same 3 ring jack.

## Sources

Nearly all the information in this guide comes from these sources. I just rewrote and updated some of it. Kudos to all the developers who made these guides, and those who made the HD2 what it is; we couldn't have done it without you.

### SIM Unlocking

* [XDA-Developers - Unlock TMOUS HTC HD2](http://forum.xda-developers.com/showthread.php?t=634908)
* [XDA-Developers - Can i unlock HTC HD2?](http://forum.xda-developers.com/showthread.php?t=1670028)
* [XDA-Developers - Unlocking the HD2](http://forum.xda-developers.com/showthread.php?t=1579731)

### HSPL, MAGLDR, CWM Guides

* [XDA-Developers - Flashing your first HD2 ClockworkMod Android ROM](http://forum.xda-developers.com/showthread.php?t=1044830)
* [kylew1232's HD2 Guide](http://tech.memoryx2.com/)
* [XDA-Developers - What is HSPL, MAGLDR, cLK, and CWM?](http://forum.xda-developers.com/showthread.php?t=1021837)
* [XDA-Developers - Install cLK, cLK 1.5, CWM and a NAND rom](http://forum.xda-developers.com/showthread.php?t=1402975)
* [PDAImateJam ROM Install Tutorial](http://forum.xda-developers.com/attachment.php?attachmentid=954899&d=1332181049)
* [PDAImateJam ROM Install Video](http://youtu.be/jhuR59UXw_4)
* [XDA-Developers - Installing Google Android Drivers in Windows](http://forum.xda-developers.com/showpost.php?p=21071699&postcount=73)

### Dual-Boot WP7 and Android

* [Dual-Boot WP7 and Android](http://forum.xda-developers.com/showthread.php?t=945565)
* [XDA-Developers - Paritioning SDCard for WP7 and Android](http://forum.xda-developers.com/showthread.php?t=913815)
* [XDA-Developers - gencaslan's guide to partitioning WP7 and Android](http://forum.xda-developers.com/showpost.php?p=10643011&postcount=64)
* [XDA-Developers - Dual Boot Windows Phone 7 & Android](http://forum.xda-developers.com/showthread.php?t=944288)

### WP7 Tips

* [XDA-Developers - Activating Windows Live via Microsoft Chat Assisted Support](http://forum.xda-developers.com/showthread.php?t=1911246)
* [Mobility Minded - How to Use Your Windows Phone 7 Device as a Portable USB Drive](http://www.mobilityminded.com/10959/how-to-use-your-windows-phone-7-device-as-a-portable-usb-drive)

### Programs

* [XDA-Developers - HD2 Toolkit](http://forum.xda-developers.com/showthread.php?t=1090783)

### Other Files