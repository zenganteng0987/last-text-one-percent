import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "last text: i used my last 1% to quit your job for you. just texted your boss 'i quit lol'. you're welcome. your charger is in the car. bye, i'm dying";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
