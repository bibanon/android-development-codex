In it's full glory, GNU/Linux on mobile devices has always been a hard sell, even in light of it's massive power. And when exceptions to the rule come up, (Android, WebOS, Meego, Tizen), they end up ditching the GNU userland and Linux compatibility.

What is wrong with Linux on the mobile space, and what can we do to fix it?

## Issues

* Mouse-based Desktop Environments don't adapt well to touchscreens.
* Most Linux applications are not optimized for the mobile space.
* 

## Examples

Some Linux systems manage to buck the trend and work great in the mobile space. Here are a few examples:

* **Maemo** - The famous Linux distro built for Nokia's N900. Key to it's perfection was the Hildon "Desktop" Environment and Maemo's ecosystem of Linux apps adapted to the mobile space. Somehow, the weak 600MHz OMAP gives better performance than the best Android device out there. Unfortunately, Nokia's company politics screwed over their only saving grace.
	* **Hildon** - An extremely light, snappy, and quite pretty "desktop" environment that adapts traditional X based Linux DEs to the mobile world. It's multitasking and widgets were innovative, fun, and way ahead of it's time, and the clean Nokia Symbian theme gave it a powerful aesthetic charm. The fact that users still love their weak little N900s to this day is a testament to it's quality, which that no other DE has replicated.
	
* **KDE Plasma Active** - Another viable candidate for a decent phone DE. Works nicely with touchscreens, has a suite of tablet-optimize apps, and just feels right compared to the others. Plasma Active embraces a new activities methodology and puts greater emphasis on the semantic desktop.

* **Meego Harmattan** - The long awaited successor to Nokia's Maemo OS, and was the mobile Linux distro to conquer all. However, it was only used once on the Nokia N9 and then immediately ditched for Windows Phone 7. There were a ton of nice Qt apps that worked for it, although it does drop direct Linux app support.
	* **Harmattan Swipe UI** - "Once you swipe, you'll never go back". The Swipe UI was unique to the Nokia N9, and felt natural and inituitive.

## Creating the perfect mobile distro

### Keys to success

* Use a common, stable Linux distro as basis (Debian, Ubuntu, Mer)
* Use a DE that works well on touchscreens, stays light, and manages to be fun to use.
* Use existing, "off-the-shelf" components as much as possible. 

### Kubuntu Active ARM

Currently, Plasma Active is being tested by the Kubuntu team on a secret repository and experimental distro. It works quite nicely, but needs to be recompiled for ARM devices. (look into merging with Ubuntu on Nexus 7)

### Cordia

Cordia is a project to restore Hildon to it's former glory.

### Bodhi Linux Mobile

An E17 based system.
