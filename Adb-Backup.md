Backing up your data is very important, especially when you are about to bootloader unlock your device.

## Manual Adb Backup

* **Notice** you need to have adb installed for this to work

1. Enable USB debugging
   * Go into settings and click About phone. Tap Build number until it says that you have enabled developer settings. Now go back to settings and click Developer options. Look for USB debugging or Android debugging and enable it.
2. Set a Desktop backup password
   * Go into settings in Developer options and select Desktop backup password. Leave the top blank and type a Desktop backup password below
3. Open the command line and type `adb backup -all -nosystem -shared -apk` to backup app data, app apks, and Internal Storage
   * Type in your Desktop backup password when the dialog shows up
   * For a long time you will not see adb show anything at all, don't worry about this
   * The .ab file that is created is somehow compressed, therefore the .ab file won't be as big as the files on your phone
