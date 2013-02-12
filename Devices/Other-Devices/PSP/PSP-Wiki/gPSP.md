## Merging the forks

* Best version: gPSP mod 200907
* Best open-source version: gPSP mod 200903
* Original Version: gPSP v0.9

All support stretching to full PSP screen, though some prefer not to for quality reasons. Just set "user" scale mode.

gPSP mod is based on gPSP kai by takka. Source code was only found for gPSP mod 200903, not the latest 200907 version. However, the differences between the two are unknown and seem to be minor, so this is a good basis. The author is anonymous.

UO gPSP kai was made by takka to add features to Exophase's aging gPSP. This led to a political mess, but takka kept supporting for 2 years past the original, so many users switched to it as a necessary evil. Eventually, takka made gPSP kai open-source, though he washed his hands of the matter and never spoke of it again.

The original gPSP is not recommended for the PSP itself, but is the basis for all other ports on other platforms.

There is no known source code for gPSP-J, so that fork will have to be orphaned.

## gPSP forks review

[http://wololo.net/talk/viewtopic.php?f=17&t=2101&start=10#p37302 RyanO]

Sorry to bump an old thread, but I've been doing some gpSP tests recently and if anyone is interested in the 'best' version out there for PSP it's hands down gpSPmod specifically this version - gpSPmod20090720 (7-20-2009). 

Here are some other ones that I tested:

Takka's UO gpSP kai 3.4 test 3 (his last version) suffers from absolutely horrible audio popping. In some games like Metroid Zero Mission and FFV it just pops so much you'd have to be deaf not to hear it. In any of the games that use audio samples (like all the FF advance games and the Mario advance games) the audio will also go out of sync with the game. This can be fixed by entering and exiting the menu really quick. No amount of playing with the audio buffer will fix the popping or sync issues which is a shame because this version features the best speed and compatibility of any version of gpSP, especially in problematic titles like the Golden Suns, FF6, Yoshi's Island, etc. Cannot recommend unless you really don't care about sound (or play with it off).

gpSPJ 100429 which is recommended especially for TN-C (and is also the most recent version of gpSP and dev has released for PSP) has major issues with the above problematic titles (among others) including graphical and audio glitches and framerate problems. It also tears more often than not in even less demanding games that Exophase's own 0.9 version doesn't. I cannot recommend it at all, it seems the reason most people recommend it is because they have trouble running other versions on TN-C.

Exophase's last official release 0.9 (which is now signed and runs on OFW) - Exophase made a great emulator with gpSP, no doubts there. It's portable and proven successful on other platforms and it has much better speed/compatibility than VBA on mobile hardware. He stopped making it for PSP and devs such as Takka did not release their modified source code as they are supposed to under GPL (until later, anyway) so he asked that other devs not port it. This caused quite a stir and as a result a lot of people don't recommend any of the modified versions since they were released against his wishes. 

Politics aside, if you want to play Zelda the Minish Cap or FF6 on your PSP you cannot do so with this version. If you're okay with that it is still a great GBA emulator with excellent compatibility and minimal bugs.

gpSPmod 20090720 - Works great on 6.20 TN-C and 6.35 A-4. I had to copy the main gpSP_mod folder (under game) to my PSP's game folder and then copy the eboot from the for_IRshell folder and overwrite the main one (as with gpSPj) first in order for it to work. Then it works great. This is the best of both worlds, it has most of Takka's speed improvements without any of the audio popping or syncing issues. 

Golden Sun 2's audio plays normally although it is slow in some spots which is still better than any other version of gpSP out there. FF6 runs at a much better framerate with no audio or graphic glitches (some more demanding scenes are at a 30fps on auto frameskip but this is better than other versions which skips up to 4 frames at times). 

Yoshi's Island runs at pretty much 60fps with a little bit of tearing in the parts that drop frames on other versions of gpSP. The emulator defaults to english too which is nice. Like the non-Takka versions of gpSP it runs full screen with the GBA's AR (thin black bars on the side of a PSP 1k and 2k which blend into the black background and aren't noticeable on 3k, go). Takka's can stretch but of course this slightly deforms the screen but some people prefer that for some reason. If you are one of those people, you can either run Takka's and put up with the audio issues or run an earlier version which doesn't have the audio issues (3.3 and earlier) but keep in mind that those versions have FPS and audio/graphical glitches with those problematic games.

That's my two cents if anybody cares. It's a shame there are so many versions of gpSP out there because it's just friggin confusing
