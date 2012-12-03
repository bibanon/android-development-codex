{{Note|I'm not the most kernel-savvy person, so hopefully someone with real knowledge can improve this guide.}}

Even though the Nexus 4 has the best CPU of it's time, the results are somehow less than optimal. The primary culprit is the kernel's closed-source CPU Governor, `mpdecision`, which gives sub-optimal performance.

It is strongly recommended to change to a different kernel that uses `Intellidemand`. Most custom ROMs will have it preinstalled.

## Nexus 4 Hardware

For one, the Nexus 4's hardware does not dissipate heat efficiently, in comparison to other phones like the LG Optimus G and the HTC Droid DNA. Those phones don't have heat problems.

This makes the phone excessively hot during heavy use, and forces the processor to throttle performance to prevent damaging the battery. 

Short of heavy hardware mods and leaving your phone in the freezer, there's no known way to combat this issue.

It doesn't help that the default CPU governor makes the problem worse with suboptimal performance.

More info can be found at Anandtech.

## Qualcomm mpdecision (Make Poor Decision)

`mpdecision` is the proprietary CPU governor on the Nexus 4, put together by Qualcomm. While it's design works well, it causes major issues with performance.

Since it is not open-source, there is no way to fix this governor without help from Qualcomm, which they are reluctant to give.

[More info can be found here.](http://forum.xda-developers.com/showthread.php?p=34598348#post34598348)

## Intellidemand

Intellidemand 4.0 is a new kernel core and frequency management designed for Snapdragon S4 CPUs by `faux123` from XDA. It comes from a long line of stable CPU governors on HTC smartphones.

With intellidemand, everything is done within the kernel and the decision for how many cores and frequencies are all made in real-time. 

Intellidemand is open-source, so it is constantly being tweaked and optimized, unlike `mpdecision`, which will never improve.

It has a design that parallels Samsung's PegasusQ governor, though Intellidemand was invented first.

## Overclocking

The Nexus 4 is a phone designed right on the edge of instability, and many a hard brick has been achieved by just going to 1.6GHz. Hopefully a safe solution will be found, but with all the heat issues on the Nexus 4, that will be unlikely.

## Sources

* [XDA-Developers - Intellidemand vs mpdecision](http://forum.xda-developers.com/showthread.php?p=34598348#post34598348)
