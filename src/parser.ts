import type { InputType } from "~resources/input";
import { getInput } from "~resources/input";
import got from "got";
import * as path from "path";
import * as fs from "fs";

const fsPromises = fs.promises;

const fetchAllInputsForSingleTarget = async (targetFile: string, inputUrls: string[]): Promise<string> => {
    const filesContents: string[] = await Promise.all(inputUrls.map(async (inputUrl: string) => got.get(inputUrl).text()));
    return filesContents.join("\n");
};

export const filter = (content: string): string => {
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
    return Array.from(matches).sort().join("\n");
};

export const parse = async () => {
    const input: InputType = getInput();
    await Promise.all(Object.keys(input).map(async (targetFile: string) => {
        const targetFilename = `${targetFile}.txt`;
        const targetFilePath: string = path.join(__dirname, "..", "generated", targetFilename);
        const mergedInput = await fetchAllInputsForSingleTarget(targetFile, input[targetFile]);
        const filteredDomains: string = filter(mergedInput);

        await fsPromises.writeFile(targetFilePath, filteredDomains, "utf-8");
    }));
};
