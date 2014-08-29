{{Note|Nlaunch is only compatible with the classic TI-Nspire models (Clickpad/Touchpad), both CAS and non-CAS. It hasn't been ported to the CX series as of this writing.}}

Nlaunch is a Boot2 exploit that allows users to run any kind of OS on the Nspire without regard for version, model, or source checking. This also makes it possible to dual-boot OS versions.

It replaces the OSLauncher of old, which was patched over by TI's update protections in OS 2.0.

## Preparations

Make sure that you have [[Ndless 3.1 installed|Nspire Ndless]] before proceeding.

[Download the nLauncher files](http://tiplanet.org/forum/archives_voir.php?id=10141) and extract them someplace accessible.

To send files to the TI-Nspire, use the **TI-Nspire Computer Link** program or some equivalent.

## nTNOC

nTNOC frees up space, and deletes the integrated Boot2 update package to keep it from interfering with the downgrade.

1. Send the `ndless` folder to the root of the calculator. Overwrite existing files/folders if necessary.
2. In the `ndless` folder launch `ntnoc`. If the calculator does reboot try again.
3. Type {{Key|Esc}} once complete.
4. Remove the `ntnoc` file in the `ndless` folder.

## Install Boot2 v1.4 

Boot2 v1.4 has an exploit that Nlaunch uses, so we need to install it.

1. In the `ndless` folder launch `nsNandMgr`.
2. Type {{Key|2}} then {{Key|2}} to flash Boot2 1.4.
3. Press {{Key|0}} to return to the main menu once complete.
4. Check the **Boot order** line on the screen:
  * If it shows **Boot2 Diags**, leave it alone.
  * If it shows **Diags Boot2**, press {{Key|4}} and then {{Key|6}} to switch and {{Key|0}}.
5. Press {{Key|0}} to quit.
6. To save space, remove the `boot2.img` and `nsnandmgr` files in the 'ndless' folder.

## Free Up Space 

{{Note|If you already have 16.2MB free space on non-CAS TI-Nspire or 14.8MB on TI-Nspire CAS}}

1. In the `ndless` folder, launch `ncleaner`.
2. Check all unneeded items with the {{Key|Click}} key and validate with {{Key|Enter}}.
3. Press {{Key|Esc}} once complete.
4. To save space, remove the `ncleaner` file in the `ndless` folder.

## Install nLaunch

Critor's original guide does not work for the Touchpad (which is not helped by the incorrect key combination). Therefore, I made a new method for the Touchpad to get nLaunch working.

### Touchpad Method

{{Warning|This method will format all data in the process. Make sure that all data on the calculator is backed up.}}

1. Unplug the USB cord and remove a battery for 5 seconds.
2. Put the battery back in but don't turn on the calculator.
3. Press and hold the 3 following keys: {{Key|Doc}} + {{Key|Enter}} + {{Key|EE}}
4. Without releasing those keys, press {{Key|On}} to turn on.
5. Around 60% of the loading bar, you should enter the maintenance menu.
  * If not, remove a battery and go back to step 2.
6. Type {{Key|4}} then {{Key|1}} to delete the OS and all data.
7. Once it's done, press any key to restart. You will get an **Operating system not found** message.
8. Plug in the calculator to the PC.
9. Send the `ndless_resources.tns` file to the `ndless` folder.
10. Send the entire `nlaunch` folder to the root of the calculator.
10. Send the 'nlaunch.tno' file for a non-CAS TI-Nspire or 'nlaunch.tnc' for a TI-Nspire CAS. Ignore any error messages.
11. If the calculator moves to the "Loading Operating System" message and boots into v3.1, nLaunch was successfully installed.
  * If it's still stuck at the **Operating system not found** message, try again from step 10.

### Clickpad Method

1. Send the `nlaunch` folder to the root of the calculator.
  * Overwrite existing files/folders if necessary.
  * If it doesn't fit, remove files in other folders. Just don't delete `ndless_resources.tns` in the `ndless` folder.
2. Unplug the USB cord and remove a battery for 5 seconds.
3. Put the battery back in but don't turn on the calculator.
4. Press and hold the 3 following keys: {{Key|Home}} + {{Key|Enter}} + {{Key|P}}
5. Without releasing those keys, press {{Key|On}} to turn on.
6. Around 60% of the loading bar, you should get the maintenance menu.
  * If not, remove a battery and go back to step 2.
7. Once it's done, press any key to restart. You will get an **Operating system not found** message.
8. Plug in the calculator to the PC.
9. Send the `ndless_resources.tns` file to the `ndless` folder.
10. Send the 'nlaunch.tno' file for a non-CAS TI-Nspire or 'nlaunch.tnc' for a TI-Nspire CAS. Ignore any error messages.
11. If the calculator moves to the "Loading Operating System" message and boots into v3.1, nLaunch was successfully installed.
  * If it's still stuck at the **Operating system not found** message, try again from step 10.

## Using nLaunch Dual-boot

In this example, we are currently using OS v3.1 + Ndless.

To switch to OS v3.2:

1. Enter the `nlaunch` folder in the Nspire.
2. Rename the `phoenix.back` file to `phoenix` .
3. Press the {{Key|Reset}} button on the back of the calculator or remove a battery for 5 seconds and turn back on

The calculator will restart into OS v3.2.

To go back to OS v3.1 + Ndless, just repeat the same steps.

## Creating your own images

(needs elaboration)

### CAS Firmware on Non-CAS Calculators

> **Warning:** We do not sanction nor recommend the abuse of nLaunch to bypass test restrictions on CAS calculators. We warn you that some testing organizations will check for and reprimand violators, [such as in Portugal.](http://tiplanet.org/forum/viewtopic.php?t=12227)

Since CAS calculators are physically the same as non-CAS calculators, we can use nLaunch to bypass model checking and install CAS firmware on the cheaper, non-CAS calculators. nLaunch bypasses all known protections made by TI, such as the following:

* either a development or production OS (the RSA signature is ignored)
* accordingly, any modified official OS
* either a CAS or non-CAS OS (bits indicating the type of model are ignored)
* an OS whose version number is earlier than the minimum version normally installable, written before the beginning of the NAND filesystem (the anti-downgrade protection is ignored) 

It was an unintended and undocumented side effect of the power of nLaunch, and took quite a bit of innovation and risk-taking to produce, putting it far beyond the layman's ability.  

Nevertheless, TI was forced to release OS 3.2.4 to disable both Ndless and nLaunch in response. If you are a concerned educator, simply use the Nspire crib to update all your student's Nspires before a test, which will remove Ndless, nLaunch, and any custom OSes, returning them to their original state.

## Sources

* [Omnimaga - nLaunch](http://www.omnimaga.org/index.php?topic=15464.0)
* [TI-Planet: Critor - Installation Ndless 3.2 Switch](http://tiplanet.org/forum/viewtopic.php?t=11025&p=134150&lang=en)
* [Hackspire - Operating System](http://hackspire.unsads.com/wiki/index.php/Operating_System) - States that the correct key combination to enter maintenence mode on the Touchpad is Doc+Enter+EE .
