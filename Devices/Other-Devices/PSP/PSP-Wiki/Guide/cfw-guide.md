# THE ULTIMATE PSP GUIDE  

All the steps which I have mentioned in this guide are
only for Pandora-compatible PSP 1k or PSP 2k (with mobo below TA-088v3) and not to be tried on any other PSP.

However Section 6 is dedicated for UNHACKABLES. So those who have
them please visit this section.  


## INDEX  

1. Glossary  
2. MMS and Pandora battery  
3. Unbrick your PSP  
4. Downgrade your PSP  
5. Time Machine  
6. Update your PSP  
7. Hellcats Recovery Flasher  
8. CFW for unhackables  
9. FAQ + Cool Stuff

## Section 1: GLOSSARY OF VARIOUS TERMS USED IN MODDING

* Firmware : Firmware is the operating system of the PSP, similar
to what your computer runs (eg. Windows, Mac, etc.). Updates are
released every now and then that may improve functions of the PSP,
add PSX compatibility or it may be an attempt by Sony to fix
exploits.  

* CFW : Custom Firmware. Allows the PSP to perform extra functions.
It lets you run homebrew (unsigned code) and PSX/UMD backups from
the memory stick.  

* OFW : Official Firmware released by sony.  

* Kernel (1.50/3.XX/4.XX/6.XX) : The kernel is sort of like the
firmware and what it runs on. Think of it as Windows XP running on
NT kernel. (Look it up at To view the link you have to Register if
you're confused. Some hombrew is dependant on the kernel.  

* DCv3/4/5/6/7/8 - : DC or Des Cem means Despertar del Cementerio
and is the software created by Dark  ~AleX that allows PSPs to be
downgraded or unbricked.  

* Magic Memory Stick. Simply a memory stick formatted with DC
software to allow service mode on PSP. Usually a PRO Duo
256mb-4gb.  

* Service Mode : This menu accessed with MMS/Pandora allows you to
install CFW/OFW or unbrick the PSP.  

* Pandora battery/Jig-kick battery. Allows the PSP to boot into
service mode when an MMS is inserted.  

* Time Machine : Released by Dark  ~AleX, it allows your PSP to run
custom firmwares from the memory stick and run previous versions
(eg 1.50). Pandora is required for this. Runs on custom IPL so it
would work even if the flash and NAND IPL is destroyed.  

* Fatmsmod : A hack that allows the PSP to access the memory stick
faster.  

* ISO/CSO/DAX/etc..  
These are types of UMD images. ISO is the usual uncompressed
image of a UMD game or movie. Many other types can be created from
this such as CSO, the compressed version. These can be played from
the memory stick with CFW.  

* POPS  
The PSX emulation on the PSP. CFW lets you play your own PSX
games with the "popsloader".  

* EBOOT  
Applications and games designed for the PSP (even PSX games) will
be an EBOOT. The file extension is ".PBP" - equivalent to ".EXE"
for the PC.  

* PRX Plugin  
An addon for the PSP with CFW to unlock more features. For
example, the plugin Hold+ allows the PSP to be underclocked with
the screen/backlight off while playing music.  

* NAND  
The NAND is made up of three things. IPL , idStorage and the
internal flash (flash0/1/2/3). When you make a NAND dump, you are
backing up these things. If you brick badly, you can restore the
NAND and the PSP will return to the state it was in when you
backed up.  

* IPL  
Initial Program Load. The start up process of the PSP. Decrypts
and loads the firmware.  
Similar to how a PC starts up.  

* idStorage  
The idStorage is what gives your PSP the MAC address, region
code, etc.. What makes the PSP work.  

* lflash  
The internal flash. Made up of flash0, flash1, flash2 and
flash3.  

* flash0 contains the operating firmware of the PSP  

* flash1 contains the registry and all user settings  

* flash2 contains DRM information that allow games purchased from
the Playstation store to function  

* flash3 contains the 1seg TV program (only used in Japan
currently)  

## Section 2. Magic MS AND PANDORA  

Magic Memory Stick:- It is Simply a memory stick formatted with
DC software to allow service mode on PSP 1k or fully hackable
2k.It is Usually a PRO Duo 256mb-4gb.  

### Creation of Magic MS  

What you require?  

* A memory stick of good brand(Sony or Sandisk will do) of size
256mb - 4gb. I would prefer to reserve a memory stick of 512 mb
only for mms  
* A computer or PSP

Although there are many ways to create a mms , i shall cover only
2 ways. One is by using Rains mms maker and other is by using PSP
Tool  

#### Rain's mms maker  

1. Download the Rains UltraLite MMS maker from here [Rains
UltraLite MMS Maker for 5.00 M33-4, PSP Hacks - PSP Slim
Hacks](http://pspslimhacks.com/rains-ultralite-mms-maker-for-500-m33-4/)  
2. download the 5.00 pbp file from here [500.PBP - 4shared.com -
online file sharing and storage -
download](http://www.4shared.com/file/67607452/8dcc536d/500.html)  

Place the official firmware update file named EBOOT.PBP or
500.PBP in the same folder as the program OR you will be asked for
its location during make MMS.  

3. Run the application and connect your psp or memory stick to the
computer  
Choose the option to format memory stick  
4. Select the drive letter of your psp memory stick  
5. Finally select option to MAKE MMS  

if you are getting errors in this step, you probably have to get
a new card  

#### PSP Tool

1. download PSP Tool from here [PSP Tool v1.00 - Homebrew
Applications - PSP - QuickJump
Downloads](http://dl.qj.net/psp/homebrew-applications/psp-tool-v100.html)  
2. download the 5.00 pbp file from here [500.PBP - 4shared.com -
online file sharing and storage -
download](http://www.4shared.com/file/67607452/8dcc536d/500.html)  
3. copy the 5.00 pbp file to the root of memory stick and the PSP
Tool app goes into the GAME folder on your ms  
4. Run the app, under Memory stick options choose to create Magic
Memory stick and then choose the option to install DC v8  
5. after completion of mms creation, when the option comes to turn
battery into pandora, choose no  
6. then it will ask you to hold key to activate mms with pandora  
6. Hold down L trigger till it says completed  
7. Your mms is now ready  

in both the above cases your mms is made to flash install 5.00
m33.  

You can also make your mms to install other cfw like 5.50 GEN D
or 6.60 ME using DCv8  

To flash install 5.50 GEN D3  

1. download the GEN D3 installer from here
[http://www.mediafire.com/?zzhcmknzznt5ngj](http://www.mediafire.com/?zzhcmknzznt5ngj)  
2. place the UPDATE folder into the GAME folder and the 5.50 pbp
into the root of the ms  
3. run the installer  
4. choose the option "Install XGEN PANDORA V5"  
5. your mms will now flash install 5.50 GEN D3 instead of 5.00
m33  

To flash install 6.39 ME from mms  

1. download the 6.39 ofw and 6.39 ME v2 installer from here [PSP
Custom Firmware 6.39 ME v2 Released   *Updated  * | PSP-Hacks: Hack
your PlayStation Portable](http://psp.dashhacks.com/node/10054)  
2. Download the OFW 6.39 update, extract and rename EBOOT.PBP to
639.PBP.Copy 639.PBP to PSP/GAME/UPDATE on your memory
stick.Download and extract the CFW 6.39 ME v1 package.Copy
UPDATE/EBOOT.PBP to PSP/GAME/UPDATE  
3. insert mms, hold L trigger , insert pandora and choose to "TEST
m33"  
4. your psp will reboot and now emulate 5.00 m33  
5. Go to GAME in XMB and now run 6.39 ME updater   

this method works even on a bricked psp.  

To flash install 6.60 ME from mms  

1. download the 6.60 MEv1 bundle from here [6.60ME v1 Bundle -
Downloads - Sony PSP MODS and Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=file&id=208)  
2. as in the above steps choose to emulate m33 and run the 6.60 ME
updater   

How to autoboot your memory stick using a Pandora Battery  

here's what it means. You have a pandora battery and as you know
only if you insert a mms or a memory stick with an ipl it enters
service mode else it just show blank screen with green light  
now you can use your pandora battery just like a normal battery
to autoboot from memory stick.Great isn't it? so no more swapping
batteries  

1. first download PSP Tool and insert your ms into the psp  
2. go to "memory stick options" click "inject IPL to Memory Stick"
Then Inject z3ros0ul Single IPL (Sleep Fix).  
3. shutdown your psp and remove ms.  
4. insert your pandora battery now.  
5. it will power on with a blank screen   
6. now insert the memory stick with the injected ipl and your psp
should autoboot.  
it also works reverse ie. first insert the ms with ipl and then
the pandora battery.  

First part of this video explains what is said above  


How to repair a corrupt idstorage   

Use this method when you get update errors while upgrading from
old DA firmwares, or issues with WLAN or UMD drives  

1. insert your mms , hold L trigger, insert pb  
2. in the DCv8 menu, choose NAND Operations  
3. In that choose IDStorage tools  
4. select the region of your psp  
5. select the option to get real/random MAC and select yes to
create new idstorage  

REPAIRING IDSTORAGE  




PANDORA BATTERY   

It Allows the PSP to boot into service mode when an MMS is
inserted.  

There are 2 ways to create a Pandora Battery  

1. Hardmodding a Pandora Battery: it involves removing 5th pin or
cutting a strip to make the battery to enter service mode  

Refer here on how to Hardmod a phat or slim battery.  

>
[http://www.pspmod.com/forums/psp-har...-pictures.html](http://www.pspmod.com/forums/psp-hardware-accessories/26181-guide-all-pandora-battery-hardmod-pictures.html)  

IMP: a hardmod phat pandora wont work on slim model psp   

2. Softmodding a Pandora Battery :- Unlike hardmodding, which
requires you to tamper with battery to make it jig-kick,
softmodding a battery involves changing the battery EEPROM serial
to 0xFFFFFFFF which causes the console to boot into service-mode  

There are many ways to softmod a battery into pandora battery ,
however this is supported only by limited psp.  

The psps which can softmod a pb are  
1. All psp phats(1k models)  
2. Psp slim with TA-085v1 motherboard( only this model can softmod
among all 2k)  

Ways to Softmod a Pandora Battery  

1. XMBattery Plugin  

1. download the plugin from here [XMBattery Plugin v0.1 -
Homebrew Applications - PSP - QuickJump
Downloads](http://dl.qj.net/psp/homebrew-applications/xmbattery-plugin-v01.html)  
2. follow instructions in readme and enable the plugin in your
recovery menu and reboot  
3. now under SYSTEM SETTINGS go to BATTERY MODE and now you can
softmod  

IMP: XMBattery is incompatible with 6.39 ME or 6.60 ME. Whenever
i tried anabling the plugin i used to get crashes  

2. Ultimate VSH Menu  

1. download it from here [Ultimate VSH Menu v2.00, PSP Hacks - PSP
Slim Hacks](http://pspslimhacks.com/ultimate-vsh-menu-v200/)  
2. enable it in your recovery menu  
3. you will now have option to Convert battery: pandora, autoboot
or normal  

btw the vsh.txt command must be ms0:/seplugins/vshmenu.prx (no 1
must be there after prx unlike the readme)  

this is pointless for those who have the latest cfw(i'm talking
about ME and 5.50 GEN D) which has options for softmodding built
in recovery menu.  

3. Using your cfw for Softmodding  

1. the option to softmod from cfw is built into the following cfw
versions  
5. 50 GEN D  
6. 39 ME  
6. 60 ME  

1. go to Recovery menu on your psp  
2. under advanced configuration  >battery options , you will see
options to make battery into normal, jig-kick or autoboot.  

To convert a softmod pandora battery back into normal one   
remove battery,connect the psp to AC power , go back to the place
where you made the pandora(eg: in recovery menu) and insert the
battery to be made normal and choose option to convert to NORMAL
BATTERY  

To convert a SLIM PANDORA HARDMODDED BATTERY back to normal  

1. open up the battery  
2. go to the place where you have made the small cut  
3. using a pencil slowly rub the area of the cut with pencil lead  
4. your battery should be normal now.  

Once the pandora battery is done  

1. insert the mms  
2. hold whatever trigger required and insert the pandora battery
to boot into DC menu  

SECTION 3 -UNBRICK YOUR PSP  

1. Unbricking a 1k or a hackable 2k  

1. you will require a memory stick in the range 256 mb - 4 gb and
a pandora battery.  

2. head to the first part of section 2 to create an mms.  

3. once done, get a softmodded/hardmodded pandora battery.  

4. insert the mms, hold L trigger and then insert the pandora
battery.  

5. now set the psp down on some surface so that the battery
doesn't come off, if its loose.  

your psp will now boot into service mode with the DC menu  

6. choose the first option, 'install 5.00 m33-4'  

7. wait for it to be done.  

8. your psp is now unbricked  

NOTE :you can even install 5.00 ofw from the mms.  

this tutorial is applicable if you have modded your ms with DC
v8.(don't worry, if you did what i posted in the first part of
section 2- ignore this)  

UNBRICK UN-HACKABLE 2k (TA-088 v3 mobo)  

Files you Require  

�Extracted Files Original - all of the original image with the
extracted files - essentially a set of service cards.  

�MSID 512MB Original - this dump MSPro ID origialnoy service
card, taken by MSID Dumper  

�Original Dump MS - full service card image format IMG. You can
look through WinHex.  

�Write IPL to MS - utility service record IPL-loader in 16th
sector card. IPL itself is already there: multiloader  _ipl.bin  

MAKING MAGIC SERVICE CARD  

1. Need MS PRO DUO card neoriginal 512 MB , 2 GB or 4 GB.  

2. Original SONY is not suitable, because Nanda has chips and they
do not have specifications (datasheets) and programmers.  

3. Download " MSID Dumper ", insert the memory card into your PSP
and run the program. See on the screen the "Serial Number" and
MSProID your card and write, although the dump area MSID still
remain at the root of the memory card and you can then see the
hex-editor. That you can come in handy when you search the data in
the dump of the chip.  

4. Thin body with a scalpel raspolovinivaem card in half, not
ponostyu, but only the back and slightly more than half the
edges.  

5. Then, using tweezers pull out from the housing fee, it is not
glued, but just lying in the grooves.  

6. From the boards fed to a memory chip (nand), which is the
largest 48 feet. A small square near the memory controller, it can
not touch.  

7. Insert the chip into programming with sockets TSOP-48 for this
chip:  

8. Keep in mind that with the mind maps are the same, but inside
can be different Nanda, such as Hynix or Samsung. Therefore, under
your chip is then searched the programmer. See the list of
supported chips:Hynix, as far as I know, all have the same
standard of conclusions on the datasheet TSOP-48, so if the
letters or numbers differ from the list of supported models, it
does not matter.  

9. Chip is inserted in socket programming is very simple, where
she has designed clothes pegs, push down on the socket, the
contacts move away, put mikruha and socket is released, the
contacts are pressed against the legs of the chip, so that a
newbie is like two fingers on the asphalt.  

10. Further, the programmer is connected to a computer with
pre-installed software that came with the programmer. The program
specifies a range of pages you want to dump and dump of the
memory.  

11. Immediately dumps the entire 2 GB of memory for very long, and
not necessary. I must say that we need a service area where the
registered MS ID card that serves as a key dekriptovki anbrikera
files, is at the end of the chip in the second bank. This area is
located on the chips of 2GB Hynix HY27UH08AG5M or analogs, as It
consists of two banks of memory to 1 GB. Therefore it is necessary
to dump only the last few pages of the 2nd bank. The programmer
himself will tell what page ends with Nanda. You need only specify
the range (and up). In my case this page with MSID is within the
range 07FFC4-07FFC5  

12. Next, open the dump file in a Hex editor, type in the search,
what to look for, namely a piece of hex code MSID:
204D5350534E5930 , that means a literal expression   _MSPSNY0, that
is, it is half the 16-digit key, MSID, which all the cards MS PRO
DUO memory is the same.  

13. If not found, then dump the next few pages from the end, until
we find the desired one. Having learned the address, now we remove
only the following page, where the MSID - this is exactly 512h4 16
x 4 = 2048 64 = 2112 bytes . Chip specification, you can read and
write at least this size, that is, by page, but you can just more
of a multipage.  

14. In changing the hex 16-digit ID of the card on the ID of the
card which was removed set of the original service card. Required
ID code can be found in the folder " MSID 512MB Original "in the
file ID.txt .  
fact that each service is encrypted with a unique set of MSID
that card on which he had written, and accordingly it is decrypted
and the files at work. It's just like you do password-protected
archive WinRAR - What's the password install, uncompress the same
password.  

15. After replacing the ID, do not forget to save the file. Then
sewn back this page dump at the same address from which to dump.  

16. Solder in the chip in place. There needs careful not to
overheat the chip and the solder legs closed, because feet are
small and very close to each other. Control the solder through a
magnifying glass, at a minimum there will need an 8-fold,
professionals in the workshops is done through a microscope.
Although pro soldering with closed eyes, but then you need
experience, a good flux, which itself draws the solder to the
legs, braiding, to shoot the excess solder, etc.  

17. Format a memory card manufactured by the PSP.  

18. From the folder " Write IPL to MS "run"
install  _psp  _ms  _multi  _loader  _ipl.cmd "  

19. Only then do connect PSP to your computer.  

20. In the console can see how determined flash drive and click on
the English " Y "  

21. We see a message " Write MS BOOT CODE "- then everything is
fine. If you get the message " Canceled "- means the wrong letter
pressed or not in the layout.  
If you get the message " Check Free reserved sector: to Small
Sectors reserved "-  

22. Mount a Hex editor stick, like a physical drive and make sure
that the 16th sector, there is known to us IPL.  

23. From the folder " Extracted Files Original "copy the contents
of the stick and go to flash briknutye TA-088v3 =)  

Disclaimer:  

i have not performed this and so i don't know how it's gonna work
or provide you assistance beyond this info.  

this info on creating a service card for ta 88v3 was provided to
me by one of my friends and i just copy pasted it from the link.  

regarding the files required, i have them but it appears they are
stolen property, so i'm not giving links. However if you can
convince me that you are capable of doing this, then i'll think
about it.  

a normal 2k hardmodded pandora should suffice for unbricking, the
headache is creating the service card.  

it is a must you have a solid engineering background to perform
this.(not meant for 12 year old kiddos)  

also make a note that the nand programmer software can only run
on Windows XP and is not compatible with windows vista/7  



Recover your 3k from a semi-brick.  

What is a semi-brick?  

semi-brick is a state where you can't boot your 3k into the XMB,
however you can access recovery menu on booting up with R trigger
held.  

As you might have guessed, this is possible only if you have
installed the 3k with 6.20 PRO-B permanent patch.  

So if you have a semi-bricked 3k , that had the perma patch
installed, just follow these steps to unbrick it.  

1. remove battery, re-insert and power up holding R trigger.  

2. if the PRO recovery menu shows up, you're in luck else you have
a full-brick.  

3. in the recovery menu, search for this option 'Hide cfw files'
and set it to DISABLED  

4. Choose 1st option -Toggle USB (make sure USB device set to ms)  

5. make sure you have a 'vshorig.prx' file there (if you haven't
tampered with the cfw files it should be there and you can skip
step 3 and 5)  

6. download this file from the link below  
[Download Semi-BrickRecovery.exe for free on
uploading.com](http://uploading.com/files/21afcb11/Semi-BrickRecovery.exe/)  

7. copy that file in this location ms0:/psp/game  

8. now run the Semi-BrickRecovery.exe from this folder.  

9. Done!  

note: the ofw that will be flashed here will be 6.35.   

if you want to flash any other ofw, just goto the UPDATE folder
and replace the 635.pbp with the new ofw.  

make sure to change that eboot.pbp to ofw.pbp  
10. if you have any plugins in the seplugin folder delete all of
them now.  

11. exit usb mode and choose to reset device.  

12. power on again holding R trigger.  

13. run the third option 'Run /PSP/GAME/RECOVERY/EBOOT.PBP'  

14. press X to install ofw.  

15. the 6.35 (or any other ofw you chose) updater should now come
up.  

your 3k is now un-bricked.  

[ note: you can also do this method to unbrick psp 3k, if your
psp has 6.20 TN D/E installed with the perma patch.]  

should you want to go back to 6.20 PRO-B again just goto my guide
section 3, and use the 6.xx downgrader.  






Section 4 .Downgrade your PSP  

Though, no one would probably need to downgrade with the latest
cfw , i''ve just included a list of psp models and the firmwares
to which it is possible to downgrade for those who wish to
experiment.  

PSP 100X with 01G Module:  
- Downgrading to OFW 1.50 and above Possible  

PSP 200X with TA88-V2 and lower:  
- Downgrading to OFW 2.60 and above Possible  

PSP 200X with TA88-V3:  
- Downgrading to OFW 4.20 Impossible  
- Downgrading to OFW 4.21 Possible  
- Downgrading to OFW 5.00 Possible.  
- Downgrading to OFW 5.01 Possible.  
- Downgrading to OFW 5.02 Possible.  
- Downgrading to OFW 5.03 Possible.  
- Downgrading to OFW 5.51 Possible.  
- Downgrading to OFW 6.00 Possible.  
- Downgrading to OFW 6.10 Possible.  
- Downgrading to OFW 6.20 Possible  
- Downgrading to OFW 6.39 Possible  

PSP 300X with 03G Module:  
- Downgrading to OFW 4.20 Impossible  
- Downgrading to OFW 4.21 Impossible  
- Downgrading to OFW 5.00 Possible.  
- Downgrading to OFW 5.01 Possible.  
- Downgrading to OFW 5.02 Possible.  
- Downgrading to OFW 5.03 Possible.  
- Downgrading to OFW 5.51 Possible.  
- Downgrading to OFW 6.00 Possible.  
- Downgrading to OFW 6.10 Possible.  
- Downgrading to OFW 6.20 Possible  
- Downgrading to OFW 6.39 Possible  

PSP 300X with 04G Module:  
- Downgrading to OFW 4.20 Impossible  
- Downgrading to OFW 4.21 Impossible  
- Downgrading to OFW 5.00 Impossible.  
- Downgrading to OFW 5.01 Impossible.  
- Downgrading to OFW 5.02 Impossible.  
- Downgrading to OFW 5.03 Impossible.  
- Downgrading to OFW 5.51 Impossible.  
- Downgrading to OFW 6.00 Possible.  
- Downgrading to OFW 6.10 Possible.  
- Downgrading to OFW 6.20 Possible  
- Downgrading to OFW 6.39 Possible  

PSP GO with 05G Module:  
- Downgrading to OFW 4.20 Impossible  
- Downgrading to OFW 4.21 Impossible  
- Downgrading to OFW 5.00 Impossible.  
- Downgrading to OFW 5.01 Impossible.  
- Downgrading to OFW 5.02 Impossible.  
- Downgrading to OFW 5.03 Impossible.  
- Downgrading to OFW 5.51 Impossible.  
- Downgrading to OFW 6.00 Impossible.  
- Downgrading to OFW 6.10 Possible.  
- Downgrading to OFW 6.20 Possible  
- Downgrading to OFW 6.39 Possible  

List of DC(despertar del Cementerio) versions and the original
firmware(ofw) they flash  

1. 1.50 Update flasher(only for 1k)- ofw 1.50 to 2.71  
2. DCv3 - ofw 3.71  
3. DCv4- ofw 3.80  
4. DCv5 - ofw 3.90  
5. DCv7 - ofw 4.01  
6. DCv8 - ofw 5.00  

Here is a way to easily downgrade your psp to any firmware to
which your psp supports  

1. Download the 6.60 Downgrader v4.1 from here [6.60 Downgrader
Released, PSP Hacks - PSP Slim
Hacks](http://pspslimhacks.com/6-xx-downgrader-v4-released/)  
2. Copy the 6.xx Downgrader V4.1 from the archive folder to ms0:/
PSP/GAME (ef0- for psp go)  
3. copy the update of the OFW to want ( EBOOT.PBP ) to
PSP/GAME/UPDATE ( with capitals ).  
4. now run the downgrader and follow instructions   
5. make sure to have battery level above 80%  
6. after the downgrade is complete if you get a blue screen in
diff. languages - just press O  
7. if you get a blank screen however just press the following
combination SELECT+START+SQUARE + TRIANGLE  

6. xx Downgrader v4 Tested --Thanks to Faustnero  



The list of firmware to which you can safely downgrade to based
on your PSP model using this downgrader.  

1. 1g(psp phat) -Any  
2. 2g (psp slim with motherboard below TA-088v3) -Above 3.60   
3. 2g (psp slim with motheboard TA-088v3) -Above 4.01  
4. 3g -Above 4.20  
5. 4g -Above 5.70  
6. 5g -Above 5.70  
7. 7g/9g -Above 6.30  

**Downgrading a PSP 3k with 09g module to 6.20 ofw.  
**  
Download the downgrader from here [Multiupload.com - upload your
files to multiple file hosting
sites!](http://www.multiupload.com/8I56MHRJ4R)  

•Add both “Downgrade v5″ and “UPDATE” folder with 6.20 ofw update
to GAME folder  
•Run the Downgrader from XMB  
•Follow the instructions on the screen.  
•After the install a blue screen will appear. Press O to restore
your settings.(If a white screen splashes instead of the blue one
turn off your PSP completely and turn it on again then as fast as
you can hit the following combination of buttons :
Select+Start+Square+Triangle )  

SECTION 5: TIME MACHINE  

Time Machine is a way on which you can emulate 1.5 ofw on your
hackable 1k/2k if you badly want to run those 1.5 homebrew.  

Q. Why 1.5 ofw ?  

It was the first ofw to be released by Sony (excluding ofw 1.00
for japanese 1k). It had no security checks, and any 1.5 homebrew
can be run on it without cfw.  

Installing Time Machine  

For Hackable 1k  

Files you require  

1. Time Machine  
>
[http://dl.qj.net/psp/hacks-exploits/time-machine-v01.html](http://dl.qj.net/psp/hacks-exploits/time-machine-v01.html)  
2. 1.5 eboot file  
[http://pspslimhacks.com/psp-firmware/official-firmware-updates/  
](http://pspslimhacks.com/psp-firmware/official-firmware-updates/)  
Hardware you Require  

1. Magic stick(ie. aldready modded with DC)  
2. Pandora battery  

Installation  

Toggle usb mode and do this  
(you need cfw on the psp to do this. I flash installed 5.00 m33-4
and did this from there but it should work on 6.60 ME)  
or having an mms, choose the option emulate 5.00 m33 from DC and
perform this from there  

1. Once you've got those files, first copy the Time Machine folder
into the mms in the following location ms0:/psp/game  

2. copy the 150.pbp file into the root of the mms  

3. exit usb mode.  

4. now goto GAME and run Time Machine  

5. choose to install 1.50, wait for it to be done  

6. toggle usb, navigate to the following location
ms0:/TM/config.txt  

7. in the config.txt file, you should find a line like this  
L= "/TM/DC8/ipl.bin";  

8. below that line add this line:  
UP= "/TM/150/ipl.bin";  

[note: if you add this line instead of previous line  
NOTHING= "/TM/150/ipl.bin";  
then every time you insert mms and pandora with no key held it
should goto 1.5 emulation]  

9. save the file and now exit usb mode.  
10.  Done!  

power off psp  

now insert the mms and holding the UP key on the D-Pad, insert
the pandora battery.  
you should now boot into the 1.5 ofw. set all options and proceed
to run the homebrew.  

copy the 1.5 homebrew to GAME folder and not GAME 150 folder and
it should run.  

For hackable 2k  

don't follow the method mentioned for 1k  

here to run 1.5 ofw emulation, you should use the option to
install mixed 1.50/3.40 kernel from Time Machine  

Here's how you do it  

Files required  
1. 1.50 eboot(rename to 150.pbp)  
>
[http://pspslimhacks.com/psp-firmware/official-firmware-updates/](http://pspslimhacks.com/psp-firmware/official-firmware-updates/)  
2. 3.40 eboot(rename to 340.pbp)  
>
[http://www.4shared.com/file/o9iRhtvX/340.html](http://www.4shared.com/file/o9iRhtvX/340.html)  
3. 3.60.psar  
>
[http://www.4shared.com/file/lvN47Fy-/360.html](http://www.4shared.com/file/lvN47Fy-/360.html)  
4. Time Machine(same link as above)  

Hardware you Require  

1. Magic stick(ie. aldready modded with DC)  
2. Pandora battery  

steps  

toggle usb (again 2k must be on cfw to run Time Machine)  

1. copy the 150.pbp, 340.pbp and 360.psar to the root of mms  

2. copy the Time Machine folder into the mms in the following
location ms0:/psp/game  

3. exit usb mode  

4. run Time Machine from GAME  

5. choose the option to install 1.50 with 3.40 tm moudles  

6. once finished, toggle usb again  

7. toggle usb, navigate to the following location
ms0:/TM/config.txt  

8. in the config.txt file, you should find a line like this  
L= "/TM/DC8/ipl.bin";  

9. below that line add this line:  
UP= "/TM/150  _340/ipl.bin";  

[note: if you add this line instead of previous line  
NOTHING= "/TM/150  _340/ipl.bin";  
then every time you insert mms and pandora with no key held it
should goto 1.5 emulation]  

10. save and exit usb  

Thanks to dankgame for this excellent video tutorial  



power off psp  

now insert the mms and holding the UP key on the D-Pad, insert
the pandora battery.  
you should now boot into the 1.5 emulation. set all options and
proceed to run the homebrew.  


Section 6. Update your PSP  

To update to 6.60 ME from any ofw  

First you need to update to 6.60 OFW and the install the CFW. To
update you can either do it yourself or you can do network update
on the psp.  

Heres how you do it. If your already on 6.60 OFW skip these
steps. Also skip if you are going to do system update from the
XMB. Just go ahead and update either way to   
6. 60 OFW.  

1. Download this :[6.60 OFW - 6.Downloads - Sony PSP MODS and
Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=file&id=212)
and extract it and have it handy.  
2. Now plug the psp into the usb on your computer and open the
PSP folder and then the GAME folder and create a folder named
UPDATE and put the 660 eboot in there.  
3. Now exit out of the USB and go to the psp and go to GAME and
run that update. That should put you on 6.60 OFW.  

Now to install the CFW.  

When you go back to the game folder on the psp delete the UPDATE
folder I told you to make.  

1. Download this:[6.60ME-1.6 (OFW Version) - Downloads - Sony PSP
MODS and Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=file&id=251)
and extract that.  
2. Place the "me  _installer" into your "GAME" folder on your
memory stick .  
3. Then go run that on the psp like you did the update and you
should be good to go.  

1. For those with old DA firmware (SE/OE systems)  

1. using Hellcats Recovery Flasher update to 5.00 m33(steps
mentioned in section 5)  
2. download the 6.60 ME v1 bundle from here  
>
[http://www.pspmod.com/forums/downloa...do=file&id=208](http://www.pspmod.com/forums/downloads.php?do=file&id=208)  
extract the contents and copy the UPDATE folder from the archive
to the GAME folder on your memory card.  
Then goto XMB and run the update.  
After that network update to the latest version of ME cfw.  

2. For those with 3.71 m33 to 5.00 m33 firmware  

first update to higher cfw like 5.00 m33 via hellcats (for those
with cfw below 5.00 m33)   
then  

download the 6.60 ME v1 bundle from here  
>
[http://www.pspmod.com/forums/downloads.php?do=file&id=208](http://www.pspmod.com/forums/downloads.php?do=file&id=208)  
extract the contents and copy the UPDATE folder from the archive
to the GAME folder on your memory card.  
Then goto XMB and run the update.  
After that network update to the latest version of ME cfw.  

Also you can just run the 6.60 ofw update and install 6.60 ME as
mentioned in the first part of section 4.  

3. For those with 5.50 GEN D firmware   

You need to perform GEN BYPASS to update firmware  
There are 2 ways to do this   

1st Method:  

for those who do not have the D installer anymore download it
from here
[http://www.mediafire.com/?zzhcmknzznt5ngj](http://www.mediafire.com/?zzhcmknzznt5ngj)  

once it's installed, exit usb mode and go to your games, run it
and choose the 2nd option to install 5.50 ofw  
once it's complete, reboot and discard this updater.  

2nd Method:  

>access vsh menu by pressing SELECT  
>set "USB DEVICE = memory stick" to USB DEVICE = flash 0"  
>plug in your psp, search for the folder "etc", open it  
>you'll see a "version.txt", open it.   
>you'll see a number "X.XX" right beside the word "release" at
the very top(if you're upgrading, the default numbers would be set
to "9.90". change it to "5.50" or something lower than 6.60. save
it. unplug.  
>set USB DEVICE back to "memory stick". plug in again.  
now reboot your psp, and the memory stick should be accessible
again in USB mode  

[special thanks to Faustnero for the 2nd method]  

after the bypass   

in case of method 1: you need to update to 6.60 ofw and then
install 6.60 ME-1.3 via the ofw version  
[6.60 OFW - Downloads - Sony PSP MODS and Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=file&id=212)  
[6.60ME-1.3 (OFW Version) - Downloads - Sony PSP MODS and Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=file&id=235)  

incase of method 2: just copy the 6.60 MEv1 bundle to the update
folder and run it  

**Upgrading a 09g PSP after downgrading to 6.20 ofw.(thanks to
dankgame for the mention)  
**  
Download the “TA-095 (9g) physical upgrader” from here
[http://pspslimhacks.com/9g-upgrader-released/](http://pspslimhacks.com/9g-upgrader-released/)  

•Download OFW 6.35/6.39/6.60/6.20 ( a single EBOOT.PBP file).  
•Place the OFW in PSP/GAME/UPDATE  
•Extract the Upgrader folder to PSP/GAME.  
•Run the program and follow onscreen instructions

Section 7: Hellcats Recovery Flasher  

Hellcats Recovery Flasher is probably the only way to
upgrade/downgrade to cfw easily without a pandora battery and a
magic memory stick.  
It also lets you recover from a semi-brick.  

Files Required for Hellcat Recovery Flasher  

Hellcats 1.65 [Recovery Flasher v1.65, PSP Hacks - PSP Slim
Hacks](http://pspslimhacks.com/hellcats-recovery-flasher-v1-65-released/)  
5. 00 pbp
[http://uploading.com/files/6X0E1YMQ/](http://uploading.com/files/6X0E1YMQ/)  
Hellcats GEN D3 installer pack [Install 5.50-GEN-D3 with Recovery
Flasher (FW-Pack)   *Updated, PSP Hacks - PSP Slim
Hacks](http://pspslimhacks.com/install-5-50-gen-d3-with-recovery-flasher-fw-pack/)  
5. 50 pbp
[http://psp.dashhacks.com/downloads/550-firmware-update](http://psp.dashhacks.com/downloads/550-firmware-updateFlashing)  
[  
](http://psp.dashhacks.com/downloads/550-firmware-updateFlashing)
Flashing a fresh 1.5 ofw to your psp 1k only using hellcats  

1. install hellcats as mentioned below according to your psp  
2. download the 1.5 eboot from here [150.PBP - PSP, Official,
Firmware, 1.50](http://www.mediafire.com/?d59tyajn1bb)  
3. rename the eboot.pbp to 150.pbp and copy to the root of memory
stick.  
4. run hellcats now  
5. select the option to "Install fresh ofw 1.50"  

Installing cfw 5.00 m33 via hellcats  

Works on cfw versions from 3.71 m33 to 6.60 ME  

1. extract the "HELLCATS" archive and copy only the RECOVERY
folder to the GAME folder on your mem card  
2. copy the 5.00 pbp file to the recovery folder  
3. now run it from XMB and select the option "To install cfw of
above selected" which should be 5.00 m33-6  
4. finally select "reset all defaults" and then it will flash your
psp  

2. For systems with 1.5 ofw   

1. extract the Hellcats archive  
2. For 1.5 ofw systems, open the 1.5 firmware folder  
copy the 2 sub-folders "%  _  _SCE  _  _rflash" and"
_  _SCE  _  _rflash" to your GAME folder  
copy and paste the 500.pbp file into the root of your memory
stick  

For any of the SE/OE systems and 3.51 m33  

copy the same 2 folders mentioned above and copy them into your
GAME150 folder not GAME folder  
copy and paste the 500.pbp file into the root of your memory
stick  

Now for GEN D3 installation  

1. install hellcats on your psp according to your psp firmware as
mentioned in the above steps.  
2. extract the hellcats D3 pack  
3. copy the required RFP file, for 1000's or 2000's in the root
of the mem card  

also copy the 5.50 pbp from above link to the root of your ms  
4. Run hellcats  
5. In the first option, where you can select the (C)FW version to
be installed,  
press "X" until it reads "load from external FW pack", then
select the option to "install cfw of above selected"  
and finallt the option to reset all defaults  
6. it will flash your psp now with D3.  

To recover from a semi-brick using Hellcats  

Case 1: If you have aldready installed hellcats on your psp  

1. Holding R trigger boot the psp into Recovery Menu  
2. Select the 3rd option "Run program at
PSP  >GAME  >RECOVERY  >EBOOT.PBP"  
3. choose which firmware you want to flash and wait for it to be
done  

case 2: If hellcats not aldready installed on your psp  

1. holding R trigger , boot the psp into Recovery Menu  
2. select option to Toggle USB (USB device must be set to memory
stick)  
3. copy hellcats to your psp according to which firmware you want
as mentioned above  
4. exit usb  
5. now Select the 3rd option "Run program at
PSP  >GAME  >RECOVERY  >EBOOT.PBP"  
6. choose which firmware you want to flash and wait for it to be
done  

there are also various other options available in Hellcat   

1. To make NAND dump  
2. To softmod battery into Pandora  

HELLCATS VIDEO TUTORIAL  


**Section 8 :Installing cfw on Unhackables  

**
This section is solely dedicated for those who own unhackable
psps.  
By unhackable, i mean those psp's which dont work on pandora and
mms.   

Which PSP models are unhackable?
![image](http://www.howitshould.be/wp-content/uploads/hackable_table(1).png)  

All those who have PSP 3000 and PSP GO, your PSP is currently
unhackable.  
If you want to install cfw on this psp, follow the steps below.  

For those with PSP 2000, matters become more complex.  
You have to first determine whether your PSP 2k has the
unhackable motherboard-TA-088v3  

Though there are various ways, i recommend you to go to this
thread if you cant determine whether your 2k is hackable or not.  
>
[http://www.pspmod.com/forums/psp-dis...-hackable.html](http://www.pspmod.com/forums/psp-discussion/60740-how-tell-if-your-slim-2001-hackable.html)  
Once you have determined it, you are ready to proceed.  

Nature of cfw for unhackables.  

Most cfw for unhackables are temporary, meaning you need to run
an exploit(launcher) everytime you shutdown your psp, or if your
psp gets stuck.  

CFW for unhackables  

Though there are many cfw versions for unhackables, I shall cover
only 3 versions  

1. 6.20 PRO-B9  
2. 6.39 LME-9.7  
3. 6.60 LME-1.6  

6. 20 PRO-B9  

This is one of the best cfw for unhackables.  

Reason being it has a permanent patch which works for some
unhackables, so no need to run the Fast Recovery exploit
everytime.  

Download it from here  
[620PRO-B9.rar - procfw - 6.20 PRO-B9 - X-Generation Aftermarket
Firmware for Playstation
Portable](http://code.google.com/p/procfw/downloads/detail?name=620PRO-B9.rar&can=2&q=)  

>
[Installing](http://code.google.com/p/procfw/downloads/detail?name=620PRO-B9.rar&can=2&q=Installing)
6. 20 PRO-B9  
1. Make sure you are on 6.20 ofw else update to it  
[PSP Firmware 6.20 Update | PSP-Hacks: Hack your PlayStation
Portable](http://psp.dashhacks.com/downloads/psp-firmware-620-update)  
2. Extract the 6.20 PRO-B9 folder.  
3. Copy the 620PRO  _Permanent , Fast Recovery and PROUPDATE folder
to the game folder in your PSP Memory card  
4. Now run the PROUPDATE installer from XMB and press X to
install.  
5. Once its finished, you have to check if you can apply the
Permanent patch.  

**Currently its supported for all models upto psp with 05g
module.  

**Well most people might tell you to download PSP Module Checker
to check it.But here is a shortcut.  
1. Make sure you're on 6.20 PRO-B9 , else run the recovery to be
on it.  
2. Choose to hide MAC in recovery menu  
3. In system settings , goto system information.  
4. In MAC address section - it should appear HIDDEN and adjacent
to that is your module version.  

Once you have done that , if your psp is compatible with the
permanent patch, run it.  
Press O and then X to install the permanent patch.  
Now there is no need of running the Fast Recovery everytime.  

If your psp is not compatible with the permanent patch--DONT
APPLY IT.  
Use the Recovery every time you shutdown the psp to be back on
cfw.  

6. 39 LME-9.7  

1. Download it from here:[6.39LME-1.7 - Downloads - PSPMOD.com -
PSP Forum, Hack PSP, PSV Hacks, PS Vita Hack,
PSVita](http://www.pspmod.com/forums/downloads.php?do=file&id=256)  
2. Make sure you are on 6.39 ofw else update to it  
[6.39 OFW - Downloads - PSPMOD.com - PSP Forum, Hack PSP, PSV
Hacks, PS Vita Hack,
PSVita](http://www.pspmod.com/forums/downloads.php?do=file&id=160)  
3. .Extract the 6.39 LME folder  
4. Copy the INSTALLER and LAUNCHER to the game folder in your PSP
Memory card. or just merge the PSP folder in the archive with that
of your mem card.  
Run the Installer from XMB  
5. Finally run the Launcher  

there is no permanent patch for 6.39 LME cfw made by neur0n.  
If the cfw goes by accident, run the Launcher to be back on cfw.  

6. 60 LME 1.6  

1. Download it from here:[6.60LME-1.6 - Downloads - PSPMOD.com -
PSP Forum, Hack PSP, PSV Hacks, PS Vita Hack,
PSVita](http://www.pspmod.com/forums/downloads.php?do=file&id=250)  
2. Make sure you are on 6.60 ofw else update to it  
>
[http://www.pspmod.com/forums/downloads.php?do=file&id=212](http://www.pspmod.com/forums/downloads.php?do=file&id=2122.Follow)  
3. .Extract the 6.60 LME folder  
4. Copy the INSTALLER and LAUNCHER to the game folder in your PSP
Memory card. or just merge the PSP folder in the archive with that
of your mem card  
4. Run the Installer from XMB  
5. Finally run the Launcher  

NOTE: For PSP GO download the ofw update mentioned for GO from
here and then follow instructions above to update  
[PSP Official Firmware - Downloads - Sony PSP MODS and Hacks
Forums](http://www.pspmod.com/forums/downloads.php?do=cat&id=4)  

UNBRICKING THE UNHACKABLES  

You need to be very careful with what you do with the
unhackables, since a brick will result in a paper-weight.  

**There is currently no way to unbrick a full bricked PSP 3k or
PSP GO except to replace the mobo or send it to Sony if its under
warranty.  

However if you are on 6.20 PRO-B permanent patch, and you get a
semi-brick, your psp 3k/GO can be unbricked.  

****SECTION 9-- FAQ + COOL STUFF  

**1. DADA ERROR  

REASON: Dark Alex has implemented a block in his older cfw's (i
guess upto 3.80 m33), which prevents you from updating to any
official firmware by Sony. Also you can't update to the latest cfw
since his update servers are down.  

FIX: update to the last m33 cfw via Hellcats. now just normally
run the update to which cfw/ofw you want to install.  

2. CONFIGURATION ERROR  

ERROR MESSAGE : The system configuration of this PSP system does
not appear to be correct. THe update cannot be completed. Contact
technical support of assistance.(DRNFFFFFFCD)  

REASON : your psp has probably been downgraded using the old
downgraders and then updated to some DA firmware. Hence when you
update to a recent ofw/cfw you get this error   

FIX: Run an idstorage fix via DCv7/8 or use Key Cleaner to repair
the corrupt keys of idstorage.   

3. Unsupported firmware version detected Pls power off psp?  

REASON: most people seem to get this error when they have irshell
installed on the psp and when they update to newer cfw which is
incompatible with irshell  
FIX: remove the memory stick and power on the psp. you should
boot up normally. now delete the irshell on the memory stick and
pop it back.  

4. After installing cfw , you get a blank screen   

Before you rush to conclude you have a brick, it might be some
rogue plugin which might be causing it.  

Remove your memory stick and try booting the psp. If it boots up
now, then find out which plugin is incompatible and disable
it.Else it must be a brick.  

5. ISO files appear as corrupt in GAME section of XMB  

most likely you have copied it to the GAME folder on the psp
memory stick, while in reality you have to create an ISO folder in
the root of your memory stick, and copy the iso's there.  

5. PSX games don't work properly  

Sometimes the newer firmwares do not support some PS1 games that
can be used on older ones so if you have some problems with some
PS1 games you need to get a POPS LOADER for your cfw version.  
Hold R trigger while pressing X to choose which firmware to
emulate  

6. Some of your 1.5 apps don't work on the later cfw  

Go to Recovery Menu and try changing the GAME folder to 1.5
Kernel.if it doesn't work and you are very desperate to run 1.5
apps, then you need to install TIME MACHINE on your psp to emulate
1. 5 ofw and then run it.  

7. NETWORK UPDATE ERROR   

suppose you are trying to update to latest version of ME cfw, via
network update and you get an error "NO NEED TO UPDATE"  

goto Recovery Menu and check if the option to enable custom
update is ENABLED or not. If not Enable it and now check   
8. UPDATE 1.5 OFW TO THE LATEST CFW/OFW  

if you get errors or black screen while updating 1.5 ofw , then
just use hellcats and update to 5.00 m33, then run the cfw or ofw
update to get the problem solved  

TO DISTINGUISH BETWEEN A SEMI-BRICK AND A FULL BRICK  

Power on your psp, and if you get a blank screen with the green
power light on it's a brick.  
Now, try holding the R trigger and boot up the psp.  

If the Recovery Menu appears you have a semi-brick from which you
can recover via Hellcats  

Else you have a full brick and you need a pb+mms to repair your
psp.   

TRIPLE BOOT INTO 6.60 ofw , 6.60 PRO-B9, and 6.60 ME (only for
hackables)  
1. first update to 6.60 ofw.  
2. then install 6.60 PRO-B9 but don't apply the CIPL flasher  
3. now run the 6.60 ME-1.5 update.   

by default you will boot up into 6.60 ME 1.5  
Holding home key you can boot into 6.60 ofw.  
run the Fast Recovery to be on 6.60 PRO-B9.   

How to update PSP on AC source   

usually when you try to update PSP on AC w/o battery you get
error  
Here's a fix  
All you need to do is hover over the update, and press and hold
the Left Trigger and Triangle. While still holding the Left
Trigger and Triangle, start the update. When it says press X to
install, you can stop holding the trigger and triangle and proceed
with the update.  

**Savegames appear corrupted after updating from GEN cfw to later
one.  

**There are two fixes for this   
1. Download the patch for GEN cfw from here [MEGAUPLOAD - The
leading online storage and file delivery
service](http://www.megaupload.com/?d=A50PC17G)  
copy it into the Game folder and run it  

.PLEASE NOTE: this must be used only on 5.50 GEN D 3 after you
update from D 2 and get save errors.for other versions please use
magic save  

2. MagicSave which is a plugin (Thanks to El guapo for the mention
and video)   

follow instructions in the video   



TRIPLE BOOT INTO 6.60 ofw , 6.60 PRO-B9, and 6.60 LME(for
un-hackables)  

1. first update to 6.60 ofw.  
2. then install 6.60 PRO-B9 but don't apply the CIPL flasher  
3. now run the 6.60 LME-1.6 update.  

shut-down your psp and you will boot into 6.60 ofw  
run the Fast Recovery of PRO cfw to be on 6.60 PRO-B9  
run the launcher of LME to be on 6.60 LME  

Q. i insert a pandora battery into my slim which is a 2k with
TA-88v3 mobo, and only a green light appears , even though i
insert mms and hold L trigger?  

this is because the 2k with 88v3 mobo, does not support the
per-ipl exploit, and cannot boot into the DC menu.the pandora
powers up the psp, as it can access the service mode on TA-88v3   

Q. is it possible to install ChickHen on a psp 3k ?  

yes it is possible, provided you have a 3k with module 03g. Above
03g, it is not possible to install ChickHen since the psp 3k with
higher module does not support downgrading to 5.03 ofw.  

Q.How do i go about taking UMD Backups?  

1. make sure you have cfw installed, else not possible.  
2. press select to enter vsh menu, and choose usb device as UMD  
3. toggle USB  
4. copy the iso file from the UMD window to anywhere you want.  

q.When i try to connect to an access point - it says
'unsupported' in the encryption field and i'm not able to access
it. Why?  

most probably, you must have set the encryption of your access
point to WPA 2, which is not supported by the psp.Change it to
something like WEP or WPA to make it work.  

q. How do i run 1.5 kernel apps wih LEDA on 6.39 ME and 6.60 ME  

on 6.39 ME , 1.5 kernel emulation is built in. just goto recovery
meny and change the GAME folder option to 1.5 kernel, and copy 1.5
apps there to the GAME folder.  
for 6.60 ME , use the LEDA plugin that comes with the
installation folder, and follow the instructions to install.  

note: all 1.5 homebrew need not work by this method.  

Q.how to reverse mod a softmod pandora back to normal one?  

remove the softmod battery, power on the psp via ac source and
goto the tool which you used to softmod, now re-insert battery and
there should be an option to reverse the battery back to normal.  

Q how do i format flash1 of my psp?  

hold down start+select+square+triangle while booting up your psp
to format flash1.