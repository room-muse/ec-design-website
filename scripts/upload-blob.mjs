/**
 * One-time script: uploads actual PNG files to Vercel Blob.
 * Run: BLOB_READ_WRITE_TOKEN=your_token node scripts/upload-blob.mjs
 * Get token from Vercel Dashboard → Project → Storage → Blob → .env.local
 */
import { put } from "@vercel/blob";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir = path.join(root, "src", "assets");

const files = [
  "87e295d54a8a507d1736a48d499a75171c31eb35.png",
  "4541c55b704c752fe831a7dc2efee132b1d39b3d.png",
];

async function main() {
  for (const name of files) {
    const filePath = path.join(assetsDir, name);
    const buffer = await readFile(filePath);
    const { url } = await put(name, buffer, {
      access: "public",
      allowOverwrite: true,
      contentType: "image/png",
    });
    console.log(name, "→", url);
  }
}
main().catch(console.error);
