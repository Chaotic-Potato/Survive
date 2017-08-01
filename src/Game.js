var Game = {
	keys: {},
	init: function() {
		$G.map = new Map(12345, 1024, 1024, 32)	
		$R.frame()
	},
	keyDown: function(e) {
		let key = {
			w: function(){$P.move(false, -1)},
			s: function(){$P.move(false, 1)},
			a: function(){$P.move(true, -1)},
			d: function(){$P.move(true, 1)}
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
