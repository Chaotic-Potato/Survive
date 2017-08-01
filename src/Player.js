var Player = {
	x: 0,
	y: 0,
	stats: {
		hp: 1,
		food: 1,
		h2o: 1,
		rest: 1
	},
	inventory: (function(w, h){
		let out = [[]]
		for (let i = 0; i < w; i++) {
			out[i] = []
			for (let j = 0; j < h; j++) {
				out[i][j] = null
			}
		}
		return out
	})(4, 5),
	tick: function() {
		let dir = [0, 0]
		let keys = {
			w: [0,-1],
			s: [0,1],
			a: [-1,0],
			d: [1,0]
		}
		for (i in keys) {
			if ($G.keys[i]) {
				dir[0] += keys[i][0]
				dir[1] += keys[i][1]
			}
		}
		let mult = $P.getSpeed() / TICK_RATE / dist(dir[0], dir[1])
		$P.x += mult * dir[0] || 0
		$P.y += mult * dir[1] || 0
	},
	getSpeed: function() {
		return 5
	}
}

var $P = Player
