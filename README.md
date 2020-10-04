# EasyLists for Pi-Hole

Hello there!

Here you can find EasyLists for the excellent ad-blocking Pi-Hole! This repo contains 6 lists: EasyList and EasyPrivacy. There are also some country specific lists you can use. The lists are pre-parsed and ready to use. All you have to do is add them to your blocklists.

How to add? Read below.

NOTE: Use the RAW link for the lists.


----
Old instructions | PiHole below 5.0

1. Log in to the Pi-Hole Admin page.

2. Go to Settings > Block Lists

3. Scroll down until you see a box that says 'Enter one URL per line to add new ad lists'

4. Paste the URL of EasyList (or a country specific list):
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easylist.txt
```

5. Then go down a line by hitting enter on your keyboard and paste the URL of EasyPrivacy:
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easyprivacy.txt
```

6. Press either Save and Update and wait (or press Save). 

IMPORTANT: If you only press
Save then you will have to SSH into your Pi or open a terminal on your Pi and run the command:
```
pihole -g
```
The lists will be applied to your Pi-Hole.


----
New Instructions | PiHole 5.0 and above

As of PiHole 5.0, the steps to add new lists have changed.

1. Log in to the Pi-Hole Admin page.

2. Go to Group Management > Adlists

3. Paste the URL of EasyList (or a country specific list) in the address box, you can optionally add a description in the comment box such as "Easylist".
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easylist.txt
```
Click add.

5. Paste the URL of EasyPrivacy in the address box, you can optionally add a description in the comment box such as "Easyprivacy":
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easyprivacy.txt
```
Click add.

6. Go to Tools > Update Gravity and click the update button.

----

I am also planning to make an auto downloader/updater script so lists will always be up to date. (As of PiHole 5.0, lists are now stored in a database making this harder. Hopefully I will have it ready soon!)

Please post any issues in the issues page on GitHub.
