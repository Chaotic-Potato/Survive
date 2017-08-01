var Perlin = function(seed, w, h) {
	this.grad = [[]]
	this.rng = new Random(seed || new Date().getTime())
	for (let i = 0; i <= w; i++) {
		this.grad[i] = []
		for (let j = 0; j <= h; j++) {
			if (i == w || j == h) {
				this.grad[i][j] = this.grad[i % w][j % h]
			}
			else {
				this.grad[i][j] = this.rng.get() * 2 * Math.PI
			}
		}
	}
}

Perlin.prototype = {
	get: function(x, y) {
		x = x
		y = y
		let xs = [Math.floor(x), Math.ceil(x)]
		let ys = [Math.floor(y), Math.ceil(y)]
		let ds = []
		for (i in xs) {
			for (j in ys) {
				ds.push((Math.cos(this.grad[xs[i]][ys[j]]) * (x - xs[i])) + (Math.sin(this.grad[xs[i]][ys[j]]) * (y - ys[j])))	
			}
		}
		let o = []
		for (let i = 0; i < 2; i++) {
			o[i] = intrp(ds[i], ds[i + 2], (x - xs[0]))
		}
		return (intrp(o[0], o[1], (y - ys[0])) + 1) / 2 
	},
}
