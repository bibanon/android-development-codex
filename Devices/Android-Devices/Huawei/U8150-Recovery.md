Custom Recoveries are used to install custom ROMs to Android devices.

## ClockworkMod

ClockworkMod is the most popular and common Android custom recovery out there.

### ROM Manager

As long as ROM Manager is available, you can use the **ROM Manager** app to easily install ClockworkMod Recovery once rooted.

1. Install **ROM Manager** from the Play Store.
2. Open up ROM Manager and select **Install ClockworkMod Recovery**. Scroll down until you find **Huawei U8150**.
3. Follow the directions and your custom recovery is installed.
4. Now you can download a custom ROM and install it. Select **Reboot Into Recovery** to jump directly into ClockworkMod directly.

### Manual Computer

First, ensure that you have 

* [[Android SDK Platform Tools]]

		adb reboot bootloader
		fastboot flash recovery cwm-recovery.img
## UltraJack

UltraJack is an older type of recovery based on Amon Ra. It is pretty much does the same thing as ClockworkMod.

### Windows

1. Download UltraJack here, and extract it somewhere.
2. Turn off your phone and hold {{Key|Power}} + {{Key|End Call (Red)}} + {{Key|Volume Down}} for five seconds. This will enter Bootloader Mode.3. The phone will be stuck on the boot screen. Plug it into the computer.
4. Windows should automatically install the drivers. 
  * If it doesn't, download the PDANet drivers from here and then install it.
5. Go to the folder where UltraJack was extracted and click **Install Recovery Windows**.
6. If it is installed, it should reboot by itself. 
7. The phone will take a while to load, so be patient.

To reenter UltraJack Recovery afterwards, turn off the phone and hold {{Key|Power}} + {{Key|Volume Up}} + {{Key|Start Call (Green) Key}}.

### Manual On-Phone

### Manual Computer

First, ensure that you have [[Android SDK Platform Tools]] installed. Then just use this command:

    adb reboot bootloader
    fastboot flash recovery cwm-recovery.img