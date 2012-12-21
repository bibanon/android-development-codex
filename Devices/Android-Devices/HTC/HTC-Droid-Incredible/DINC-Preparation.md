## Files to Get

You will need to download two files and extract them.

* [miniadb_inc.zip](http://dl.dropbox.com/u/22186524/files/miniadb_inc.zip) - Modified from Scotty's original miniadb package. Now with Linux installation instructions and binaries, and cleaned up to work for all phones.
* [dinc_2.3.4_unlock_files.zip](http://dl.dropbox.com/u/22186524/files/dinc_2.3.4_unlock_files.zip) - Contains all the little files you need to work with your droid. It's just a compilation of the links in the next section.
* PB31IMG for froyo: [PB31IMG.zip](http://www.mediafire.com/?uvha2u2pv3xp8d5)
  # md5: `31bb1611a0fa8197d447c0438426717e`

Then, you'll need to go to [HTCdev - Unlock Bootloader](http://www.htcdev.com/bootloader) and register an account.

Finally, install the [[Android SDK Platform Tools]].
  
### Included in the archive

This is a list of what is inside the archive and where else to get the files. Just download the one above and you'll have everything.

* [miniadb_inc](http://www.mediafire.com/?o6c4kq4wyccuom5)
  * md5: `7c5211686a20b558ccd660c782f82e2b`
- PB31IMG for froyo: [PB31IMG.zip](http://www.mediafire.com/?uvha2u2pv3xp8d5)
  # md5: `31bb1611a0fa8197d447c0438426717e`
- superuser files: [superuser 3.07](http://downloads.androidsu.com/superuser/Superuser-3.0.7-efgh-signed.zip) (found on [revolutionary public wiki](http://unrevoked.com/rootwiki/doku.php/public/revolutionary))
- forever patch [unrevoked-forever](http://downloads.unrevoked.com/forever/current/unrevoked-forever.zip) from [public:forever RootWiki](http://unrevoked.com/rootwiki/doku.php/public/forever)

## ADB

If you already have ADB installed, skip this section.

### Prepare ADB (Windows)

> Might want to incorporate into one big **Android SDK Platform Tools** section

You will need to get the proper drivers to interface with your phone. You can choose either to install HTCSync for the drivers, or better yet, use the [modified HTC drivers from revolutionary](http://downloads.unrevoked.com/HTCDriver3.0.0.007.exe). Follow the instructions there to install them.

First, unzip your `mini-adb-inc.zip` file into the root folder of your hard drive, such as `C:\`. This means the top level, not inside any folders, so just copy and paste the folder onto `C:\` with everything else that is there.

You actually can call it whatver you want,but directions from here forward will assume this folder to be named `miniadb_inc`

Open a command window. In Windows 7, click the start bubble in the lower left and type `command` in the search box to find the Command Prompt application. In Windows XP, go to **Run** and type `cmd.exe` to run it.

Type the following at the prompt in your cmd window to change to your `miniadb_inc` directory. 

    cd c:\miniadb_inc

Your command prompt should display `c:\miniadb_inc>` provided you: 

1. unzipped the miniadb_inc zip
2. put the folder on your c drive
3. didn't change the name

Now make sure usb debugging is checked in **settings/apps/development** on your phone,and plug your phone into your PC with a usb cable

Make sure your phone is being recognized- type:

    adb devices

If your drivers are installed correctly, this should show your phone's serial number. You should hear the **found device** noises when you plug your phone in. if it starts installing drivers,wait for it to finish before typing the `adb devices` command.
