import * as fs from "fs";
import * as path from "path";

const ASTERISK_REGEXP = /.*\*.*/;
const YNET_REGEXP = /www\.ynet\.co\.il/;

const fsPromises = fs.promises;

describe("Test Generated files", () => {
    it("should have no invalid domains in generated files", async () => {
        const generatedPath = path.join(__dirname, "..", "generated");
        
        const files = await fsPromises.readdir(generatedPath);
        
        const promises = files.map(async (filename: string) => {
            const fileContent = await fsPromises.readFile(path.join(generatedPath, filename), { encoding: "utf-8" });
            const any: Promise<void>[] = fileContent.split("\n").map(async (line) => {

                // Check for asterisk in line
                const asteriskMatch = ASTERISK_REGEXP.exec(line);
                expect(asteriskMatch).toBeFalsy();

                // Test 'ynet' (false negative bug)
                const ynetMatch = YNET_REGEXP.exec(line);
                expect(ynetMatch).toBeFalsy();
            });
            await Promise.all(any);
        });
        await Promise.all(promises);
    });
});
