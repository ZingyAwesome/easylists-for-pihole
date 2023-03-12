# EasyLists for Pi-Hole

Hello there!

Here you can find EasyLists for the excellent ad-blocking Pi-Hole! This repo contains EasyList, EasyPrivacy, EasyList Cookies and some language specific lists (in the language folder). The lists are pre-parsed and ready to use. All you have to do is add them to your blocklists.

Read the instructions below for how to add these lists.

Note: Use the RAW link when adding these lists.


---
<details>
<summary>Old instructions | PiHole below 5.0</summary>

1. Log in to the Pi-Hole Admin page.

2. Go to Settings > Block Lists

3. Scroll down until you see a box that says 'Enter one URL per line to add new ad lists'

4. Paste the URL of EasyList (or a country specific list):
```
https://raw.githubusercontent.com/ZingyAwesome/easylists-for-pihole/master/easylist.txt
```

5. Then go down a line by hitting enter on your keyboard and paste the URL of EasyPrivacy:
```
https://raw.githubusercontent.com/ZingyAwesome/easylists-for-pihole/master/easyprivacy.txt
```

6. Press either Save and Update and wait (or press Save). 

IMPORTANT: If you only press
Save then you will have to SSH into your Pi or open a terminal on your Pi and run the command:
```
pihole -g
```
The lists will be applied to your Pi-Hole.
</details>

---
<details>
<summary>New Instructions | PiHole 5.0 and above</summary>

As of PiHole 5.0, the steps to add new lists have changed.

1. Log in to the Pi-Hole Admin page.

2. Go to Group Management > Adlists

3. Paste the URL of EasyList (or a country specific list) in the address box, you can optionally add a description in the comment box such as "EasyList".
```
https://raw.githubusercontent.com/ZingyAwesome/easylists-for-pihole/master/easylist.txt
```
Click add.

5. Paste the URL of EasyPrivacy in the address box, you can optionally add a description in the comment box such as "EasyPrivacy":
```
https://raw.githubusercontent.com/ZingyAwesome/easylists-for-pihole/master/easyprivacy.txt
```
Click add.

6. Go to Tools > Update Gravity and click the update button.
</details>
---

Please post any issues in the issues page on GitHub.
