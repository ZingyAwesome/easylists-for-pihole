export type InputType = Record<string, string[]>;

export const getInput = (): InputType => ({
    easylist: [
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_thirdparty_popup.txt"
    ],
    easyprivacy: [
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_international.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_thirdparty_international.txt"
    ],
    easylistadult: [
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist_adult/adult_thirdparty_popup.txt"
    ],
    easylistisrael: [
        "https://raw.githubusercontent.com/easylist/EasyListHebrew/master/EasyListHebrew.txt",
        "https://raw.githubusercontent.com/easylist/EasyListHebrew/master/IsraelList_first_rls.txt"
    ],
    easylistgermany: [
        "https://raw.githubusercontent.com/easylist/easylistgermany/master/easylistgermany/easylistgermany_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylistgermany/master/easylistgermany/easylistgermany_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylistgermany/master/easylistgermany/easylistgermany_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylistgermany/master/easylistgermany/easylistgermany_thirdparty_popup.txt"
    ],
    easylistitaly: [
        "https://raw.githubusercontent.com/easylist/easylistitaly/master/easylistitaly/easylistitaly_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylistitaly/master/easylistitaly/easylistitaly_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylistitaly/master/easylistitaly/easylistitaly_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylistitaly/master/easylistitaly/easylistitaly_thirdparty_popup.txt"
    ],
    easylistspanish: [
        "https://raw.githubusercontent.com/easylist/easylistspanish/master/easylistspanish/easylistspanish_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylistspanish/master/easylistspanish/easylistspanish_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylistspanish/master/easylistspanish/easylistspanish_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylistspanish/master/easylistspanish/easylistspanish_thirdparty_popup.txt"
    ],
    easylistchina: [
        "https://raw.githubusercontent.com/easylist/easylistchina/master/easylistchina.txt"
    ],
    easylistportuguese: [
        "https://raw.githubusercontent.com/easylist/easylistportuguese/master/easylistportuguese/easylistportuguese_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylistportuguese/master/easylistportuguese/easylistportuguese_adservers_popup.txt",
        "https://raw.githubusercontent.com/easylist/easylistportuguese/master/easylistportuguese/easylistportuguese_thirdparty.txt",
        "https://raw.githubusercontent.com/easylist/easylistportuguese/master/easylistportuguese/easylistportuguese_thirdparty_popup.txt"
    ],
    easylistdutch: [
        "https://raw.githubusercontent.com/easylist/easylistdutch/master/easylistdutch/block_first_party_server.txt",
        "https://raw.githubusercontent.com/easylist/easylistdutch/master/easylistdutch/block_third_party_server.txt"
    ]
});
