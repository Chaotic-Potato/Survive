var Map = function(seed, width, height, scale) {
	this.tiles = []
	this.width = width
	this.height = height
	let rng = new Random(seed)
	let alt = new Perlin(rng.get(), width / scale, height / scale)
	let resources = {}
	for (i in Blocks.Resource) {
		resources[i] = new Perlin(rng.get(), width / scale, height / scale)

	}
	for (let i = 0; i < width; i++) {
		this.tiles[i] = []
		for (let j = 0; j < height; j++) {
			let resourceRates = {}
			for (k in resources) {
				resourceRates[k] = resources[k].get((i + 0.5) / scale, (j + 0.5) / scale)
			}
			this.tiles[i][j] = new Tile(i, j, alt.get((i + 0.5) / scale, (j + 0.5) / scale), rng, resourceRates)
		}
	}
}
