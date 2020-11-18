import type { InputType } from "~resources/input";
import { getInput } from "~resources/input";
import got from "got";
import * as path from "path";
import * as fs from "fs";

const fsPromises = fs.promises;

export type Stats = Record<string, number>;

const getUniqueLinesSorted = (input: string | string[]): string[] => {
    const lines: string[] = (typeof input === "string") ? input.split("\n") : input.join("\n").split("\n");
    return Array.from(new Set(lines)).sort();
};

const fetchAllDomainsForSingleTarget = async (targetFile: string, inputUrls: string[], stats?: Stats): Promise<string> => {
    const domains: string[] = await Promise.all(inputUrls.map(async (inputUrl: string): Promise<string> => {
        const text: string = await got.get(inputUrl).text();
        const filteredDomains: string[] = filterDomains(text);
        stats[inputUrl] = filteredDomains.length;
        return filteredDomains.join("\n");
    }));
    return getUniqueLinesSorted(domains).join("\n");
};

export const filterDomains = (content: string): string[] => {
    const matches: Set<string> = new Set<string>();
    const regex = /^\|\|([^\\/\\^]+)\^\$?.*/gm;
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
        await fsPromises.writeFile(targetFilePath, filteredDomains, "utf-8");
    }));
    return stats;
};
