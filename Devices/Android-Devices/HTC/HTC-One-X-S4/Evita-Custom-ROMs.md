When the HTCDev unlock is used, the phone will remain S-ON. This means that you'll need to manually flash `boot.img` from a computer every time you change ROMs.

## Explanation

When the HTCDev unlock is used, the phone will remain S-ON. This means that the bootloader is not fully unlocked, and the `boot` partition can only be accessed from a computer, not a custom recovery. 

As a result, every time a new kernel needs to be used (when switching from Sense to CM10, or AOKP to PA), the `boot.img` containing the kernel needs to be manually flashed using fastboot on a computer.

## Reflash `boot.img`

### Boot.img Automatic Flasher

### Manual Method

After installing a custom ROM, your phone might not boot. If it doesn't, you'll need to manually flash `boot.img` from a computer.

1. Open up your custom recovery's zip archive and extract a file called `boot.img` . Move that file to the folder where the `fastboot` program is stored.
2. Turn off the phone and hold {{Key|Power}} + {{Key|Volume Down}} to enter bootloader mode.
3. Select `fastboot` from the menu.
4. Run this command from your computer.

    fastboot flash boot boot.img

5. Reboot your phone.

    fastboot reboot