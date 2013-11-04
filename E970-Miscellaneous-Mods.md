### Symlink the SDCard to a folder on the Internal Storage

Because apps almost always save to the internal storage, and generally don't see the other SDCard; and for greater accessibility in general; it's a good idea to symlink the sdcard to a folder on the Internal Storage, for easy access by you and any app.

### Symlink Internal OBB Folder to Gamedata on External SDCard

[OBB to SD](http://forum.xda-developers.com/showthread.php?t=2056662)

OBB Files are game binaries, and those can get pretty big, pretty fast.

### Changing Menu button into a Recent Apps button

The Menu button is a dated leftover from an older time, and is strongly discouraged by Google. Multitasking demands the availability of a Recent Apps button at all times, and holding the home button can get to be annoying.

Some custom ROMs have the option built in, but if they don't, it just takes a change in a configuration file (look it up)

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