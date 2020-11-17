export type InputType = Record<string, string[]>;

export const getInput = (): InputType => ({
    easylist: [
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_adservers_popup.txt"
    ],
    easyprivacy: [
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers.txt",
        "https://raw.githubusercontent.com/easylist/easylist/master/easyprivacy/easyprivacy_trackingservers_international.txt"
    ],
    easyisrael: [
        "https://raw.githubusercontent.com/easylist/EasyListHebrew/master/EasyListHebrew.txt"
    ]
});
