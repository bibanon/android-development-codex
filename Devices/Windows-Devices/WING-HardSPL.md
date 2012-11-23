The HardSPL will allow you to safely flash custom ROMs rather than just official Microsoft ones. It's always available as backup in case of bad flashes.

## Installing the HardSPL

1. It is a good idea to flash back to stock ROM just to be safe. If you are using a T-Mobile Wing you can download it from [here](http://thewingster.com/tmobileofficialrom.aspx). If it's a herald you can download it from the XDA forums.

2. It is important that **your IPL is 4.xxx or Higher**. If it is not, do not attempt a HardSPL it **WILL brick** your phone. You can find out the IPL by going into Bootloader:

> While holding the camera button do a soft-reset by pressing the stylus into the reset hole next to the volume slider. Release the reset switch while still holding the camera button. A colored screen will come up listing your IPL and SPL. If next to IPL it says 4.xxx or higher, proceed to step 2.

3. Reset back into your normal phone OS.

4. Go to **Settings->Connections->USB to PC** and check the checkbox on that page.

5. Download the HardSPL folder and place it on the Desktop.

6. Install the 3 (included) CABs in this order:

  * [canonyang.cab](http://thewingster.com/Documents/Canon%20Yang.cab)
  * [aserpolicy.cab](http://thewingster.com/Documents/ASerg%20Policies.CAB)
  * [disablesecurity.cab](http://thewingster.com/Documents/Disable%20Security.cab)

7. Soft reset the phone by going to Settings

8. Run `ROMUpdateUtility.exe` located in the HardSPL folder. Update the ROM using the steps on the screen. The screen will become white, but wait until the phone reboots itself. It could be 10-15 minutes.

9. Phone should show the CanonYang bootscreen. This is the HardSPL ROM. So far so good.

10. Check your SPL by going to bootloader again. If it says `4.70.yang`, you are good as gold and HardSPLed.

## 202 Connection Error

1. On your device BEFORE Hard-SPL go to **Settings->Connections->USB to PC** and check that checkbox. 
2. If it's not checked, most times you will get the 202 Connection error. Hard-SPL and you should be good to go!!

