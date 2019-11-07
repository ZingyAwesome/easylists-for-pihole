# EasyLists for Pi-Hole

Hello there!

Here you can find EasyLists for the excellent ad-blocking Pi-Hole! This repo contains 2 lists: EasyList and EasyPrivacy in text format (.txt). The lists are pre-parsed and ready to use. All you have to do is add them to your blocklists.

How to add? Read below.

NOTE: Use the RAW link for the lists.

1.Log in to the Pi-Hole Admin page.

2.Go to Settings > Block Lists

3.Scroll down until you see a box that says 'Enter one URL per line to add new ad lists'

4.Paste the URL of EasyList:
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easylist.txt
```

5.Then go down a line by hitting enter on your keyboard and paste the URL of EasyPrivacy:
```
https://raw.githubusercontent.com/0Zinc/easylists-for-pihole/master/easyprivacy.txt
```

6.Press either Save and Update and wait (or press Save). 

IMPORTANT: If you only press
Save then you will have to SSH into your Pi or open a terminal on your Pi and run the command:
```
pihole -g
```
Then the lists will be downloaded and applied.

I am also planning to make an auto downloader/updater script so lists will always be up to date.

Please post any issues in the issues page on GitHub.
