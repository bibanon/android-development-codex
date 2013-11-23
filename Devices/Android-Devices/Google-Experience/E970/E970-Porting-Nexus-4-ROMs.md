Because the hardware of the Optimus G E970 is almost identical to the Nexus 4, ROMs from the Nexus 4's massive ROM development scene can be easily ported over with few modifications onto the Optimus G.

This is a safer and better alternative to [[a full transformation into a Nexus 4|E970 Nexus 4 Conversion]], since you do not have to go through the trouble of flashing with LGNPST and finding out which fixes files to use.

## Nexus 4 ROMs to LGOG E970

[**Source:** XDA Developers - defcondev's Guide to porting Nexus 4 ROMs to LGOG E970](http://forum.xda-developers.com/showthread.php?t=2442593)

1. We recommend using a decent text editor, such as [Notepad++](http://notepad-plus-plus.org/download/v6.5.1.html) to edit these text files. It will save you a lot of frustration. Download and install that first.
2. Start by downloading the ROM zip file you want to port. Don't decompress the ZIP, as then you'll have to re-sign it before you can flash.
3. Open the `updater-script` file under `META-INF\com\google\android` with Notepad++ & remove the following line located at the top of the script. This line checks if the device is actually a Nexus 4.

        assert(getprop("ro.product.device") == "mako" || getprop("ro.build.product") == "mako");

4. Download the [`N4_Port_Package.zip` file from defcondev](http://forum.xda-developers.com/attachment.php?attachmentid=2253855&d=1379040436), which contains all of the libs & firmware you will need.
5. Use [7-Zip](www.7-zip.org) and drag the files from the ZIP you downloaded into their corresponding folders in the ROM you're trying to port. Don't decompress the zip file, just inject the files through 7-Zip.
6. Keep that zip file open, and delete `boot.img`. This is the Linux kernel used to boot the phone.
7. Find a working `boot.img` (custom kernel) to replace it. Some good examples are [dvhexer's CM10.1 Alternate for 4.2.2 ROMs](http://d-h.st/q7J), or his [CM10.2 Alternate for 4.3 ROMs](http://d-h.st/78w).
8. Open the `framework-res.apk` from the ROM you want to port using 7-zip.
9. Drag `storage_list.xml` (from the `N4_Port_Package.zip`) into the folder `res\xml`, overwriting the original.
  > **NOTE**: After flashing, the external SD header in `SETTINGS>>STORAGE` may show up as a random string (invalid SIM, Issued by, etc). if this happens for you, you'll have to decompile `framework-res.apk` from the ROM you wish to port & manually add the External SD lines in `storage_list.xml` and then recompile. (FIXME: Needs explanation)
10. (Optional, but recommended) Open `build.prop` in the ROM your're trying to port and change the device values to match your E970. But you could of course keep it as a Nexus 4 (mako) to fool the Play Store.
  * If you're stumped, use a `build.prop` [from a ROM made for the E970](http://forum.xda-developers.com/forumdisplay.php?f=1925) for reference.

## E973 or E975 ROMs to LGOG E970

Follow the same instructions as above, but use the [`OG_PORT_PACKAGE.ZIP`](http://forum.xda-developers.com/attachment.php?attachmentid=2253856&d=1379040436) instead.

## Sources

* [XDA-Developers: How to Port Nexus 4, E975, or E973 ROMs to E970](http://forum.xda-developers.com/showthread.php?t=2442593)