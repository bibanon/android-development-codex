# Crash Course in Android Modding Culture

If you're new to modding in general, you may find the collection of guides here to be an indeciperable foreign language of new terms, specifications, and technicalities. 

## What is a "device"?

When we talk about **devices**, we specifically mean computing platforms. **Computing platforms** encompass anything that uses a processor, memory, and storage to run computer programs (collectively named the **Von Neumann Architecture**).

Here are a list of common computing platforms:

### Personal Computers

These are colloquially called "personal computers".

* **Desktops/Servers** - A computer platform using the "desktop" form factor. Consists of a block that contains the computer. Desktops meant for people also have a large monitor for a screen, a keyboard, and a mouse. Servers are often in the "desktop" form factor, albeit on a rack.
* **Laptops/Notebooks** - A computing platform with a keyboard, an LCD screen, and a pointing device used as a mouse. The screen is usually greater or equal to 14 inches.
* **Netbooks** - A smaller laptop that usually runs Desktop Operating Systems. It is functionally the same as a laptop, but usually cheaper, less powerful, and with a screen less than 14 inches.
* **Stick Computer** - A new family of computers that use mobile device technologies to create a tiny, cheap desktop computer.

### Mobile devices

* **Cell Phones (Dumbphones)** - A mobile device designed with the express purpose of working with a cell phone network.
* **Smartphones** - A mobile device outfitted with some abilties of a computer and optimized for internet access. The cell phone ability is no longer the primary function of a smartphone, but is often kept for ubiquitous internet access via a cell phone network.
* **Tablets** - A smartphone with a screen larger than 5 inches. A few have cell-phone service.
	* **7-inch Tablets** - Tablets with a 7-inch screen, a form popularized by the Kindle Fire. These have been the most popular, for their balance between size, price, and comfort.
	* **~10-inch Tablets** Tablets in the ballpark of 10-inches, a form popularized by the Apple iPad.

## Cell Phones and Carriers

Mobile devices first came into being when computer capabilities were added to cell phones. Although any form factor would have worked (such as watches and glasses), here were a few reasons why cell phones were ideal:

* Cell phones already contained computers, albeit in a limited way. Making them into mobile devices was a simple matter of beefing up the processor.
* Cell phones were ubiquitous. Nearly everyone in the developed world depended on one.
* Cell phones were usually sold on contract. Mobile computing devices can get to be as expensive as a laptop, so the carrier instead subsidizes the huge cost of a smartphone with a two-year contract.
* The cell phone form factor was an already accepted and convenient method of interacting with an electronic device. Watches were designed for quick glances, and computers just made glasses too heavy.

The most critical reason, however, was that cell phone services offered worldwide internet access. As such, this connection to the internet would become the primary feature of the smartphone.

> Handy Hint: if you just need a phone to call people, use a "dumbphone". If you want the power of a computer in your pocket, get a "smartphone".

## Mobile Device Hardware

### Mobile processors

Most mobile devices use the ARM processor, rather than the x86 processor. The ARM processor's simplicity allows it to be made cheaply with low power usage, both ideal properties of a mobile device. An x86 processor can go for hundreds; a decent ARM processor might only worth $40 dollars or so.

The x86 processor and the ARM processor are incompatible, but using abstraction of high-level and interpreted languages, programs can be compiled to work with both types. 

This abstraction is how the Linux operating system and every program made for it has managed to get onto mobile devices.

## Mobile Device Operating Systems

> Note: While Apple's iOS is of course, an operating system that works on mobile devices, this guide does not yet support Apple products.

### GNU/Linux

### Android Open Source Project (AOSP)

Android is, by far, the most popular mobile operating system. This is due to it's unilateral support by most major device manufacturers, and it's use of an interpreted programming language, Java.

The Android Operating system consists of the Linux Kernel, a unique userland and display manager, and the apps running in the Dalvik virtual machine.

A big feature of Android is that it is fully open-sourced. Anyone can pick it up and edit it to their liking, from big companies to XDA's ROM developers.

This openness creats the universe of Android flavors out in stores today and on XDA-Developers.

#### The Backend

The Linux kernel and the userland are the backbone of the Android OS. It is largely unremarkable and invisible to both developer and user.

What is interesting is that unlike other GNU/Linux systems, Android has completely replaced the GNU userland with it's own. This makes traditional Linux programs wholly incompatible with Android.

However, the use of the Linux kernel allows modders to run Linux chroots that bypass Android, or even replace Android with full desktop Linux.

#### The Dalvik Virtual Machine

The Dalvik VM is the true star of the show. It is analogous to Oracle's Java compiler, using the Java language with some Android specific classes. 

In theory, ARM code should work fine on all ARM processors; but the reality is that some ARM processors are different architectures in themselves. 

This is why Android uses the Java language for it's apps, running them in the Dalvik Virtual Machine to abstract away the unique quirks.

Unfortunately, interpreted languages use abstraction at the cost of optimization and speed, issues that plague Android's performance. As such, not all apps use Java; a select few use the Android NDK to create apps using native code, such as high-performance games.

#### Android Environment

The Android Environment consists of basic apps that make up the user experience. It is notable that every single app can be replaced by another, resulting in a unique experience for every manufacturer, and every Android version. The only thing that ties Android flavors together is their compatibility with Android apps.

* **Launcher** - The launcher is the face of Android, analogous to a Desktop Environment on PCs. It has a list of apps, and usually a homescreen to store widgets and shortcuts. Each launcher is vastly different from one another, from the long history of HTC Sense to the grassroots AOSP launcher mods.
* **Browser** - Accesses the World Wide Web.
* **Multimedia** - Plays music and video.
* **App Store** - Nearly all Android devices use the Google Play Store, though this is no requirement. Because a license has to be paid to Google to include it's apps on a device, some devices like the Kindle Fire replace it with their own, though the isolation has never been a good selling point.

### Android Fragmentation

Although Android was expressly designed to defeat architecture fragmentation and unify all mobile devices, manufacturers are often loath to bring updates to their phones.

Updates on Android are a big deal, adding greater features, massive API changes, and higher specs.

This is one crippling flaw of Android, and it's something that has foiled all attempts to rectify the issue. Manufacturers often release a flood of devices on the market, making it prohibitively expensive to update each one. Hardware makers are intensely secretive about their drivers, complicating the situation. Carriers hate bearing the network load of OTA updates. All these factors make any update difficult.

There is only one big exception; Google's Nexus devices. Designed as reference for in-house developers, Google has since began selling Nexus devices to provide the pure Google Experience that no mix of carriers and manufacturers cares to provide. All Nexus devices get the latest possible version.

### Android ROM development

As smartphone manufacturers began to adopt Android in lieu of Windows Mobile 6, the famous community of XDA-Developers moved their culture and methodologies to the open platform of Android. This includes special apps for  additional features, rooting to make new abilities possible, and optimized custom ROMs.

### Windows ARM

Although it is possible for Microsoft to compile Desktop Windows for the ARM processor, they have instead opted for reduced editions for some reason. 

Since most Windows programs are built for x86 and are closed source, it is difficult for Windows to straddle both platforms anyway.
