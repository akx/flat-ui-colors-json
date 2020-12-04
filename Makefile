MAP_URL := https://flatuicolors.com/static/js/app.0b36eb8.js.map

README.md: scripts/README* palettes.json
	node scripts/generate-readme.js > $@

palettes.json: data/sources-gen
	node scripts/generate-palettes.js > $@

data/sources-gen: data data/app.map
	cd data; node ../node_modules/.bin/source-from-sourcemaps app.map

data/app.map:
	curl -fsSL ${MAP_URL} > $@

data:
	mkdir -p data