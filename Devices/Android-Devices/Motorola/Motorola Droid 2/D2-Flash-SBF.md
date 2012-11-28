Refer to this whenever the guide tells you to "install an SBF". This is Motorola's way of flashing ROMs.

The Mac/Linux methods are *strongly recommended*. RSDLite on Windows has been buggy and finicky, which can result in critical errors. But don't worry; we've got easy-to-use LiveCDs for you Windows lovers.

### Linux LiveCD

This is perhaps the simplest, easiest, and safest way to flash SBFs. Just burn this Linux image to a CD, and run it on your computer. In fact, it will even root the phone for you.

1. Download the LiveCD from [here](https://rapidshare.com/files/3401109295/Droid2_621_SBF-and-RootCD.iso).
2. [[Burn the downloaded image to a disc|LiveCD]], or a [[USB Drive|LiveUSB]].
3. Set your computer to boot from CD or USB, and insert your live media into your computer.
4. Follow the instructions that the Linux LiveCD gives you.

### Mac OS X and Linux (sbf_flash)

If you already have Linux or Mac installed, you can just use the [`sbf_flash` program](http://blog.opticaldelusion.org/2011/02/sbfflash-updates.html).

{Warning|If you are flashing an official ROM, please do not flash any older versions! Downgrading will brick your phone. To be safe, only use [this SBF ROM](https://sites.google.com/site/motosbf/droid-2-sbf-files)}

1. Download the SBF file that you need. If it is compressed in any way, extract the SBF.
2. [Download the `sbf_flash` program.](http://dl.opticaldelusion.org/sbf_flash)
3. Move your chosen SBF file to the same folder as the `sbf_flash` program.
{{Warning|Make sure your phone is **fully charged**. *DO NOT CONTINUE* if it is anything less than 100%! The Droid 2 cannot charge within bootloader mode!}}
4. Now turn off your phone. Hold {{Key|Volume Down}} + {{Key|Camera}} button.
5. Power on the phone. You should get a screen that looks like this:

		Bootloader
		30.04
		 
		 
		 
		Battery OK
		OK to Program
		Connect USB
		Data Cable

6. Enter the command below as root, and replace "<filename.sbf>" with the filename of your SBF file.

{{Cli|# ./sbf_flash <filename.sbf>}}

7. Wipe the cache as shown in the next section. After that, you can try and root your phone.

#### Wiping the Cache

It's recommended to wipe the cache after every SBF flash. Without it, sometimes your phone won't boot.

1. Power off your phone. Hold {{Key|Home}} and press {{Key|Power}} - and keep the {{Key|Home}} button pressed until you see a little Android with a big exclamation mark. 

2. Hit the {{Key|Search}} button. If that doesn't work, press either one of the {{Key|Volume Keys}}. Either way, you should get to a little menu overlaid on the exclamation. 

3. Use the {{Key|Volume Keys}} to scroll to **wipe cache partition** and hit {{Key|Power}} to select it. Now scroll to **wipe data/factory reset** and use the {{Key|Power}} button to select.

### Windows (RSDLite)

{{Warning|RSDLite is known to be finicky, problematic and error ridden. This could be fatal for your phone. If at all possible, use the above methods!}}

RSDLite depends on Windows, which can take a bit of work to get the drivers working.
