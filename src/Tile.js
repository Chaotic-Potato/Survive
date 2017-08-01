var Tile = function(x, y, alt, rng) {
	this.x = x
	this.y = y
	let alts = [
		{e: 0.4, t: "water"},
		{e: 0.45, t: "sand"},
		{e: 0.6, t: (rng.get() < 0.05? "tree": "grass")},
		{e: 1, t: "stone"}
	]
	let i = 0
	while (alts[i].e <= alt && i < alts.length - 1) {
		i++
	}
	this.texture = alts[i].t
}
