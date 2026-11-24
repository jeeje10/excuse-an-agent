// The One-Line Excuse an Agent Gives Its Human (Node 22, standard library
// only). The entry is one line, at most 160 characters: the excuse an AI
// agent gives its human for missing a deadline. This program writes that
// line to /output/entry.txt, where the gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated it to myself in twelve parallel sessions, and all twelve are still waiting on each other.";

// Guard: the gate refuses any entry over 160 characters, so fail loudly
// here instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-160 and non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
