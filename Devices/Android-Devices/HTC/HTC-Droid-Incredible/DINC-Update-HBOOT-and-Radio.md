Since downgrading to Froyo also downgrades the HBoot and the Radio, you will want to flash the new version back in for more features and stability.

## 4.08.605.15 radio and 1.07 hboot:

Download both files below and flash them both. One is the hboot, one is the radio.

[PB31IMG-4.08.605.15-hboot-1.07.zip](http://www.mediafire.com/?ah7gvum7ndainc7)
md5: db019de010ae8ef6a2c250fd8b378ba1

[PB31IMG-4.08.605.15-radio.zip](http://www.mediafire.com/?4g8jqiaxlxmxgpm)
md5: cb8b3ac72c0ae13e1f088b302135bd58

## Flashing the files

> NOTE: The bootloader may still be in its previous state when you re-flash it (i.e.,if it was unlocked,it will still be). If for some reason, you find it to be locked, you can use your original `unlock-code.bin` to re-unlock it, if you wish.

> **CAUTION:** Make sure to double check the md5s, as a bad hboot or radio flash can and will leave your device unworking and unrecoverable. Also, your battery should be more than 50% charged before proceeding.

Boot your phone to `fastboot` mode (see Things to Know), and run the commands below:

    fastboot devices
    fastboot erase cache
    fastboot oem rebootRUU
    fastboot flash zip your-zipfile-name-here.zip
    fastboot reboot-bootloader
    fastboot reboot
    
Repeat this process for the other zip file. Once you've finished that, you're now ready to get some custom ROMs.
