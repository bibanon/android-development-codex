While Android is open-source and uses the Linux kernel at it's core, it is not a full "GNU/Linux" operating system, opting to replace the GNU userland with it's own Java-based ecosystem.

This makes Android incompatible with actual Linux applications, and vice versa (though many are trying to port the Dalvik Machine there...)

Therefore, some developers are taking up the effort to bring true GNU/Linux distros to Android devices.

## Making Mobile Linux Usable

The desktop ecosystem has proven a hard sell on mobile touchscreen devices, and attempts to adapt the full power of GNU/Linux to the phone space has often met with failure.

Here is [[a project|Mobile Linux]] that attempts to find and fix those pressing issues.

## Chrooted GNU/Linux

All rooted Android devices can run full GNU/Linux in a chroot. Chrooted GNU/Linux systems

However, Android does not use the X Server, and as such, Linux applications can only be used through a VNC app. This increases overhead and restricts the full power of Linux.

## Native Linux

On some devices, there are efforts to run Linux natively, without the overhead of an Android chroot.

## Ubuntu on Nexus 7

Canonical has chosen the Google/[[ASUS Nexus 7]] as their official ARM tablet reference device, currently testing a one-click installer on it.

### Installation Instructions

## Ubuntu DEs

The Desktop Environment is the face of an operating system, and for most users, it *is* the operating system; defining the look, the feel, the experience of an OS.

Ubuntu currently uses the controversial Unity DE as the default on the Nexus 7. But somehow, even with the most powerful quad-core processor around, Unity does slow down the experience quite a bit. 

But with Linux, multiple desktopsHowever, the traditional, lighter desktop DEs (XFCE and LXDE) simply don't translate well to a tablet methodlogy. 

Here we will explore some candidates for a decent DE for mobile devices.

### KDE

What a surprise; KDE works extremely well on the Nexus 7, blowing Unity out of the water in performance and usability.

KDE's powerful customization options allow users to enlarge buttons and fonts to a decent size, sidestepping the issues of mouse-based design.

KDE also has a Netbook edition that gives a home screen and a single window interface; definitely a godsend on a tablet.

### GNOME 3

GNOME 3 has been immensely controversial for it's tablet inspired design, which does not always work well on the desktop. Yet ironically, even after losing so much in pursuit of that ideal, GNOME 3 has never made a serious focus on getting onto tablets.

GNOME 3 still beats out Unity on customization and extensions (which ends up being it's saving grace), and as such is definitely worth checking out.

Perhaps GNOME 3 might actually work quite well on a true tablet rather than the computer screen.

### KDE Plasma Active

If you want to tread some real crazy oceans, you can try out the experimental Plasma Active interface for Kubuntu.

For once, there is a Linux DE that is actually pretty nice to use on a mobile device.\\

### Hildon

Hildon is the mobile interface for Nokia's Maemo operating system, famously used in the Nokia N900, and as such the only one that succeeded in practice.

It might have the solution to all the issues that Linux faces in portable devices; as a tried and true mobile interface, it's extremely light, fast, and fun to use. But Hildon still uses the X Window Server, multitasks with WebOS style cards, and runs traditional Linux apps quite nicely. Hard to say that about any of the other DEs.

Unfortunately, with Maemo defunct, Hildon is just barely maintained by a select few from the Cordia Project. But hopefully, we can revive this good ol' interface as the mobile DE to conquer all. That is, *if* Plasma Active doesn't beat it first.

## Ubuntu on Android

Around February 2012, Canonical showcased their experimental "Ubuntu on Android" system, which merged the power of Ubuntu Linux with the mobile interface of Android. It seemed to have been based on Motorola's Webtop, which worked exactly the same way, albeit with a neutered version of Ubuntu.

Unfortunately, manufacturers were unamused, Motorola's Webtop was a flop, and the system seems to have disappeared into development hell.

Hopefully Canonical might release the sources for it, being an open, Linux based company and all that. Hopefully.
