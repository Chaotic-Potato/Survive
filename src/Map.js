var Map = function(seed, width, height, scale) {
	this.tiles = []
	this.width = width
	this.height = height
	for (let i = 0; i < width; i++) {
		this.tiles[i] = []
		for (let j = 0; j < height; j++) {
			this.tiles[i][j] = new Tile(i, j, (Math.random() < 0.3 ? "dirt" : "grass"))
		}
	}
}
