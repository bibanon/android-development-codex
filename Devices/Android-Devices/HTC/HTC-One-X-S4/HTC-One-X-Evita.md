{{Note|This guide is for the dual-core HTC One X Evita, sold only in North America. If your One X comes from outside Canada and the US, use [[the international guides.|HTC One X]]}}

This variant is sold by AT&T and Rogers, and was codenamed HTC Evita. It is also called the Telstra One XL. 

This variant is perhaps one of the more difficult roots, due to the hoops that you'll have to jump through as a result of carrier shenanigans. There are a few toolkits to helpcan be unlocked with  you on your way, though.

## Specs

* CPU: Qualcomm Snapdragon S4 Dual-Core
* Short Name: Evita, OneXS4

## AT&T Root/Unlock/Recovery

Follow these guides in order if you have an AT&T HTC One X.

{{Warning|The current unlock method (for 2.20) uses HTCDev, **which permanently wipes all data and voids your warranty.** There is no known method of reliably backing up app data, since TitaniumBackup requires root privileges to work and the undocumented 4.0 backup is broken on HTC Sense.}}

* [[Evita Unlock]] - AT&T's carrier shenanigans mean that every update attempts to patch over the root method. As a result, root methods differ from version to version.
* [[Evita Recovery]] - TWRP is strongly recommended, as CWM is not officially supported. DON'T USE ROM MANAGER. It may brick your device, because it uses the international HTC One X CWM.
* [[Evita Custom ROMs]] - Since the HTC One X Evita does not have a safe method of gaining S-OFF, you will have to flash `boot.img` every time you want to install a new ROM.

* [[Evita S-OFF]] - The Rumrunner exploit gives us S-OFF on the latest OTAs.
  * When HTCDev unlock is used, the phone remains S-ON, which prevents recoveries from writing to the boot partition. This requires an inconvenient kernel reflash from a computer whenever a new custom ROM is installed.

### Rogers Root/Unlock/Recovery

(Needs work, and I don't have a Rogers version)

* [[Evita Unlock]] - The Rogers One X is an official HTCDev device. You can spoof the AT&T One X into unlocking using SuperCID.]

### Miscellaneous

* [[ADB Backup]] *Doesn't work* - A secret `adb` backup feature was added to Android 4.0 ICS that allows entire apps and their data to be backed up without root privileges. However, it's broken for some reason on HTC Sense, (takes forever and creates a massive file) so don't use it on the Evita.

## Sources

* [XDA-Developers - Resource Compilation Roll-Up](http://forum.xda-developers.com/showthread.php?t=1671237)

## Issues

1. [[Evita Unlock]] - Import guide for [Hansoon2000's HOX Evita Toolkit (Windows)](http://forum.xda-developers.com/showthread.php?t=1952426)
2. [[Evita Custom ROMs]] - Boot.img automatic flasher needs link
3. [[Evita Unlock]] - Add Rogers and Telstra method
4. General - Maybe try and add old root methods if time allows
5. [[Evita Recovery]] - Add guide for ClockworkMod