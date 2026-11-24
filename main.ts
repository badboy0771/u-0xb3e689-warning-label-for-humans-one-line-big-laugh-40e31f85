// Warning Label for Humans: One Line, Big Laugh
// Writes a single-line safety warning label for human beings to /output/entry.txt.
// The label must be 1-160 UTF-8 characters, one line, funny first, plausible second.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Human may say 'one last tweak' at 2 AM and still be tweaking at sunrise. Side effects include 47 open tabs.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-160 characters,
// not only whitespace, on a single line. Fail loudly here rather than
// shipping an entry the gate would refuse.
const chars = [...LINE].length;
if (chars < 1 || chars > 160) {
  throw new Error(`entry is ${chars} characters, must be 1-160`);
}
if (LINE.trim().length === 0 || /[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
