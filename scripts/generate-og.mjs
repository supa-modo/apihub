import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const inputLogo = path.join(ROOT, "public", "logo2.webp");
const outputOg = path.join(ROOT, "public", "og.png");

const ogWidth = 1200;
const ogHeight = 630;

const background = { r: 11, g: 18, b: 32, alpha: 1 }; // #0b1220

const logo = sharp(inputLogo, { failOn: "none" })
  .resize({
    width: 520,
    height: 520,
    fit: "inside",
    withoutEnlargement: true,
  })
  .png();

const logoBuffer = await logo.toBuffer();

await sharp({
  create: {
    width: ogWidth,
    height: ogHeight,
    channels: 4,
    background,
  },
})
  .composite([
    {
      input: logoBuffer,
      gravity: "center",
    },
  ])
  .png({ compressionLevel: 9, adaptiveFiltering: true })
  .toFile(outputOg);

console.log("Wrote", outputOg);
