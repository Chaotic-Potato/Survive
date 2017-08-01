var Game = {
	keys: {},
	init: function() {
		$G.map = new Map(12345, 1024, 1024, 32)	
		$R.frame()
		$G.loop = setInterval($G.tick, 1000 / TICK_RATE)
	},
	tick: function() {
		$P.tick()
	},
	keyDown: function(e) {
		let key = {
			i: function(){$R.toggleMenu("inventory")}
		}
		if (key[e.key] && !$G.keys[e.key]) {
			key[e.key]()
		}
		$G.keys[e.key] = true
	},
	keyUp: function(e) {
		$G.keys[e.key] = false
	},
	mouseDown: function(e) {
		$P.selected = null
		for (i in $R.clickboxes) {
			let c = $R.clickboxes[i]
			if (e.x >= c.x && e.x - c.x <= c.w && e.y >= c.y && e.y - c.y <= c.h ) {
				c.df(e.button)
				return
			}
		}
		$P.interact(Math.round($P.x + (e.x - $R.getWidth() / 2) / $R.tileWidth), Math.round($P.y + (e.y - $R.getHeight() / 2) / $R.tileWidth))
	},
	mouseUp: function(e) {
		$G.selected = null
		for (i in $R.clickboxes) {
			let c = $R.clickboxes[i]
			if (e.x >= c.x && e.x - c.x <= c.w && e.y >= c.y && e.y - c.y <= c.h ) {
				c.uf(e.button)
				return
			}
		}
		$P.dropped()
	}
}

var $G = Game
document.onkeydown = $G.keyDown
document.onkeyup = $G.keyUp
document.onmousedown = $G.mouseDown
document.onmouseup = $G.mouseUp
$G.init()
