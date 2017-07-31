var Player = {
	x: 0,
	y: 0,
	move: function(o, d) {
		let c = (o ? "x" : "y")
		$P[c] = mod($P[c] + d, $G.map[o ? "width" : "height"])
	},
}

var $P = Player
