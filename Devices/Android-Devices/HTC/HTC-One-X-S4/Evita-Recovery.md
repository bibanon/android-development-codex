The HTC One X Evita **only supports TWRP.** ClockworkMod may be possible, but is not recommended.

## TWRP

TWRP is the only officially supported recovery for the HTC One X Evita.

{{Note|If you used HTCDev to unlock, you can't use GooManager to install TWRP.}}

### Manual Method

1. Download [TWRP for the HTC One X Evita.](http://teamw.in/project/twrp2/99)
2. Reboot to Bootloader: Enable USB Debugging and use the command `adb reboot bootloader`.
3. Run this command to install the recovery:

    fastboot flash recovery <recoveryfilename.img>

4. Before using the custom recovery, it is strongly recommended to disable the confusingly named "Fast Boot" (unrelated to the `fastboot` command): **Settings->Battery->Fast Boot**. This makes it possible to use the key combination below in case your phone doesn't boot:

5. Turn off your phone and hold {{Key|Power}} and {{Key|Volume Up}} to enter the bootloader. You can then select `recovery` from the menu.

6. If you are using the recovery for the first time, the phone may reboot without showing the recovery. Just try again, and it will work.

Afterwards, you might want to install the GooManager app to easily interface with TWRP.

### GooManager

{{Note|You must already be rooted to install with this method; if you used HTCDev to unlock, you have to use the manual method.}}

Just install GooManager from the Play Store, go to Settings and install TWRP from there.

## ClockworkMod

{{Warning|We strongly recommend that you do not use this recovery. ClockworkMod does not work well on the HTC One X Evita. (even though it is fine for the international variant)}}

And **DON'T USE ROM MANAGER.**. It may brick your device.