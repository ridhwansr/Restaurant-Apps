const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images/heros');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

fs.readdirSync(target)
  .forEach((Image) => {
    sharp(`${target}/${Image}`)
      .resize(800)
      .toFile(path.resolve(__dirname, `${destination}/${Image.split('.').slice(0, -1).join('.')}-large.jpg`));

    sharp(`${target}/${Image}`)
      .resize(480)
      .toFile(path.resolve(__dirname, `${destination}/${Image.split('.').slice(0, -1).join('.')}-small.jpg`));
  });
