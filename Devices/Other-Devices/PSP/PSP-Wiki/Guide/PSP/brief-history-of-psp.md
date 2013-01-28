## A Brief History of PSP Modding

This is the non-technical, easy-to-read version of the history of the PSP. For a more detailed, technical, and version by version history, see the version saved from the wikipedia page. [[PSP Homebrew History]]

### The Beginning

When the PSP first came out, the system was incredible, but the firmware was lackluster. For one, it had limited compatibility with video and audio formats like most other Sony products.

The first barrier to homebrew was the stock firmware's inability to run code not signed by Sony. In May 2005, hackers working on the PSP discovered exploits in firmwares 1.00 and 1.50 that allowed them to run unsigned code on the PSP. 

Later, a the first homebrew programs arrived, from Hello World tests to entire emulators. This was a watershed moment that started it all. 

Websites everywhere soon offered guides to C++ and Lua programming using GCC on the PSP, linking the PSP to iPods, and even using it to control Sony's Aibo robot. Even a system-bricking trojan was released. A team of these hackers managed to crack the firmware and published the results online.

As soon as homebrew programs were made, people were asking the big bad question; "Can I copy UMDs and play them off of the memory stick?" Soon there was no question. This action was the crippling threat to Sony's business model, and the company had to act.

### The TIFF Exploit

Sony soon made new security updates that patched the exploits, but the community held out and looked for downgrades from the new systems. Eventually, Sony realized that their updates needed some content, and on version 2.00 (released June 27, 2005), added a web browser and more file compatibility to the mix. In addition, in new games, users were required to upgrade before playing.

It was clear that PSP modders could not simply rely on 1.50 for long, and without some sort of new exploit, they were toast.

On September 23, 2005, a buffer overrun was discovered involving TIFF files that made it possible to run unsigned code on firmware 2.00. This was soon dubbed "The TIFF Exploit". However, the homebrew that could be run was limited to 64kB, so the exploit was mainly used to downgrade systems to 1.50 with the MPH downgrader.

Later, developer Fanjita created a compromise called the eLoader, which made it possible to run unsigned homebrew launched from the menu. This program made it feasible to run homebrew for versions other than 1.50.

### UMD Exploit Era

Moving quickly, Sony released security update version 2.01 on October 3, 2005, patching the exploit. But within a month, the game "GTA: Liberty City Stories" was found to have a buffer overflow in it's saved game data, allowing homebrew to be run once again. By December of that year, the exploit could be used on versions 2.50 and 2.60, and an SDK was created allowing developers to use the exploit to create new homebrew. The next month, special versions of Fanjita's eLoader were released for 2.01 and 2.60, with the WiFi chip finally enabled. The hackers had done the impossible yet again.

Firmware version 2.70 and 2.71 were soon released in April 2006, patching the exploit and adding a tantilizing new web browser with Macromedia Flash enabled. Rockstar began to ship new copies of GTA without buffer overflows and required an update to 2.60 during June 2006.

September came along, and the TIFF Exploit was resurrected for 2.01 through 2.71, removing the requirement for buying GTA. The flaw with this exploit was that it could not directly execute in kernel mode, preventing the creation of a downgrader. Team N00bz created the Kriek eLoader and xLoader for 2.80. Team C+D found a exploit on 2.80 that added kernel mode in December, leading to a 1.50 downgrader.

### Custom Firmware

Custom firmware is a specially modified firmware with homebrew capabilities, as an alternative to going back to the aging 1.50 firmware. They have extra features bundled in, like integrated ISO/CSO and boot-up recovery menus, along with the obvious support for newer games. These soon became vital to PSP homebrew, because new PSPs came with motherboards that would brick themselves after having 1.50 installed. Once homebrew for 2.xx versions became mature, custom firmwares became standard across the community.

In July 2006, developer Dark AleX created a proof-of-concept 1.50 custom firmware that allowed users to run 1.00 EBOOTs, a limited recovery mode, and application loading upon startup. Three months later in October, Dark AleX released 2.71 SE, utilizing the features of the new firmware while giving it an improved recovery mode, ISO/CSO loading, PRX system features, and even the ability to run 2.80 games. Later updates kept up with official firmwares with 3.02-OE through 3.40-OE.

On January 25, 2007, a user mode exploit was discovered by Team N00bz that affected PSP firmware 2.00-3.03, and a Hello World program called the Goofy Exploit proved that unsigned code worked on 2.81 and higher. It used the old GTA exploit, but bypassed the new firmware patch by using higher save slots. The 3.03 HEN custom firmware was developed from this exploit, giving users the features of 3.03, but allowing homebrew to be run.

