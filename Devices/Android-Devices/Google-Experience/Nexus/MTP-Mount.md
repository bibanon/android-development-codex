All Google Nexus devices after the Galaxy Nexus use a long abandoned file transfer format called MTP instead of USB Mass Storage. While this makes it possible for Windows users to write to the faster ext4, Linux and Mac need to be set up to use this once irrelevant system.

## Mac OS X

## Linux

### Install Packages (Linux)

Find the system you are using and run these commands in a terminal.

Ubuntu/Debian:

    # apt-get install mtp-tools mtpfs		# As root user

Arch/Chakra:

    # pacman -S libmtp		# From official repositories
    $ packer -S mtpfs		# From the AUR (for Chakra, use the `ccr` command)

### Configure udev rules

1. Edit the following file (or create it if it doesn't exist) and add these rules:

    /etc/udev/rules.d/51-android.rules

    # LG - Nexus 4
    SUBSYSTEM=="usb", ATTR{idVendor}=="1004", MODE="0666"
    # ASUS Nexus 7 and Samsung Nexus 10
    SUBSYSTEM=="usb", SYSFS{idVendor}=="18d1", MODE="0666"

2. Make the file executable:

    sudo chmod +x /etc/udev/rules.d/51-android.rules

3. Restart udev

    sudo service udev restart

4. Create mount point and permissions. If you use multiple Nexus devices, you might want to add a number to the end so that they don't conflict.

    sudo mkdir /media/nexus
    sudo chmod 755 /media/nexus

5. Plug in the Nexus 4 and make sure MTP is enabled.

6. Mount with the following command:

    sudo mtpfs -o allow_other /media/nexus

7. When you have completed your work you must unmount:

    sudo umount /media/nexus
    
### Bashrc Alias

To make things more convenient, you can add these aliases to your `.bashrc` file rather than using steps six and seven. 

{{Note|If you named the mount point something different, make sure to edit the folder names in these aliases.}}

    alias mountnex="sudo mtpfs -o allow_other /media/nexus"
    alias umountnex="sudo umount /media/nexus"

Now you can just run `mountnex` to mount the device, and `umountnex` to unmount the device.
    
## Sources

* [Mount Nexus 4 in Linux](http://forum.xda-developers.com/showthread.php?t=2004182)