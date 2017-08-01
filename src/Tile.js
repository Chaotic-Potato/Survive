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
}

Tile.prototype = {
	interact: function() {
		if (this.block) {
			this.block.interact()
		}
	}
}
