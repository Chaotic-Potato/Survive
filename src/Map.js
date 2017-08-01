var Map = function(seed, width, height, scale) {
	this.tiles = []
	this.width = width
	this.height = height
	this.alt = new Perlin(seed, width / scale, height / scale)
	this.rng = new Random(seed)
	for (let i = 0; i < width; i++) {
		this.tiles[i] = []
		for (let j = 0; j < height; j++) {
			this.tiles[i][j] = new Tile(i, j, this.alt.get((i + 0.5) / scale, (j + 0.5) / scale), this.rng)
		}
	}
}
