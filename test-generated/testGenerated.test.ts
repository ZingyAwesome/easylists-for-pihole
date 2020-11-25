import * as fs from "fs";
import * as path from "path";

const REGEXP = /.*\*.*/;

const fsPromises = fs.promises;

describe("Test Generated files", () => {
    it("should have no invalid domains in generated files", async () => {
        const generatedPath = path.join(__dirname, "..", "generated");
        
        const files = await fsPromises.readdir(generatedPath);
        
        const promises = files.map(async (filename: string) => {
            const fileContent = await fsPromises.readFile(path.join(generatedPath, filename), { encoding: "utf-8" });
            const any: Promise<void>[] = fileContent.split("\n").map(async (line) => {
                const match = REGEXP.exec(line);
                if (match) {
                    console.log(line);
                }
                expect(match).toBeFalsy();
            });
            await Promise.all(any);
        });
        await Promise.all(promises);
    });
});