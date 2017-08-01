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
		}
		if (key[e.key] && !$G.keys[e.key]) {
			key[e.key]()
		}
		$G.keys[e.key] = true
	},
	keyUp: function(e) {
		$G.keys[e.key] = false
	},
	click: function(e) {
		$P.interact(Math.round($P.x + (e.x - $R.getWidth() / 2) / $R.tileWidth), Math.round($P.y + (e.y - $R.getHeight() / 2) / $R.tileWidth))
	}
}

var $G = Game
document.onkeydown = $G.keyDown
document.onkeyup = $G.keyUp
document.onclick = $G.click
$G.init()
