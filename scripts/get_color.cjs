const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('C:\\Users\\advdi\\.gemini\\antigravity\\brain\\6c63b850-3969-4bea-8627-25ad6f66b5f2\\media__1777644471379.png')
  .pipe(new PNG())
  .on('parsed', function() {
    let r = 0, g = 0, b = 0, count = 0;
    const colors = {};
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        let idx = (this.width * y + x) << 2;
        let a = this.data[idx + 3];
        if (a > 128) {
          let cr = this.data[idx];
          let cg = this.data[idx + 1];
          let cb = this.data[idx + 2];
          let hex = ((1 << 24) + (cr << 16) + (cg << 8) + cb).toString(16).slice(1);
          colors[hex] = (colors[hex] || 0) + 1;
        }
      }
    }
    // Sort colors by frequency
    const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    console.log("Top 10 colors:");
    for (let i = 0; i < Math.min(10, sorted.length); i++) {
        console.log("#" + sorted[i][0] + " - count: " + sorted[i][1]);
    }
  });
