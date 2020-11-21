export type InputType = Record<string, string[]>;

/**
 * Source: https://easylist.to/
 */
export const getInput = (): InputType => ({
    easylist: [
        "https://easylist.to/easylist/easylist.txt",
        "https://easylist-downloads.adblockplus.org/malwaredomains_full.txt"
    ],
    easyprivacy: [
        "https://easylist.to/easylist/easyprivacy.txt"
    ],
    easylistisrael: [
        "https://raw.githubusercontent.com/easylist/EasyListHebrew/master/EasyListHebrew.txt"
    ],
    easylistgermany: [
        "https://easylist.to/easylistgermany/easylistgermany.txt"
    ],
    easylistitaly: [
        "https://easylist-downloads.adblockplus.org/easylistitaly.txt"
    ],
    easylistdutch: [
        "https://easylist-downloads.adblockplus.org/easylistdutch.txt"
    ],
    easylistfrance: [
        "https://easylist-downloads.adblockplus.org/liste_fr.txt"
    ]
});
