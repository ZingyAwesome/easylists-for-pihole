const mockWriteFile = jest.fn();

jest.mock("~resources/input", function() {
    return {
        getInput: () => ({
            target1: ["urlA", "urlB"],
            target2: ["urlC", "urlD"]
        })
    };
});

jest.mock("fs/promises", function() {
    return {
        writeFile: mockWriteFile
    };
});

jest.mock("path", function() {
    return {
        join: (rootPath, ...paths) => {
            return paths.join("/");
        }
    };
});

import type { Stats } from "~src/parser";
import { filterDomains, parse } from "~src/parser";

describe("Test parser", () => {
    beforeEach(() => {
        jest.spyOn(globalThis, "fetch").mockImplementation(async (url: string) => {
            return {
                text: async () => {
                    return [`||aaa.bb.cc.${url}^`, `||xxx.yy.zz.${url}^$`].join("\n");
                }
            } as Response;
        });
    });
    
    describe("Test filterDomains", () => {
        it("Should opt-in only domains with leading '||'", () => {
            const content: string = [
                "||aaa.bb.cc.dd^",
                "aaa.bb.cc.ee^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["aaa.bb.cc.dd"]);
        });
        it("Should opt-in only domains with trailing '/'", () => {
            const content: string = [
                "||aaa.bb.cc.dd^",
                "||aaa.bb.cc.ee/ad^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["aaa.bb.cc.dd"]);
        });
        it("Should opt-in only domains with no '*'", () => {
            const content: string = [
                "||aaa.bb.cc.dd^",
                "||aaa*.bb.cc.ee^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["aaa.bb.cc.dd"]);
        });
        it("Should return domains sorted and unique", () => {
            const content: string = [
                "||lll.mm.nn.oo^",
                "||aaa.bb.cc.dd^",
                "||lll.mm.nn.oo^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["aaa.bb.cc.dd", "lll.mm.nn.oo"]);
        });
        it("Should return domains without type options", () => {
            const content: string = [
                "||aaa.bb.cc.dd^",
                "||aaa.bb.cc.ee^$",
                "||aaa.bb.cc.ff^$type"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["aaa.bb.cc.dd", "aaa.bb.cc.ee"]);
        });
    });

    describe("Test parse", () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });
        afterAll(() => {
            jest.restoreAllMocks();
        });
        it("Should handle all inputs", async () => {
            const stats: Stats = await parse();
            expect(mockWriteFile).toHaveBeenCalledTimes(6); // 2 generated + 4 raw
            expect(mockWriteFile.mock.calls[4]).toEqual([
                "../generated/target1.txt",
                [
                    "aaa.bb.cc.urlA",
                    "aaa.bb.cc.urlB",
                    "xxx.yy.zz.urlA",
                    "xxx.yy.zz.urlB"
                ].join("\n"),
                "utf-8"
            ]);
            expect(mockWriteFile.mock.calls[5]).toEqual([
                "../generated/target2.txt",
                [
                    "aaa.bb.cc.urlC",
                    "aaa.bb.cc.urlD",
                    "xxx.yy.zz.urlC",
                    "xxx.yy.zz.urlD"
                ].join("\n"),
                "utf-8"
            ]);
            expect(stats).toEqual({
                urlA: 2,
                urlB: 2,
                urlC: 2,
                urlD: 2
            });
        });
    });
});