June 23, 2007 introduced the "Illuminati Exploit", using the game Lumines to run unsigned code on versions 3.10-3.40. Team N00bz used this to make a downgrader.

Starting from July 2007, a supposed Russian hacking team called Team M33 took over where Dark AleX left off and made 3.51-M33 from the newly released 3.50 firmware, a major update that included an official ISO emulator from Sony itself. It became the community standard of homebrew development, finally uprooting 1.50 with a newer, better base. This would go on until 5.00-M33, where it was revealed that behind this team was none other than Dark Alex himself.

### PSP Modchips

The continous cycle of exploit and patch led some developers to try and break the circle with modchips. These chips allowed PSPs to run two seperate firmwares and restore corrupted firmware ("unbricking"). The Multi Firmware Module was the first to be developed in April 2006, though never manufactured. Undiluted Platinum was the later standard, made May 2006. The day after it's release, kernel exploits were discovered for 2.50 and 2.60, aggravating the buyers who bought the modchips to downgrade from those versions. Because it was incompatible with TA-082+ motherboards, PSP-Devolution was created to be compatible with all of them.

All these modchips have since been made obselete by the Pandora's Battery, which offers the same abilities without the need for careful soldering.

### Pandora's Battery

After the Lumines exploit was patched on version 3.51, developers began to get weary of the cat-and-mouse game of exploits. In addition, many people had found themselves with bricked systems as a result. The aforementioned modchips were the only solution in sight, but a new team of developers had bigger and better aspirations.

In August 27, 2007, Team N00bz, partnering with the biggest names in PSP hacking, released an exploit that would change the face of PSP homebrew forever, with the "Pandora Battery" and it's "Magic Memory Stick". This battery had two killer features:

* It could restore any bricked PSP back from the grave.
* It could install any firmware of any kind, at any time.
* It could not be patched by Sony using software, effectively making it a permanent solution for running homebrew on the PSP-1000 (Phat).

Creating this ultimate exploit was no small feat, having to reverse-engineer a the service mode, develop a method to make a Pandora Battery and go back, all without any access to official hardware or software.

While they attempted to keep it secret until after the production of the new PSP-2000 (Slim), to stall for time so that Sony could not fix the exploit through new hardware, a leak occured and the software and the exploit was sold on the black market. To prevent carpetbaggers from profiting off their hard work, n00bz released the hack on their site for free.

While Sony is unsupportive of homebrew in general, some Sony representatives stated that the Pandora's Battery will not harm the PSP, as the same method is used internally to repair PSPs.

### PSP-2000 Slim

The PSP Slim was later released, but was still susceptible to the Pandora Battery, albeit unable to create one. While it was not compatible with the old 1.50 IPL, Dark AleX created Despertar del Cementerio as a cross-platform installer for custom firmware. The first homebrew capable firmware on the PSP Slim was therefore 3.60-M33.

### Continue?

The history of PSP modding goes thin here, as the PSP aged and new devices like the iPhone and Android enticed new developers with their more powerful hardware and greater possibilities. The once uncrackable PS3 sucked in tons of developers to try their luck after Linux was disabled through a firmware update. The PSP's golden age began to wane, and it was to be left behind in the dustbin of history.

Long after the last major developers had moved away, PS3 development would soon lead to the greatest development ever in PS3 and PSP homebrew history: The discovery of the root signing keys. In 2011, Geohot, the famed hacker genius, managed to find Sony's root signing keys. This was even greater than the Pandora's Battery; it was the wholesale and total defeat of Sony's software signing security system. Now there was no need for rare 0-day exploits or custom firmware: anyone could dump homebrew on any PSP system and run it, no matter what happened. There was no way for Sony to change the root keys without rendering their own software unusable. 

It launched a major fiasco that brought the company to it's knees, and left them in a burning urge for revenge that was only crushed by the forces of Anonymous, but more so marks the conclusion of the PSP hacking scene. With the ultimate goal now reached, the hard-working developers and the holdout PSP users could now rest in peace.

Even to this day, a small team maintain new custom firmwares 7 years after the introduction of the first PSP, and 4 hardware updates later. 

Hopefully this brief history helped you understand how the scene got where they are now, and the hard work that developers did to outwit big bad Sony and bring us fire and freedom from the clutches of the gods.