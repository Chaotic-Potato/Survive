var Player = {
	x: 0,
	y: 0,
	stats: {
		hp: 1,
		food: 1,
		h2o: 1,
		rest: 1
	},
	inventory: [[]],
	move: function(o, d) {
		let c = (o ? "x" : "y")
		$P[c] = mod($P[c] + d, $G.map[o ? "width" : "height"])
	},
}

var $P = Player
