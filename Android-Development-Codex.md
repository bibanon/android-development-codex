The Android Development Codex is a community-built, comprehensive guidebook to all aspects of Android modding, customized for the phones that make it up. 

It aims to reform the XDA Wiki and consolidate all the information from the forums into one single, easy to read, and up-to-date guide for customized to every Android device. 

Key to this guide is the heavy use of templates to reduce redundancy, device specific guides for the dirty work of rooting, unlocking, and further development, and general guides for modding Android itself.

This is a community-created analog to the Official XDA Developers Book, but extended to all devices.

## Q&A

### Why make a monolithic guide? Just go to the forums.

There are three reasons for creating one unified guidebook:

* **The entire community can work on one big guide, rather than a ton of small guides.** - The benefit of the wiki is that all members of the community can update and edit it as needed. It's great that guides already exist on the forums, but only the OP is able to edit the first post in a forum thread.  When that guy inevitably moves on or new developments occur, the guide will quickly become outdated, and perhaps even gravely dangerous.
* **The forums naturally become a mess.** - The reality is that forums are the wrong place for solid, malleable, community-editable guides. Forums may be great for quick discussion and actual development, but when it comes to providing updated repositories of common knowledge, it falls flat. We'll get honest here; the forums are naturally devolving into a barely readable mashup of guides, forum links, and outdated tutorials. This is extremely intimidating to newbies and difficult for even the most experienced users to grasp. We are creating a dangerous mess, where many a phone has been bricked due to confusing and outdated instructions. 

* **Clear, constant guidelines can be made for better readability.** - Android Modding requires diligence and a good background of knowledge to avoid the dreaded brick, and it doesn't help if the information you depend on is scattered or possibly outdated.  

### Why not just use the Official XDA Developers' Book?

While the Official XDA Book is a great example to follow, it was not created with much input from the XDA community, and as a dead-tree copy, it will slowly grow outdated with age. 

More importantly, it only details general instructions for Android and specifics for only a handful of devices. This is not a policy that works; Android is an incredibly diverse family of electronics, and methods differ greatly from device to device. It is impossible to create a single book that can aquedately explain a significant fraction of this universe, let alone all of them.

Therefore, the Development Codex is tasked with creating a unique guide for each and every device, consolidating all the innovations from the XDA Forums into one 

## Common Pre-installation Guides

* [[Android Introduction]] - Just what is the Android Mobile Operating System? A quick intro to how everything works and what makes Android special.
* [[Android Modding Introduction]] - Why should we mod our Androids and what will we be able to do with them?
* [[Choosing the Right Device]] - Before buying choose the right device and it will save you lots of pain. Many devices are not worth the time, money, or effort to develop on, and it would suck to be the unlucky one.

### Prerequisite Tools and Knowledge

* [[Android SDK]] - The true workhorse of the Android developer.
* [[Linux Command Line]] - A small reference guide telling you the ins and outs of the Linux command line. No worries, it won't hurt.

## Available Devices

The initial list of devices supported in this guidebook is limited by the amount of devices accessible to the writers. If you are able to, please consider helping out and making a guide for your device.

### Stance

The development stance of a device determines how many roadblocks the manufacture has placed against modding on that device. It is not the same as ease of modding, but they do correlate.

Here are the levels in order:

* **Developer Friendly** - The ideal stance for a product. This means unlocked bootloader, easy flashes, all the works.

* **Developer Unfriendly** - Utterly locked down, but there are some workarounds.
* **Hopeless** - There is no hope for this device working ideally anytime in the future. Give up all hope (and buy a new device).

### HTC

HTC is a young Taoyuan, Taiwan based smartphone company that started out as a no-name brand designing the first Pocket PCs. HTC later became famous for creating the first and the best Android smartphones, for a while.

Incidentally, the name of XDA-Developers comes from HTC's O2 XDA Windows Mobile smartphones.

* [[HTC HD2]] - **Status:** Nearly Complete
* [[HTC Droid Incredible]] - **Status:** Complete

### Google

These are Android devices that Google supported, designed, or otherwise used as reference devices. They tend to be the fastest to update and the most developer friendly.

* [[HTC Dream (T-Mobile G1)]]
* [[Motorola Droid]] - **Status:** Under Construction
* [[Asus Nexus 7]]  - **Status:** Under Construction

### Motorola

Motorola Mobility is an out-of-touch old-timer company that manages to create fleeting best sellers, with a long period of decline between each one. Currently infamous for clamping down on development on their phones. Was taken over outright by Google, but it remains to be seen whether the golden oldie will get with the times.

* [[Motorola Droid 2]]
  - **Guide Status:** Under Construction
  - **Stance:** Anti-Developer
  
### Other

* [[Nook Color]] = **Status:**

## General Android Guides

After getting superuser privileges and the ability to flash custom ROMs, we can now look at modifications common to all Android devices. These guides will be divided into three sections:

* **Usability Mods** - Recommended apps and tweaks that make your life easier.
* **Performance Mods** - Mods that give some energy to a tired old Android.
* **Deep System Tweaks** - (Usually included by modders inside Custom ROMs) Crazy stuff that happens under the system to give Android cool new features. Knowing some of these makes it easier to find out which custom ROM is right for you.

### Android 2.2.x (Froyo)

### Android 2.3.x (Gingerbread)

### Android 3.0.x (Honeycomb)

### Android 4.0.x (Ice Cream Sandwich)

### Android 4.1.x (Jelly Bean)

## Guidelines

When creating a guide to be used in the Android Development Codex, please follow these guidelines:

* **List all sources and give all credit where it is due.** - Cite your methods, tools, and sources, if only to add some legitimacy. The developers on XDA worked hard to make these tools and guides. The least you could do is credit them for their work. That said;
* **Don't link to a site or the forum for methods; Move everything to the wiki and give sources.** - 
* **Ensure that all needed files are in a safe place with multiple mirrors.** - Link rot happens, and we have to be prepared.
* **Always include a manual method** for rooting/unlocking/recovery in addition to an easy, one-click method (if any). This ensures that there is something to go back to 
* **Don't create redundant material.** Link to a similar page *from this guidebook* and add stuff there, or suck in a template page.
* Define all terms used in a [[Glossary]] prefacing the guide. Try to use and adapt the templates that already exist to the needs of the guide.

## Basic Device Guide Template

While this template is not set in stone, try not to deviate from it too far..

* **Specifications** - The tech specs at the right displaying all the gritty details of the device.
* **Introduction** - Give a brief summary of what this device is, how the modding community on it evolved, something that makes it special.
* **Glossary** - Stitch together some Glossary Templates so that newbies know what we are talking about.
* **Requirements** - All the files needed and steps that need to be done before proceeding.

----

* **Rooting** - Methods of gaining superuser privileges. Make sure to include the manual method.
* **Unlocking the Bootloader (if any)** 
* **Installing a Recovery Image**
* **Custom ROM Notes** - Notes on what Android versions are available, which ROMs are good, whatnot.
* **Device Specific Modifications** - Mods that specific to this device.
* **Credits and Sources** - Give due credit to developers and record sources for information and guides.