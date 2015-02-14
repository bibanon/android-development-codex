## ADB & Fastboot installation

1. Download a slimmed version of adb [here](http://d-h.st/08w)
2. Press Window Key + R and then type in `cmd` to open the command line
3. Extract the file and go to the directory where you extracted the file
4. In the windows command line, type `cd example/android-sdk-windows/platform-tools`
   * Replace "example" with the directory where you extracted the file, such as C:/Users/Username/Downloads
5. On your phone enable developer settings
   * Click About phone. Tap Build number until it says that you have enabled developer settings. Now go back to settings and click Developer options. Look for USB debugging or Android debugging and enable it.
6. Plug your phone into your computer with your usb cable
7. On the windows command line type `adb devices`
   * The command line should show you your phone's serial number
8. Your computer is now ready to use adb

### Sources
* [Official Oneplus One Guide](https://forums.oneplus.net/threads/guide-oneplus-one-how-to-unlock-bootloader-install-custom-recovery-and-root.64487/)