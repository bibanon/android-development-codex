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

> **Note: You should only use this method if your USB port is broken. It's a bit riskier than using the computer for flashing.**

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

Now we can finally install Android using cLK. There are three ways to do so:

* [[Install Android to Phone Memory|HD2 cLK Android NAND]]
* [[Install Android with NativeSD|HD2 Android NativeSD]]
* [[Install Android with old SD Method|HD2 Android SD]]
