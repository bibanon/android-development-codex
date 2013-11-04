### Better Camera/Video Quality

[Source: XDA-Developers- _Epic's Camera Mod](http://forum.xda-developers.com/showthread.php?t=2073013)

This is based on a mod for the Nexus 4, which increases camera quality by tweaking a few settings.

1. Download the mod [from this thread](http://forum.xda-developers.com/showthread.php?t=2073013) and put it on the root of your memory
2. Reboot into recovery
3. Clear Cache/Dalvik Cache (Just to be safe...)
4. Install Camera Mod
5. Clear Cache/Dalvik Cache (Just to be safe...)
6. Reboot, and the camera mod will be installed.

### Changing Menu button into a Recent Apps button

The Menu button is a dated leftover from an older time, and is strongly discouraged by Google. Multitasking demands the availability of a Recent Apps button at all times, and holding the home button can get to be annoying.

Some custom ROMs have the option built in, but if they don't, it just takes a change in a configuration file.

1. Use a [root browser](https://play.google.com/store/apps/details?id=com.jrummy.root.browserfree) to go to `/system/usr/keylayout`
2. Click and hold on `keypad.nl` and choose **Open in text editor** from the menu.
3. Find this line:

        key 139   MENU			VIRTUAL

4. And replace it with these lines. (The first line below is disabled using a `#` character, just in case you want to switch back)

        #key 139   MENU			VIRTUAL
        key 139   APP_SWITCH		VIRTUAL

5. Reverse these steps if you ever want to change back. These changes will be lost upon update or flashing a new custom ROM, but just do this process again.

### Disabling Capacitive Buttons

[Source: XDA-Developers - Samomamo's Guide to Disabling Capacitive Buttons](http://forum.xda-developers.com/showthread.php?t=2084390)

Some people don't like the physical capacitive buttons at all, or might prefer to use Paranoid Android's PIE.  Here's how to disable them:

#### Enable Navigation Bar

1. Add the following line at the end of buid.prop file
        qemu.hw.mainkeys=0
2. Upon reboot, you will have a virtual nav-bar like on the Nexus 4.

#### Disable Hardware Keys

1. Use root explorer to go to `/system/usr/keylayout`
2. Click and hold on `keypad.nl` and choose **Open in text editor** from the menu.
3. Find these lines:

        key 158   BACK			VIRTUAL
        key 172   HOME	 		VIRTUAL
        key 139   MENU			VIRTUAL

4. And replace them with these lines. Basically, we just added a `#` before the line to disable the keys.

        #key 158   BACK			VIRTUAL
        #key 172   HOME	 		VIRTUAL
        #key 139   MENU			VIRTUAL

5. To disable the capacitive button lights, go to `settings>display>front key light` and disable it.
6. Reverse these steps if you ever want to change back. These changes will be lost upon update or flashing a new custom ROM, but just do this process again.

### Symlink Internal OBB Folder to Gamedata on External SDCard

[OBB to SD](http://forum.xda-developers.com/showthread.php?t=2056662)

OBB Files are game binaries, and those can get pretty big, pretty fast.