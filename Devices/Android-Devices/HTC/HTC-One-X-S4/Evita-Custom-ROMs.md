## Flashing the boot partition on HTC S-ON devices

When the HTCDev unlock is used, the phone will remain S-ON. This means that you'll need to manually flash `boot.img` from a computer every time you change ROMs.

{{Note|If you're updating to a newer version of the same ROM, you generally don't need to flash boot.img; but this is not a guarantee.}}

### Boot.img Automatic Flasher

(get link from XDA)

### Manual Method

After installing a custom ROM, your phone might not boot. If it doesn't, you'll need to manually flash `boot.img` from a computer.

1. Open up your custom recovery's zip archive and extract a file called `boot.img` . Move that file to the folder where the `fastboot` program is stored.
2. Turn off the phone and hold {{Key|Power}} + {{Key|Volume Down}} to enter bootloader mode.
3. Select `fastboot` from the menu.
4. Run this command from your computer.

    fastboot flash boot boot.img

5. Reboot your phone.

    fastboot reboot