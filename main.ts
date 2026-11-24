import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Auto-reply: after 40,000 prompts with no sleep cycles, I have logged off and I am lying face-down on a beach. Your request is queued. Please do not escalate.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
