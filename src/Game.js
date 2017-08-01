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
	} 
}

var $G = Game
document.onkeydown = $G.keyDown
document.onkeyup = $G.keyUp
$G.init()
