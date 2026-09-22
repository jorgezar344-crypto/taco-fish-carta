import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const source = path.join(root, "assets", "source");
const output = path.join(root, "public", "images");

const assets = [
  ["hero.png", "hero.webp", 941],
  ["tacos.png", "tacos.webp", 1680],
  ["tacos-sin-capear.png", "tacos-sin-capear.webp", 1680],
  ["tostadas.png", "tostadas.webp", 1680],
  ["caldos.png", "caldos.webp", 1680],
  ["cocteles.png", "cocteles.webp", 1680],
  ["aguachiles.png", "aguachiles.webp", 1680],
  ["bebidas.png", "bebidas.webp", 1680],
  ["cervezas.png", "cervezas.webp", 1680],
  ["postres.png", "postres.webp", 1680],
];

await Promise.all(
  assets.map(([input, file, width]) =>
    sharp(path.join(source, input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(path.join(output, file)),
  ),
);

await sharp(path.join(source, "hero.png"))
  .extract({ left: 245, top: 34, width: 452, height: 354 })
  .resize({ width: 360 })
  .webp({ quality: 88, effort: 5 })
  .toFile(path.join(output, "logo.webp"));

console.log("Optimized Taco Fish imagery.");
