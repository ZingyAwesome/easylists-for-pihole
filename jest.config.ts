import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    clearMocks: true,
    transform: {
        "^.+\\.ts$": ["ts-jest", {
            tsconfig: "tsconfig.json"
        }]
    },
    testRegex: "(test|test-generated)/.*.test.ts$",
    moduleFileExtensions: ["ts", "js", "json", "node"],
    moduleNameMapper: {
        "^~src/(.*)": "<rootDir>/src/$1",
        "^~test/(.*)": "<rootDir>/test/$1",
        "^~resources/(.*)": "<rootDir>/resources/$1"
    },
    verbose: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: [
        "text",
        "text-summary",
        "json",
        "lcov",
        "clover"
    ],
    collectCoverageFrom: ["src/**/*.ts"]
};

export default config;