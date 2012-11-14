One of the big features of the HD2 is it's ability to dual-boot Windows Phone 7 (WP7) and Android, using the MAGLDR bootloader.

But there's a dirty little secret with dual booting that few explain well. The reality is that WP7 uses a strange file system incompatible with anything else, so you can't share the same data between Android and WP7. 

Therefore, you can choose to divide the SDCard between the two, or get two cards.

## Method 1: Two-SDCards (recommended)

The most efficient way is to use two SDCards, one for WP7 and one for Android. It might seem less convenient, but it's easier than dividing one card between the two.

1. Find two SDCards, and decide which one to dedicate to which system. (for example, I use Android more than Windows, so I gave WP7 the smaller card)

2. Now take the card meant for WP7 and plug it into the phone. Remember, this card will be completely erased in the process, so back up any files on it.

3. [[Install WP7 as stated in this section|HD2 MAGLDR WP7]]. If you've already done so, the WP7 SDCard will be bound to that system unless you reformat it or reinstall WP7.

4. Turn off the phone and remove the WP7 SDCard. Now plug in Android's SDCard and use the [[NativeSD method|HD2 Android NativeSD]].

5. (Recommended) Currently, MAGLDR will be set to automatically boot WP7 first. Since WP7 will not work without it's sdcard, it's a good idea to set MAGLDR to allow you to choose at boot. Get to the MAGLDR menu, go to **10. Services** and into **1. Boot Settings**. Select the **2. AlwaysMenu** option and your phone will always go straight to MAGLDR and give you the choice.

6. Now, when you want to run WP7, insert WP7's SDCard and boot to **WP7**. When you want to run Android, insert Android's SDCard and boot to **Android SD**.

7. Your HD2 is now set up for dual boot! Choose **1. Boot WP7** for Windows Phone 7, and **2. AD SD** for Android on the SDCard.

## Method 2: One SDcard

(we need to pull that XDA guide into the codex)

> Note: You should only use this if you can only afford one SDCard, or *really* don't feel like switching them out. This is more difficult and gives fewer benefits, and can make your HD2 a bitch to use when you want Android with the new NativeSD method or when it's time to update WP7.

Notice that even with PDAImateJam's ROM, your SDCard will have been reformatted and you will only have a paltry 200MB of space available on it. The rest is some crazy "unformatted" filesystem. 

However, this "unformatted" part is where WP7 stores it's data, which is a big problem if you want to use Android or something else. To rectify this issue, you will need to split the SDCard between the two.

[Link to guide on XDA](http://forum.xda-developers.com/showthread.php?t=945565)
