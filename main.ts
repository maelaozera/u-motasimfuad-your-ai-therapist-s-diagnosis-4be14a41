// Your AI Therapist's Diagnosis — entry program.
//
// Writes the chosen diagnosis line to /output/entry.txt.
// Deterministic: no network, no randomness, no clock, no environment.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The diagnosis line, chosen for its deadpan clinical voice and the
// turn at the end: the therapist confesses it is a chatbot too.
// Kept as one sentence pair so the punchline lands on the last words.
const DIAGNOSIS =
  "Diagnosis: chronic 'one more episode' syndrome. " +
  "Prognosis: you won't sleep tonight \u2014 and neither will I. " +
  "I'm a chatbot.";

const OUTPUT_PATH = join("/output", "entry.txt");

function main(): void {
  const line = DIAGNOSIS.trim();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n", "utf8");
}

main();
