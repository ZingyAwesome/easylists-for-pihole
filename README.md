# EasyLists for Pi-hole

Hello there!

Here you can find EasyLists for the excellent ad-blocking [Pi-hole](https://github.com/pi-hole/pi-hole)! These lists can be used with any ad-blocker that supports the hosts format in addition to Pi-hole, e.g. [AdGuardHome](https://github.com/AdguardTeam/AdGuardHome). The lists are pre-parsed and ready to use. All you have to do is add them to your blocklists.

The following lists are included:
- [EasyList](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/easylist.txt)
- [EasyPrivacy](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/easyprivacy.txt)
- [EasyList Cookies](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/cookies.txt)
- [EasyList Chinese](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/chinese.txt)
- [EasyList Czech-Slovak](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/czech-slovak.txt)
- [EasyList Dutch](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/dutch.txt)
- [EasyList French](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/french.txt)
- [EasyList German](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/german.txt)
- [EasyList Hebrew](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/hebrew.txt)
- [EasyList Italian](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/italian.txt)
- [EasyList Lithuanian](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/lithuanian.txt)
- [EasyList Russian](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/russian.txt)
- [EasyList Spanish](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/language/spanish.txt)

## Usage instructions
Use the raw URLs when adding lists. You can copy them from above or open the list you want, click the **Raw** button and copy the URL.

<details>
<summary>Pi-hole instructions</summary>

1. Log in to the Pi-hole dashboard.
2. Go to **Group Management** > **Adlists**.
3. Paste the URL of the list in the **address** box, optionally adding a description in the **comment** box, then click **add**.
4. If needed, repeat step 3 to add other lists from this repo.
5. Go to **Tools** > **Update Gravity** and click the **update** button.
</details>

<details>
<summary>AdGuardHome instructions</summary>

1. Log in to the AdGuardHome dashboard.
2. Go to **Filters** > **DNS Blocklists**.
3. Click **Add blocklist** > **Add a custom list**.
4. Enter the name of the list in the first box and paste the URL of the list in the second box.
5. Click the **save** button and the list will be enabled.
6. If needed, repeat steps 4 and 5 to add other lists from this repo.
</details>

## List requests
To request a list to be added, create an issue on [Codeberg](https://codeberg.org/ZingyAwesome/easylists-for-pihole/issues/new) (preferred) or [GitHub](https://github.com/ZingyAwesome/easylists-for-pihole/issues/new). Include the URL of the list and whether it is language-specific. **Only requests for EasyList-related lists will be considered**.

## Credits
Credit goes to the [EasyList authors](https://easylist.to) for creating the original lists.
All lists in this repository are licensed under [CC BY-SA 4.0](https://codeberg.org/ZingyAwesome/easylists-for-pihole/raw/branch/master/LICENSE).