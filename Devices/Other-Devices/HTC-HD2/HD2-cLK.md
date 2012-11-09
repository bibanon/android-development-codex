cLK is a hot new bootloader that is fully open-sourced, still updated to this day, and professes to make the HD2 as close to a normal Android device as possible, with HBOOT and fastboot support. It's a better choice if you only plan to use Android ROMs.

Unfortunately, as such, it is currently unable to run Windows Phone 7 ROMs, and has no RMNET support. However, it will be good to watch it's progress, since is the most promising bootloader available for the HD2.

## Features

* Off-Mode Charging
* Ability to resize partitions without a computer
* Connection Type = PPP, no RMNET
* Better ROM manager support
* Faster bootup
* Works better in general
* Never seen after install unless needed
* Built-In Flashlight
* Clk 1.5 = No need for Usb
* Open-source and still in development
* Many more features as time goes on!

## Installing cLK 1.5

1. Download the latest cLK from [this thread.](http://forum.xda-developers.com/showthread.php?t=1114053)
2. Unzip file to someplace convenient.
3. Open HD2 Toolkit.
4. Shutdown phone.
5. Press volume down + end key and hold until tri-colored screen appears.
6. Format with **Wipe (Task 29)** using the HD2 toolkit. The phone will no longer have an OS of any kind, so get to the tri-colored screen again.
7. On bottom left of HD2 toolkit theirs an option to **Install Custom RUU**, click **Browse**.
8. Navigate to the place you previously unzipped `leoimg.nbh` and select that file.
9. Click **Install RUU**. 
10. You're done, now install some new OSes! Jump to the [[next section.|HTC HD2#Installing Operating Systems with cLK]]

## Installing CLK 1.5 Without USB

> **Note: This method is slightly more prone to bricking, you should only use this method if your USB port is broken.**

1. Format SD card.
2. Download **cLK v 1.5** (The attached `LEOIMG.zip` file)
3. Extract this file somewhere convenient
4. Put `leoimg.nbh` (from the `LEOIMG.zip` file) onto root of SD card.
5. Power off phone.
6. Press *volume down + end* .
7. Install by following on screen directions. (press end key)
8. Remove the battery.
9. Replace battery and power on the phone.
10. Power up phone, and you will have cLK.

## Installing Android with cLK

### Install Generic Google ADB Drivers

In order to install a recovery, you will need to install the drivers to interface with cLK.

* [Uploaded.to - Google ADB Drivers](http://uploaded.net/file/ypksx8zb)

After that, power on phone and it should boot into cLK.  When Windows prompts you to install drivers, select the folder where you extracted them.

Power on phone and it should boot into cLK. Plug up to computer then do this from the start menu:

    Start>Control Panel>Hardware & Sound>Device Manager

An 'unknown device' should be shown. Right click it and select **Update driver software**.

When menu pops up select **Browse My Computer**.

Select the folder of drivers you previously downloaded, click **Next**, and the drivers will be installed.

### Using cLK after installing Android

* Holding down any key ( except power ) will show text console
* Holding down the **Home key** will enter Recovery
* Holding down the **Back Key** will enter fastboot mode

### Flashing ClockworkMod Recovery

1. Open HD2 Toolkit. Make sure your HD2 is plugged in.
2. Select **cLK Install Recovery**.
3. Under **Functions**, click **Install**.
4. A dialog box will pop up. Press **Yes**, since Android has not yet been installed.
5. A Command Prompt will pop up. Follow the directions to flash (press **Enter** twice).
6. Once the flash is complete, press **Enter** to return to the HD2 Toolkit.
7. The device will reboot twice, taking you back to cLK.

### Flashing ROMs with ClockworkMod

(use a template for this)
