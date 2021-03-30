# EasyLists for Pi-Hole [WIP - Will be ready soon]
[![PR Actions Status](https://github.com/yoavain/easylists-for-pihole/workflows/Code%20CI/badge.svg)](https://github.com/yoavain/easylists-for-pihole/actions)
[![Nightly Actions Status](https://github.com/yoavain/easylists-for-pihole/workflows/Nightly/badge.svg)](https://github.com/yoavain/easylists-for-pihole/actions)
![types](https://img.shields.io/npm/types/typescript.svg)
![commit](https://img.shields.io/github/last-commit/yoavain/easylists-for-pihole.svg)
[![Known Vulnerabilities](https://snyk.io//test/github/yoavain/easylists-for-pihole/badge.svg?targetFile=package.json)](https://snyk.io//test/github/yoavain/easylists-for-pihole?targetFile=package.json)
[![codecov](https://codecov.io/gh/yoavain/easylists-for-pihole/branch/main/graph/badge.svg)](https://codecov.io/gh/yoavain/easylists-for-pihole)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
![visitors](https://visitor-badge.glitch.me/badge?page_id=yoavain.easylists-for-pihole)

Hello there!

Here you can find EasyLists for the excellent ad-blocking Pi-Hole!
This repo contains the following lists:
1. [EasyList](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylist.txt)
1. [EasyPrivacy](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easyprivacy.txt)
1. [EasyList Israel](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylistisrael.txt)
1. [EasyList Italy](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylistitaly.txt)
1. [EasyList Germany](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylistgermany.txt)
1. [EasyList France](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylistfrance.txt)
1. [EasyList Dutch](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylistdutch.txt)
   
The lists are pre-parsed and ready to use. All you have to do is add them to your block lists.

How to add? Read below.

NOTE: Use the RAW link for the lists.

----
<details>
<summary>New Instructions | PiHole 5.0 and above</summary>
<p>

As of PiHole 5.0, the steps to add new lists have changed.

1. Log in to the Pi-Hole Admin page

2. Go to Group Management > Adlists

3. Paste the URL of EasyList (or a country specific list) in the address box, you can optionally add a description in the comment box such as "Easylist"
```
https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylist.txt
```
Click ***Add***

![](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/docs/add-adlist.png)

5. Paste the URL of EasyPrivacy in the address box, you can optionally add a description in the comment box such as "Easyprivacy":
```
https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easyprivacy.txt
```
Click ***Add***

6. Go to Tools > Update Gravity and click the update button

![](https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/docs/update-gravity.png)
</p>
</details>

----
<details>
<summary>Old instructions | PiHole below 5.0</summary>
<p>

1. Log in to the Pi-Hole Admin page

2. Go to Settings > Block Lists

3. Scroll down until you see a box that says 'Enter one URL per line to add new ad lists'

4. Paste the URL of EasyList (or a country specific list):
```
https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easylist.txt
```

5. Then go down a line by hitting enter on your keyboard and paste the URL of EasyPrivacy:
```
https://raw.githubusercontent.com/yoavain/easylists-for-pihole/main/generated/easyprivacy.txt
```

6. Press either ***Save and Update*** and wait (or press ***Save***)

IMPORTANT: If you only press
Save then you will have to SSH into your Pi or open a terminal on your Pi and run the command:
```
pihole -g
```
The lists will be applied to your Pi-Hole.

</p>
</details>  

----
