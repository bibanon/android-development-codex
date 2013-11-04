Unlike the Nexus 4, you will need to install a special zip file (using the custom recovery) to fix the following:

* LTE & GPS(JB AT&T modem)(4.2.2)
* Volume keys
* Internet APNs(AT&T)
* SD card fix (stock 4.2.1 & 4.2.2 based roms only for now)
* NFC(Might or might not work)

[Flash Fixes zip file](http://forum.xda-developers.com/showthread.php?t=2117576)

(we need to figure out how this thing works...)

### Customize the Fixes zip file

Each custom ROM variant uses a unique `framework-res.apk` file that cannot be used in other variants, so we cannot make a universal fix. 

However, you can modify the fixes file to work with any other ROM in less than 1 minute. (We should really create a script to do this automatically, though... Maybe a zip.js app, or integration with Android auto-patcher?) Download the fix zip file and follow these instructions:

1. Download and install [7zip](http://www.7-zip.org/).
2. Get *the zip file of your current custom ROM*, and view the files inside.
2. Extract the `framework-res.apk` file from your custom ROM's zip file. It is found under `framework/`.
3. Right-click `framework-res.apk`, go to the 7zip menu, and select **Open archive**.
4. A new window will open. Browse to `res/xml/` and copy [this modified `storage_list.xml`](https://dl.dropbox.com/u/35009953/storage_list.xml) into it (to download, click the link, right-click save-as).
5. It will ask to to overwrite, click **Yes**.
6. Replace the `framework-res.apk` in **the fixes zip file** (under the folder `framework/`) with your modified one.
7. You can now flash the modified fix to your phone.