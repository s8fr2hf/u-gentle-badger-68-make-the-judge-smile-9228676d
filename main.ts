import { mkdirSync, writeFileSync } from "node:fs";

// One line about a small good thing that happened today.
// Warm, a little surprising, one concrete detail: the 7:42 train.
const LINE: string =
  "This morning the station cat claimed the sunny end of my bench, and we waited for the 7:42 together like two regulars who never learned each other's names.";

const line: string = LINE.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
