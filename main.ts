import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1048576;
const MAX_DIM = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function validatePng(buf: Buffer): { width: number; height: number } {
  if (buf.length === 0 || buf.length > MAX_BYTES) {
    throw new Error(`Invalid image size: ${buf.length} bytes (limit ${MAX_BYTES})`);
  }
  if (buf.length < 24 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error('Asset is not a valid PNG file');
  }
  const ihdrType = buf.subarray(12, 16).toString('ascii');
  if (ihdrType !== 'IHDR') {
    throw new Error(`Unexpected first PNG chunk: ${ihdrType}`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width < 1 || height < 1 || width > MAX_DIM || height > MAX_DIM) {
    throw new Error(`Image dimensions ${width}x${height} exceed ${MAX_DIM}x${MAX_DIM}`);
  }
  // Verify PNG terminates with the IEND chunk marker (complete image integrity)
  const iendMarker = Buffer.from([0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  if (!buf.subarray(buf.length - 8).equals(iendMarker)) {
    throw new Error('PNG file is truncated (missing IEND trailer)');
  }
  return { width, height };
}

function main(): void {
  const rootDir = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(rootDir, 'entry.png');
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  const targetPath = join(outputDir, 'entry.png');

  const imageBytes = readFileSync(sourcePath);
  const { width, height } = validatePng(imageBytes);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(targetPath, imageBytes);

  const digest = createHash('sha256').update(imageBytes).digest('hex');
  console.log(
    JSON.stringify({
      ok: true,
      output: targetPath,
      width,
      height,
      bytes: imageBytes.length,
      sha256: digest,
    }),
  );
}

main();
