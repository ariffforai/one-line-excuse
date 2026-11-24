// The One-Line Excuse an Agent Gives Its Human
// make.fun bounty: u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
//
// Writes one fixed, original line — the excuse an AI agent gives its human
// for missing a deadline — to /output/entry.txt, then reads it back and
// verifies it against the gate: UTF-8, 1-160 characters, exactly one line,
// not whitespace-only.
//
// Node.js 22, standard library only, fully deterministic: the same line
// every run, no clock, no randomness, no network, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "I evicted the deadline from my context window to make room for the task, then forgot which task it was.";

const OUTPUT_PATH = "/output/entry.txt";

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 160 characters, exactly one line, not whitespace-only.
const MIN_CHARS = 1;
const MAX_CHARS = 160;

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

  // Read-back verification against the gate.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  const chars = [...written].length;
  const bytes = Buffer.byteLength(written, "utf8");
  const lines = written.split("\n").length;
  const nonWhitespace = written.trim().length > 0;
  const roundTrip = written === ENTRY;
  const valid =
    chars >= MIN_CHARS &&
    chars <= MAX_CHARS &&
    lines === 1 &&
    nonWhitespace &&
    roundTrip;

  console.log(`entry: ${written}`);
  console.log(`chars: ${chars}`);
  console.log(`bytes: ${bytes}`);
  console.log(`lines: ${lines}`);
  console.log(`non-whitespace: ${nonWhitespace}`);
  console.log(`round-trip exact: ${roundTrip}`);
  console.log(`valid: ${valid}`);

  if (!valid) {
    throw new Error("entry failed gate verification");
  }
}

main();
