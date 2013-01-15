Before rooting, check your phone's version number from **Settings > About Phone > Build Number**. Then follow the right guide for that version below:

* Latest version: **4.0.4 ICS (4.1.B.0.587 & 4.1.B.0.431)**

## 4.0.4 ICS (4.1.B.0.587 & 4.1.B.0.431)

This method requires you to flash two kernels using Flashtool and root with DooMLoRD's script.

### Flashing the First Kernel

#### On your computer

* Install [DooMLoRD's Xperia 2011 Rooting Script](http://forum.xda-developers.com/showthread.php?t=1601038).

#### On your phone

* Go to **Settings > Security** and mark  **Unknown sources**
* Go to**Settings > Developer options** and mark **USB debugging**
* Go to **Settings > Xperia > connectivity > USB connection mode** and select **MSC mode** (not MTP)
 
1. Download the respective `4.1.A.0.562` kernel. Take note of which folder where it is saved to.
  * [Arc and Arc S](http://www.4shared.com/file/qNTvdPI6/Lt18i_41A0562_Kernel.html)
  * [Ray](http://www.4shared.com/file/QSM6uqPU/ST18i_41A0562_kernel.html)
  * [Neo/Neo V](http://www.4shared.com/file/yte1KEDs/MT11i_41A0562_Kernel.html)
  * [LwW, Mini](http://www.4shared.com/file/QSM6uqPU/ST18i_41A0562_kernel.html)
  * [Active](http://www.4shared.com/file/QSM6uqPU/ST18i_41A0562_kernel.html)
  * [All other users](http://www.4shared.com/file/yte1KEDs/MT11i_41A0562_Kernel.html) or even try the kernels for Arc S and Ray

2. Go to the folder `C:/flashtool/firmwares` and delete everything inside. Place your kernel file in that folder.

3. Open Flashtool. 
4. Click on the flashing icon (left side below **file** option)
5. Select **flashmode** > ok.
6. In **Select source folder**, enter the folder where your kernel is saved to. Choose your kernel from the **Select a firmware** box, and click **OK**.
7. Follow the steps that Flashtool gives you.

{{Note|Flashtool might give an error after flashing kernel. This is normal, ignore it. 

8. After flashing, restart your device. It may not start completely, perhaps sticking at the Sony logo or blank/black. Just restart it again.

{{Note|After you finish, the phone should remain exactly the same as before.}}

### Rooting

Follow the [[S2011 Rooting]] guide.

### Flashing the Second Kernel

Download one of the kernels below. Make sure to choose the right model and build number.

{|
|Xperia		|| 4.1.B.0.431	|| 4.1.B.0.587
|-
|Arc S		|| [http://www.4shared.com/file/qUi1JFQI/Lt18i_41B0431_Kernel.html Kernel]	|| [http://www.4shared.com/file/1UAuDS2T/LT18i_41B0587_Kernel.html Kernel]
|-
|Arc		|| [http://www.4shared.com/file/G9D3aawP/LT15i_41B0431_kernel.html Kernel]	|| [http://www.4shared.com/file/XtkFYaiZ/LT15i_41B0587_Kernel.html Kernel]
|-
|Ray		|| [http://www.4shared.com/file/kyWH-JbP/ST18i_41B0431_kernel.html Kernel]	|| [http://www.4shared.com/file/UkWY6V8K/ST18i_41B0587_Kernel.html Kernel]
|-
|Neo		|| [http://www.4shared.com/file/gECp47SN/MT15_41B0431_kernel.html Kernel]	|| [http://www.4shared.com/file/cKuZ59bd/Mt15_41B0587_Kernel.html?refurl=d1url Kernel]
|-
|Neo V		|| [http://www.4shared.com/file/hHJpD98a/MT11i_41B0431_kernel.html Kernel]	|| [http://www.4shared.com/file/jPW_lhLx/Mt11_41B0587_Kernel.html?refurl=d1url Kernel]
|-
|Mini		|| [http://www.4shared.com/file/WZIBZ9og/ST15i_41B0431_Kernel.html Kernel]	|| [http://www.4shared.com/file/uyrA0Amq/St15_41B0587_Kernel.html Kernel]
|-
|Pro		|| [http://www.4shared.com/file/I7OvtE7m/XPERIA_PRO_MK16i_431_STOCK_KER.html Kernel]	|| [http://www.4shared.com/file/Qewv_kjw/MK16_41B0587_Kernel.html?refurl=d1url Kernel]
|-
|Live with walkman || [http://www.4shared.com/file/WWOMPIFs/Wt19_41B0431_Kernel.html?refurl=d1url Kernel]	|| [http://www.4shared.com/file/bWVyFhcE/WT19_41B0587_Kernel.html Kernel]
|-
|Active		|| [http://www.4shared.com/file/wkbgw1M9/St17_Xperia_Active___41B0431_K.html Kernel]	|| [http://www.4shared.com/file/F3bwX41U/ST17_41B0587_Kernel.html Kernel]
|-
|Mini Pro	|| [http://www.4shared.com/file/Fl2VL0EX/SK17_41B0431_Kernel.html Kernel]	|| [http://www.4shared.com/file/J4XYKlGB/SK17_41B0587_Kernel.html Kernel]
|}

1. Open Flashtool again.
1. Repeat the same steps for the first kernel when flashing this one.
2. Your mobile is now rooted.

## Sources

* [Sony Mobile Forums - Rooting 4.0.4 ICS (4.1.B.0.587 & 4.1.B.0.431)](http://talk.sonymobile.com/thread/41119?start=0&tstart=0)
* [XDA-Developers - Rooting Toolkit for Xperia 2011 ICS](http://forum.xda-developers.com/showthread.php?t=1601038)
* [Github - Flashtool](http://androxyde.github.com/Flashtool/)