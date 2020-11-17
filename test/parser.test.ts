const mockWriteFile = jest.fn((targetFilePath, filteredDomains) => {
    console.log(targetFilePath, filteredDomains);
});
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

import { filter, parse } from "~src/parser";

describe("Test parser", () => {
    describe("Test filter", () => {
        it("Should opt-in only domains with no '/'", () => {
            const content: string = [
                "||a.b.c.d^",
                "||a.b.c.e/ad^"
            ].join("\n");
            const result: string = filter(content);
            expect(result).toEqual(["a.b.c.d"].join("\n"));
        });
        it("Should return domains sorted and unique", () => {
            const content: string = [
                "||l.m.n.o^",
                "||a.b.c.d^"
            ].join("\n");
            const result: string = filter(content);
            expect(result).toEqual(["a.b.c.d", "l.m.n.o"].join("\n"));
        });
        it("Should return domains without comments", () => {
            const content: string = [
                "||a.b.c.d^$comment1",
                "||a.b.c.d^$comment2"
            ].join("\n");
            const result: string = filter(content);
            expect(result).toEqual(["a.b.c.d"].join("\n"));
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
            await parse();
            expect(mockWriteFile).toBeCalledTimes(2);
            expect(mockWriteFile.mock.calls[0][1]).toEqual([
                "a.b.c.url1",
                "a.b.c.url2",
                "x.y.z.url1",
                "x.y.z.url2"
            ].join("\n"));
        });
    });
});

