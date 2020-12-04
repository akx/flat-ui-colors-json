const fs = require("fs");

console.log(fs.readFileSync(__dirname + "/README.header.md", "UTF-8"));

require("../palettes.json").forEach((p) => {
  console.log(`* ${p.from}`);
});

console.log(fs.readFileSync(__dirname + "/README.footer.md", "UTF-8"));
