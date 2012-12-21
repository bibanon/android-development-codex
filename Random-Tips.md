## Some zips can't be flashed! (using update-binary 2)

Since TWRP 2.3 is based on AOSP jelly bean sources, TWRP now uses recovery API 3 instead of 2. 

Some zips may no longer work if it contains an out-of-date `update-binary`. This will not be a problem on newer devices with good community support, but older devices will probably encounter several zips that need to be updated. 

If needed, you can try using [this `update-binary`](http://techerrata.com/file/twrp2/utilities/update-binary) that was compiled with current sources. It goes in your zip file in the `META-INF/com/google/android` folder.

## Enable LTE Band 4 on Nexus 4

While the Nexus 4 does not support LTE on paper, a leftover Qualcomm LTE chip from the LG Optimus G remains. LTE Band 4 can be activated out of the box, since the UMTS (AWS 1700/2100MHz) antenna supports the very same frequencies.

Other bands are supported in the Qualcomm chip, but more research needs to be done to see if these can be activated.

### Carriers using LTE Band 4 (AWS 1700/2100MHz)

(carriers in **bold** have working support in major cities, carriers in italic currently only have support in select regions, carriers in normal text are under construction or have marginalized support for this band.)

* **Telus** (Canada)
* **Rogers Wireless** (Canada)
* *Bell Mobility* (Canada) - Currently only in some Canadian major cities.

* *Telcel* (Mexico) - In 9 Mexican cities, nationwide rollout in progress.

* T-Mobile (USA) - Under Construction, complete rollout sometime in 2013
* AT&T (USA) - Might be removed, as AT&T uses . Only available in select regions of Chicago, Charlotte, Dallas, Los Angeles, Las Vegas, Phoenix and Raleigh in the United States and San Juan in Puerto Rico.

### Setting an APN

To get into the APN settings, go into your android settings, > under "Wireless & Networks" go into More>Mobile Networks>Access Point Names. You can either select the menu button and create a New APN, or you can select the > one already there and edit it to match the one below.

### Rogers (Canada) APN

    Name - Rogers LTE
    APN- ltemobile.apn
    Port- 80
    MMSC- http://mms.gprs.rogers.com
    MMS Proxy- 10.128.1.69
    MCC- 302
    MNC- 720
    Apn type 1- (default,supl,mms)
    2- (*)

### Sources


* [Techcrunch - 4G LTE on the Nexus 4](http://techcrunch.com/2012/11/23/how-to-enable-4g-lte-on-the-google-nexus-4/)

## Nexus 4 on AT&T

The Nexus 4 supports HSPA+ on AT&T, and LTE Band 4 in some select cities. 

If you're using AT&T with the Nexus 4, and want HSPA+ speeds, DON'T give them your IMEI number; you'll get a 3G-restricted SIM card. This is how to set up your Nexus 4 for AT&T:

If you already used an 4G LTE AT&T phone before the Nexus 4, skip these steps.

**Borrow a Friend's IMEI**

Find a friend with a 4G phone, dial `*#06#` to get the IMEI, and give AT&T this IMEI number. 

Alternatively, walk into a nearby AT&T store, find a phone and dial `*#06#` to get the IMEI. Tell an employee that your friend sold you a Galaxy SIII or an HTC One X, and give him the IMEI on a piece of paper.

This is enough to activate a 4G plan on your account, get you a microSIM card, and give you access to HSPA+ speeds.

AT&T usually only checks the IMEI to see if your phone is capable of 4G, based on reports from XDA and Reddit users.

### AT&T Code

You need to use these settings to use AT&T on the Nexus 4.

To get into the APN settings, go into your android settings, > under "Wireless & Networks" go into More>Mobile Networks>Access Point Names. You can either select the menu button and create a New APN, or you can select the > one already there and edit it to match the one below.

    Code: APN Settings:
    Name: AT&T HSPA+
    APN: pta (NOTE: IF YOU DON'T HAVE AN LTE PLAN, CHANGE THIS TO "PHONE")
    Proxy: Not set
    Port: Not set
    Username: Not set
    Password: Not set
    MMSC: [2] http://mmsc.mobile.att.net
    MMS Proxy: proxy.mobile.att.net
    MMS port: 80 (NOTE: IF MMS ISN'T WORKING, CHANGE THIS > TO "8080")
    MCC: 310
    MNC 410
    Authentication type: Not set
    APN type: default,admin,fota,mms,supl,hipri
    APN protocol: IPv4/IPv6
    APN roaming protocol: IPv4/IPv6
    Bearer: Unspecified

Unless you live in Oklahoma City, OK or one of the other few cities - you likely do not have the band of LTE the Nexus 4 can connect to (Band 4) ... so use:

    APN: phone

### Sources

* [Reddit r/Nexus4 - Nexus 4, AT&T and You](http://www.reddit.com/r/nexus4/comments/14g245/psa_nexus_4_att_and_you_how_not_to_get_screwed/)
* [Phandroid - Nexus 4 AT&T LTE](http://phandroid.com/2012/12/10/nexus-4-att-lte/)

## T-Mobile USA

### Getting a microSIM Card

If you're getting a new plan, make sure to buy a **microSIM** card.

If you're already on T-Mobile, you can ask for one at the store or cut your plain ol' SIM Card into a microSIM card. [[follow this guide|SIM Cards]].

### Using tethering 

The Nexus 4 is sold without any carrier interference, so wifi tethering will work. However, T-Mobile blocks all user agents that come from *known* desktop browsers, so just set your computer to use an Android user agent; heck, you could even dump any random junk as the user agent and it'll work.

You'll need this extension to change the user agent:

* [User Agent Switcher (Firefox)](https://addons.mozilla.org/en-US/firefox/addon/user-agent-switcher/)
* [User Agent Switcher (Chrome)](https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg)
* [Dummies.com - Activate User Agent Switcher in Safari](http://www.dummies.com/how-to/content/how-to-activate-user-agent-switcher-in-safari.html)
* IE - Press {{Key|F12}}, go to the **Tools** menu, point to **Change user agent string**, and select a user agent from there.

The block only applies to HTTP use, so you can just use instant messaging, skype, and other stuff without interference. 