var Player = {
	x: 0,
	y: 0,
	stats: {
		hp: 1,
		food: 1,
		h2o: 1,
		rest: 1
	},
	selected: null,
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
		$P.x = $P.x + (mult * dir[0] || 0)
		$P.y = $P.y + (mult * dir[1] || 0)
		if (($G.map.tiles[mod(Math.round($P.x), $G.map.width)][mod(Math.round($P.y), $G.map.height)].block || {clip: false}).clip) {
			let dx = ($P.x % 1) - 0.5
			let dy = ($P.y % 1) - 0.5
			if (dx > dy) {
				$P.y = Math.floor($P.y) + 0.5
			}
			else {
				$P.x = Math.floor($P.x) + 0.5
			}
		}
	},
	pickUp: function(e) {
		for (i in $P.inventory) {
			for (j in $P.inventory[i]) {
				if (e.same($P.inventory[i][j])) {
					if ($P.inventory[i][j].amount + e.amount <= e.maxAmount) {
						$P.inventory[i][j].amount += e.amount
						return
					}
					else {
						e.amount = $P.inventory[i][j].amount + e.amount - e.maxAmount 
						$P.inventory[i][j].amount = e.maxAmount
					}
				}
			}
		}
		for (i in $P.inventory) {
			for (j in $P.inventory[i]) {
				if ($P.inventory[i][j] == null) {
					$P.inventory[i][j] = e
					return
				}
			}
		}
		$P.drop(e)
	},
	dropped: function(x, y) {
		if ($P.selected && $P.selected[2] == 0) {
			$P.drop($P.inventory[$P.selected[0]][$P.selected[1]])
			$P.inventory[$P.selected[0]][$P.selected[1]] = null
		}	
	},
	drop: function(e) {
		$G.map.tiles[mod(Math.round($P.x), $G.map.width)][mod(Math.round($P.y), $G.map.height)].drop(e)
	},
	interact: function(x, y) {
		if (dist(x - $P.x, y - $P.y) <= 5) {
			$G.map.tiles[mod(x, $G.map.width)][mod(y, $G.map.height)].interact()
		}		
	},
	swap: function(x0, y0, x1, y1) {
		if (x0 == x1 && y0 == y1) {
			return
		}
		if ($P.inventory[x0][y0] && $P.inventory[x0][y0].same($P.inventory[x1][y1])) {
			let sum = $P.inventory[x0][y0].amount + $P.inventory[x1][y1].amount
			$P.inventory[x0][y0].amount = Math.min(sum, $P.inventory[x0][y0].maxAmount)
			$P.inventory[x1][y1].amount = sum - $P.inventory[x1][y1].maxAmount
			if ($P.inventory[x1][y1].amount <= 0) {
				$P.inventory[x1][y1] = null
			}
		}
		else {
			let temp = $P.inventory[x0][y0]
			$P.inventory[x0][y0] = $P.inventory[x1][y1]
			$P.inventory[x1][y1] = temp
		}
	},
	split: function(x0, y0, x1, y1) {
		if (x0 == x1 && y0 == y1) {
			return
		}
		if ($P.inventory[x0][y0] || !$P.inventory[x1][y1]) {
			$P.swap(x0, y0, x1, y1)
		}
		else {
			$P.inventory[x0][y0] = clone($P.inventory[x1][y1])
			$P.inventory[x0][y0].amount = Math.floor($P.inventory[x0][y0].amount / 2)
			$P.inventory[x1][y1].amount = Math.ceil($P.inventory[x1][y1].amount / 2)
			if ($P.inventory[x0][y0].amount <= 0) {
				$P.inventory[x0][y0] = null
			}
		}
	},
	invMDown: function(x, y, c) {
		$P.selected = [x, y, c]	
	},
	invMUp: function(x, y) {
		if ($P.selected) {
			switch ($P.selected[2]) {
				case 0:
					$P.swap(x, y, $P.selected[0], $P.selected[1])
					break
				case 1:
					$P.split(x, y, $P.selected[0], $P.selected[1])
			}
		}
	},
	getSpeed: function() {
		return ($G.map.tiles[mod(Math.round($P.x), $G.map.width)][mod(Math.round($P.y), $G.map.height)].texture == "water" ? 2 : 5)
	},
	getIngs: function(){
		let out = {}
		for (let i in $P.inventory) {
			for (let j in $P.inventory[i]) {
				if ($P.inventory[i][j]) {
					if (out[$P.inventory[i][j].name]) {
						out[$P.inventory[i][j].name] += $P.inventory[i][j].amount
					}
					else {
						out[$P.inventory[i][j].name] = $P.inventory[i][j].amount
					}
				}
			}
		}
		return out
	},
	getCanCraft: function(r) {
		let ings = $P.getIngs()
		let tools = ["hand"]
		return Recipes.filter(function(e){return e.check(ings, tools)})
	},
	craft: function(r) {
		let ings = clone(r.ings)
		for (let i = $P.inventory.length - 1; i >= 0; i--) {
			for (let j = $P.inventory[0].length - 1; j >= 0; j--) {
				if ($P.inventory[i][j] && ings[$P.inventory[i][j].name]) {
					if (ings[$P.inventory[i][j].name] < $P.inventory[i][j].amount) {
						$P.inventory[i][j].amount -= ings[$P.inventory[i][j].name]
						ings[$P.inventory[i][j].name] = 0
					}
					else {
						ings[$P.inventory[i][j].name] -= $P.inventory[i][j].amount
						$P.inventory[i][j] = null
					}
				}
			}
		}
		$P.pickUp(r.out)
	}
}

var $P = Player
