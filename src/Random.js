var Random = function(seed) {
	this.state = [seed]
	this.index = 0
	for (let i = 1; i < 624; i++) {
		let v = (this.state[i - 1] >>> 30) ^ this.state[i - 1]
		this.state[i] = (((((v & 0xFFFF0000) >>> 16) * 0x6C078965) << 16) + (v & 0x0000FFFF) * 0x6C078965) + i
		this.state[i] %= 0x100000000
	}
	this.iterate()
}

Random.prototype = {
	iterate: function() {
		for (let i = 0; i < 624; i++) {
			var b = (this.state[i] & 0x80000000) | (this.state[(i + 1) % 624] & 0x7FFFFFFF)
			this.state[i] = this.state[i + (i < 227 ? 397 : -227)] ^ (b >>> 1) ^ ((b & 0x00000001) * 0x9908B0DF)
		}
	},
	get: function() {
		if (this.index >= this.state.length) {
			this.iterate()
			this.index = 0
		}
		let o = this.state[this.index]
		o ^= (o >>> 11)
		o ^= (o << 7) & 0x9D2C5680
		o ^= (o << 15) & 0xEFC60000
		o ^= o >>> 18
		this.index++
		return 0.5 + o / 0x100000000
	}
}
