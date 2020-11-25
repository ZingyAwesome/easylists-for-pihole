const mockWriteFile = jest.fn();

jest.mock("~resources/input", function() {
    return {
        getInput: () => ({
            target1: ["url1", "url2"],
            target2: ["url3", "url4"]
        })
    };
});
jest.mock("got", () => ({
    get: (url) => ({
        text: () => [`||a.b.c.${url}^`, `||x.y.z.${url}^$comment`].join("\n")
    })
}));
jest.mock("fs", function() {
    return {
        promises: {
            writeFile: mockWriteFile
        }
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
    describe("Test filterDomains", () => {
        it("Should opt-in only domains with no '/'", () => {
            const content: string = [
                "||a.b.c.d^",
                "||a.b.c.e/ad^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["a.b.c.d"]);
        });
        it("Should opt-in only domains with no '*'", () => {
            const content: string = [
                "||a.b.c.d^",
                "||a*.b.c.e^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["a.b.c.d"]);
        });
        it("Should return domains sorted and unique", () => {
            const content: string = [
                "||l.m.n.o^",
                "||a.b.c.d^"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["a.b.c.d", "l.m.n.o"]);
        });
        it("Should return domains without comments", () => {
            const content: string = [
                "||a.b.c.d^$comment1",
                "||a.b.c.d^$comment2"
            ].join("\n");
            const result: string[] = filterDomains(content);
            expect(result).toEqual(["a.b.c.d"]);
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
            expect(mockWriteFile).toBeCalledTimes(2);
            expect(mockWriteFile.mock.calls[0]).toEqual([
                "../generated/target1.txt",
                [
                    "a.b.c.url1",
                    "a.b.c.url2",
                    "x.y.z.url1",
                    "x.y.z.url2"
                ].join("\n"),
                "utf-8"
            ]);
            expect(mockWriteFile.mock.calls[1]).toEqual([
                "../generated/target2.txt",
                [
                    "a.b.c.url3",
                    "a.b.c.url4",
                    "x.y.z.url3",
                    "x.y.z.url4"
                ].join("\n"),
                "utf-8"
            ]);
            expect(stats).toEqual({
                url1: 2,
                url2: 2,
                url3: 2,
                url4: 2
            });
        });
    });
});
