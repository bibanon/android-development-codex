PRO custom firmware grants users these additional features:

* '''ISO/CSO Game Playback/Dump''' - UMDs are notoriously unreliable, so move them to digital format before your game collection is gone for good.
* '''Runs Legacy Homebrew''' - Custom firmware allows older, unsigned PSP homebrew to run. Otherwise, the PSP will claim that the homebrew is "corrupted".
* '''Plugin Mode''' - Extend the abilities of your PSP with PRX Plugins.
* '''PSone Emulator Unlock''' - Now you can use Sony's secret PSone emulator. Though it's never been perfect.
* And much, much more...

This guide only works for OFW 6.60 and below. Avoid OFW 6.61, if it even exists. Since Sony considers the PSP dead and have not updated past 6.60 in 3 years, this guide will probably work for all known PSP firmwares and motherboard versions.

==Preperation==

# First, identify your PSP motherboard in the [[PSP/Models]] guide.
# Next, find out which exploit is right for you, and go to the related page.

==Methods==

===LCFW===

===6.20 Permapatch===

===Chronoswitch===

===cIPL===

* PSP 1000 Fat: (All motherboards) '''TA-079v1''', '''TA-079v2''', '''TA-079v3''', '''TA-081''', '''TA-082''', '''TA-086'''
* PSP 2000 Slim: (Everything except TA-088v3): '''TA-085v1''', '''TA-085v2''', '''TA-088v1''', '''TA-088v2''', '''TA-090v1'''

===Glossary===

* OFW - Official Firmware. Not modded in any way.
* CFW - Custom Firmware. Modded OFW with special features.
* Signing - Homebrew built to work on any PSP firmware by adding Sony's Root Signing keys to them.

==LCFW==

LCFW is a temporary CFW exploit that gives you all the features of a permanent CFW, but is lost whenever the PSP runs out of power. It only takes three seconds to reinstall it, though.

LCFW is the safest method of installing CFW since it works on every PSP motherboard and will never result in a brick.

{{:PSP/LCFW Motherboards}}

===Official Firmware is 6.60===

{{:PSP/Install 6.60 PRO}}
{{:PSP/Temporary CFW}}

===Official Firmware below 6.60===

{{:PSP/Install OFW 6.60}}
{{:PSP/Install 6.60 PRO}}
{{:PSP/Temporary CFW}}



==6.20 Permapatch==

{{Note|This method is only for people who absolutely cannot wait three seconds to recover CFW when the PSP runs out of power. Otherwise, we strongly recommend using [[LCFW]], an easier method where there is no risk of bricking your PSP!}}

On the 6.20 firmware, there is a unique exploit that allows permapatching on some newer PSPs.

Don't worry about issues with using an older version; the features have mostly been backported, and 6.20 PRO-C2 uses a convenient exploit to run 6.60 ISOs.

{{:PSP/6.20 Permapatch Motherboards}}

===Official Firmware 6.20 or Above===

{{:PSP/Downgrade to OFW 6.20}}
{{:PSP/Install 6.20 PRO}}

===Official Firmware 6.20===

{{:PSP/Install 6.20 PRO}}

===Below Official Firmware 6.20===

{{:PSP/Install 6.20 OFW}}
{{:PSP/Install 6.20 PRO}}


== Chronoswitch 6.20 Permapatch ==

{{:PSP/Chronoswitch Motherboards}}

===TA-095v1 (09g) and TA-095v2 (09g)===

# Check your FuseCFG using PSPIdent.
# If your FuseCFG: 0x00002A00, you can downgrade you PSP by Davee’s Chronoswitch Downgrader v5.0f.
# If your FuseCFG 0×00003300, 0x00003B00 or other, download [http://psdev.ru/?attachment_id=246 pre-downgrader-fix], install and press X.
# After using PRE-Downgrader, you can use [http://lolhax.org/davee/psp/chronoswitch/version_5f.rar Davee’s Chronoswitch Downgrader v5.0f] for downgrade.

===Upgrading past 6.20===

Once you've installed 6.20 using Chronoswitch, you will need to [http://dl.qj.net/psp/homebrew-applications/psp-3000-ta-095-9g-upgrader-for-620.html use a special app] to update to 6.35 or 6.60 if you so choose.

* Note: There have been unconfirmed reports that TA-095v2 (09g) is unable to downgrade back to 6.20 after upgrading, so choose well.

# Get the official 6.3x or 6.60 official firmwares.
# Copy the EBOOT.PBP file to '''/PSP/GAME/UPDATE/'''.
# Download [http://dl.qj.net/psp/homebrew-applications/psp-3000-ta-095-9g-upgrader-for-620.html Frostgaters' Physical Upgrader] and extract it.
# Copy the downgrader to /PSP/GAME/Upgrader/.
# Run the downgrader from the PSP.
# Your PSP will reboot into your chosen official firmware.

==cIPL==

{{:PSP/cIPL Motherboards}}

===Official Firmware is 6.60===

{{:PSP/Install 6.60 PRO}}
{{:PSP/cIPL Flash 6.60 PRO}}

===Official Firmware below 6.60 or using CFW M33/Dark AleX===

{{:PSP/Install OFW 6.60}}
{{:PSP/Install 6.60 PRO}}
{{:PSP/cIPL Flash 6.60 PRO}}

===Custom Firmware 5.50 GEN or 5.50 Prometheus 4===

{{:PSP/Remove GEN Version Protect}}
{{:PSP/Install OFW 6.60}}
{{:PSP/Install 6.60 PRO}}
{{:PSP/cIPL Flash 6.60 PRO}}

== Templates ==

To reduce redundancy, we've placed all the instructions from above into templates, that can be edited below.

* [[PSP/Remove GEN Version Protect]]
* [[PSP/Install OFW 6.60]]
* [[PSP/Install 6.60 PRO]]
* [[PSP/cIPL Flash 6.60 PRO]]
* [[PSP/Temporary CFW]]

* [[PSP/Downgrade to OFW 6.20]]
* [[PSP/Install 6.20 PRO]]

* [[PSP/cIPL Motherboards]]
* [[PSP/Chronoswitch Motherboards]]
* [[PSP/6.20 Permapatch Motherboards]]
* [[PSP/LCFW Motherboards]]

==Sources==

* [http://forums.dashhacks.com/psp-tutorials-guides/306417-hacking-psp-mega-thread-never-outdated.html Dashhacks - Hacking PSP Mega Thread: Never Outdated]
* [http://forums.dashhacks.com/psp-tutorials-guides/295996-5-03-gen-mhu-ofw-6-20-pro-b-9-permanent.html Dashhacks - 5.03 GEN/MHU 6.20 PRO-B9 Permapatch]

