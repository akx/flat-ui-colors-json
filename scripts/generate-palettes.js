const fs = require("fs");

function parseWebpackJSON(p) {
  const text = fs.readFileSync(p, "UTF-8");
  const content = /^module.exports = (.+?);?\n/.exec(text);
  return JSON.parse(content[1]);
}

const palettes = parseWebpackJSON("./data/sources-gen/src/data/palettes.json");
palettes.forEach((p) => {
  const data = parseWebpackJSON(
    `./data/sources-gen/src/data/palette-${p.id}.json`
  );
  Object.assign(p, data);
});
console.log(JSON.stringify(palettes, null, 2));
