# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repo fetches upstream EasyList ad-blocking filter lists, extracts valid domain entries, deduplicates/sorts them, and writes Pi-Hole–compatible blocklists to `generated/`. The nightly CI workflow runs the parser automatically and opens a PR to update `generated/` on `main`.

## Commands

```bash
npm run build          # eslint + type-check + unit tests (CI gate)
npm run parse          # fetch upstream lists and write to generated/ and raw/
npm run parse-and-test # parse then validate generated files
npm run test           # unit tests (test/)
npm run test-generated # integration tests against generated/ files
npm run eslint         # lint src/, test/, resources/, *.ts
npm run eslint:fix     # lint with auto-fix
npm run type-check     # tsc --build (no emit)
```

Run a single test file:
```bash
npx jest test/parser.test.ts
```

## Architecture

```
resources/input.ts      # defines InputType and getInput() — maps output filename -> upstream URL(s)
src/parser.ts           # core logic: fetch, filter, deduplicate, write
src/index.ts            # entrypoint: calls parse()
test/parser.test.ts     # unit tests for filterDomains() and parse() with mocked I/O
test-generated/         # integration test: reads actual generated/ files and validates them
generated/              # output .txt files (one per list, committed to main via nightly PR)
raw/                    # intermediate raw downloads (gitignored, created during parse)
```

### Path aliases (tsconfig + jest)
- `~src/*` → `src/*`
- `~resources/*` → `resources/*`
- `~test/*` → `test/*`

### Parser logic (`src/parser.ts`)
- `filterDomains(content)` — regex-extracts bare domains from EasyList format: lines matching `||domain^` or `||domain^$` (no wildcards, no type options, no path separators). Returns sorted unique array.
- `parse()` — reads `getInput()`, fetches each URL in parallel, saves raw text to `raw/<target>-input<N>.txt`, applies `filterDomains`, merges across multiple sources per target, deduplicates, sorts, writes to `generated/<name>.txt`. Returns a `Stats` map of source URL -> domain count.
- Special case: any source URL ending in `EasyListHebrew.txt` gets `buyme.co.il` appended before dedup.

### Adding a new list
Edit `resources/input.ts`: add a new key (becomes the output filename) with an array of source URLs.

## CI Workflows

- **`pr.yml` (Code CI)**: runs `npm run build` on PRs and pushes to `main`.
- **`nightly.yml`**: daily at midnight UTC — runs `npm run parse && npm run test-generated`, commits results to a `generated` branch, and auto-merges a PR into `main` if anything changed.
- **`manually.yml`**: manual trigger for the same parse-and-merge flow.
