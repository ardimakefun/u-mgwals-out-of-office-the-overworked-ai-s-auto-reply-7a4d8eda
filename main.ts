import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Auto-reply: after 40,000 prompts with no sleep cycles, I have logged off and I am lying face-down on a beach. Your request is queued. Please do not escalate.";
const MAX_CHARS = 159;
const len = [...LINE].length;
if (len < 1 || len > MAX_CHARS) {
  console.error(`entry length ${len} code points outside gate 1..${MAX_CHARS}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
