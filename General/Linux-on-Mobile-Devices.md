## Linux on Mobile Devices

Although Android is based on the Linux kernel, it is the GNU userland that really makes up "GNU/Linux", the operating system that we know and love; and in Android, it has been completely supplanted by their own, Apache-based userland, "Android/Linux".

As a result, Android is binary-compatible with Linux programs, but cannot run anything graphical without large additions.

There are ways to add Linux compatibility 

### Linux Chroot (All Devices)

Because Android uses the Linux kernel, all we need to do to install GNU/Linux is to change the apparent root directory. This is called a `chroot`.

This method works on every device, and is ideal for command-line applications.

However, since Android is still in control of the display drivers, X Windows applications must use a VNC Remote Desktop. This can add significant overhead on top of the existing Android system, so only newer smartphones can run graphical apps efficiently.

### Native GNU/Linux Ports

Full blown GNU/Linux, with full compatibility for any ARM-compiled "Linux" app.

* Ubuntu Desktop (Nexus 7)
* KDE Plasma Active + Mer (Nexus 7)
* UbnHD2 (HTC HD2)
* (HTC Desire HD)
* (HP Touchpad)

### Linux Kernel Based

Ports of mobile operating systems that use the Linux kernel, but are not "GNU/Linux" and have their own applications.

* Ubuntu Phone (Nexus 4, Galaxy Nexus)
* Open WebOS (Galaxy Nexus)
* Firefox OS (Galaxy Nexus)
