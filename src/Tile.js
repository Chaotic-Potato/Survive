var Tile = function(x, y, alt, rng, resourceRates) {
	this.x = x
	this.y = y
	let alts = [
		{e: 0.4, t: "water"},
		{e: 0.43, t: "sand"},
		{e: 1, t: "grass"},
	]
	let i = 0
	while (alts[i].e <= alt && i < alts.length - 1) {
		i++
	}
	this.texture = alts[i].t
	let resources = []
	let resource = null
	for (i in resourceRates) {
		if (rng.get() * 300 < resourceRates[i] * Blocks.Resource[i].rate && this.texture == "grass") {
			resources.push(i)
		}
	}
	if (resources.length > 0) {
		resource = new Blocks.Resource[resources[Math.floor(rng.get() * resources.length)]].get(this)
	}
	this.block = resource
	this.item = null
}

Tile.prototype = {
	interact: function(b, i) {
		if (this.item) {
			$P.pickUp(this.item)
			this.item = null
		}
		else if (this.block) {
			this.block.interact(b)
		}
		else if (i && b == 0 && i.block) {
			this.block = Blocks[i.block[0]][i.block[1]].get(this)
			return true
		}
		return false
	},
	drop: function(e) {
		let a = 0
		let x = 0
		let y = 0
		while (true) {
			let tile = $G.map.tiles[mod(this.x + x, $G.map.width)][mod(this.y + y, $G.map.height)]
			if (!tile.item) {
				tile.item = e
				return
			}
			if (x > $G.map.width / 2 && y > $G.map.height / 2) {
				return 
			}
			let next = false
			if (Math.abs(x) == Math.abs(y)) {
				if (x >= 0 && y >= 0) {
					next = true
				}
				a -= Math.PI / 2
			}
			if (next) {
		        	x++
			}
			else {
				x += Math.round(Math.cos(a))
				y += Math.round(Math.sin(a))
		        }
		}
	}
}
