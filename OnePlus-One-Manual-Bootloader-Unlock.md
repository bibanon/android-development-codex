## Unlocking

* Notice: You need to have adb and fastboot configured before continuing.

#### Preparation
1. Turn on USB Debugging Settings/Developer Options/USB Debugging if it isn't already enabled.

  *  If you do NOT see Developer Options in Settings, go to Settings/About Phone, scroll down to the bottom, and tap on the Build Number section 7 times. A pop-up should show telling you that you are "now a developer."

2. Turn your phone off. Then enter fastboot mode by pressing the _Volume up + Power_ buttons at the same time.
3. Plug your phone into your computer and using fastboot type: 
`fastboot devices`

* You should see your device listed with its serial number; if you don't you probably didn't set up drivers correctly. 

4. If you see your device listed you can continue to Unlocking

#### Unlocking 
* **THIS STEP WILL WIPE EVERYTHING OFF YOUR PHONE, INCLUDING THE INTERNAL SDCARD**
1. Type `fastboot oem unlock` 
2. You can now reboot with the following command: `fastboot reboot`
3. At this point you should disable CM Recovery Protection
> On your phone go to Settings > Developer options. Then disable the 'Update recovery with system updates' option.

### Sources
* [Oneplus One Official Guide](https://forums.oneplus.net/threads/guide-oneplus-one-how-to-unlock-bootloader-install-custom-recovery-and-root.64487/)