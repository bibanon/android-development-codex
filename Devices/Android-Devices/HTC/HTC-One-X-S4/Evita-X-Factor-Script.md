{{Note|If the script fails in the middle, you may need to wipe your phone before trying again.}}

1. Download Djrbliss's X-Factor exploit:
* [Windows](http://vulnfactory.org/public/X_Factor_Windows.zip)
* [Linux/Mac](http://vulnfactory.org/public/X_Factor_Linux_OSX.zip) - Made with assistance from Jesse Osiecki (@jesseosiecki) for providing me with a working version (that Djrbliss ended up re-writing).

2. Extract the entire zip file.

3. Connect your device via USB, ensure you have the latest **HTC USB drivers** installed (only needed on Windows), and ensure **USB debugging mode** is enabled.

4. **Windows:** Double-click `run.bat` .
  * **Linux/Mac**: open a terminal, change directories to the extracted exploit, and run `./run.sh`.

5. Follow the instructions printed by the exploit. You will need to authorize two backup restorations during the exploit's execution.

6. If the exploit is successful, it will print `[+] Set CID!`. If it does not print this, the exploit has failed, so please do not continue.

7. The exploit will automatically reboot into bootloader mode. Press enter after bootloader mode is finished booting, and the exploit will print your CID. If the exploit was successful, it should return `11111111` as your CID.

8. If your CID was successfully set, press enter to generate an unlock token.

9. Visit `htcdev.com`, navigate to the **Bootloader unlock** section, choose **All other supported models** from the drop-down menu, and provide the unlock token when asked.

10. After unlocking the bootloader, you can flash a custom recovery partition via fastboot, boot into recovery mode, and use a recovery ADB shell or [install from an `update.zip` to install Superuser and su.](http://download.chainfire.eu/298/SuperSU/CWM-SuperSU-v0.99.zip)

11. From here, you now can install a [[custom recovery|OneXS4 Recovery]], which can install a custom ROM.