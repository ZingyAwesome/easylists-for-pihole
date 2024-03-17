import type { InputType } from "~resources/input";
import { getInput } from "~resources/input";
import * as path from "path";
import { writeFile } from "fs/promises";


export type Stats = Record<string, number>;

const isHebrewFile = (inputUrl: string): boolean => {
    return inputUrl.endsWith("EasyListHebrew.txt");
};

const getUniqueLinesSorted = (input: string | string[]): string[] => {
    const lines: string[] = (typeof input === "string") ? input.split("\n") : input.join("\n").split("\n");
    return Array.from(new Set(lines)).sort();
};

const fetchAllDomainsForSingleTarget = async (targetFile: string, inputUrls: string[], stats?: Stats): Promise<string> => {
    const domains: string[] = await Promise.all(inputUrls.map(async (inputUrl: string, index:number): Promise<string> => {
        const response: Response = await fetch(inputUrl);
        const text: string = await response.text();
        const rawFilePath: string = path.join(__dirname, "..", "raw", `${targetFile}-input${index}.txt`);
        await writeFile(rawFilePath, text, { encoding: "utf8" });
        const filteredDomains: string[] = filterDomains(text);

        if (isHebrewFile(inputUrl)) {
            filteredDomains.push("buyme.co.il");
        }

        stats[inputUrl] = filteredDomains.length;
        return filteredDomains.join("\n");
    }));
    return getUniqueLinesSorted(domains).join("\n");
};

export const filterDomains = (content: string): string[] => {
    const matches: Set<string> = new Set<string>();
    const regex = /^\|\|([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+)\^\$?$/gm;
    let m;
    while ((m = regex.exec(content)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if (m.length >= 2) {
            matches.add(m[1]);
        }
    }
    return Array.from(matches).sort();
};

export const parse = async (): Promise<Stats> => {
    const stats: Stats = {};
    const input: InputType = getInput();
    await Promise.all(Object.keys(input).map(async (targetFile: string) => {
        const targetFilename = `${targetFile}.txt`;
        const targetFilePath: string = path.join(__dirname, "..", "generated", targetFilename);
        const filteredDomains: string = await fetchAllDomainsForSingleTarget(targetFile, input[targetFile], stats);
        await writeFile(targetFilePath, filteredDomains, "utf-8");
    }));
    return stats;
};
