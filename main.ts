import { mkdirSync, writeFileSync } from "node:fs";

// A fortune for the houseplant on the windowsill: this week a stranger
// stops at the window, points at the plant, and asks its keeper for
// the plant's autograph.
// Rebuild (review #28): C AUTOGRAPH won the internal duel 5-0 over F DUST.
const fortune =
  "A stranger will stop at the window this week, point at you, and ask your keeper for your autograph.";

// Enforce the bounty gate in the program itself: 1-120 characters,
// not blank. Fail loudly instead of writing an invalid entry.
if (fortune.length < 1 || fortune.length > 120 || fortune.trim().length === 0) {
  throw new Error("fortune must be 1-120 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
