/**
 * One-time script: uploads asset files to Vercel Blob.
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

const files = ["prodhack_main_1080.mp4"];

async function main() {
  for (const name of files) {
    const filePath = path.join(assetsDir, name);
    const buffer = await readFile(filePath);
    const { url } = await put(name, buffer, {
      access: "public",
      allowOverwrite: true,
      contentType: "video/mp4",
    });
    console.log(name, "→", url);
  }
}
main().catch(console.error);
