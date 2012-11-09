Now that all is right with your phone, it's time to actually use it. Here are a few tips to make your experience better.

### Android

#### NativeSD ROM Switcher

An app that allows you to switch between ROMs on your Android Partition when using NativeSD.

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
