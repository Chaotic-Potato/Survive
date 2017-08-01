var Blocks = {
	Resource: {
		Stone: {
			get: function() {return new Block("stone", true, function(){})},
			rate: 2
		},
		Coal: {
			get: function() {return new Block("coal", true, function(){})},
			rate: 1
		},
		Iron: {
			get: function() {return new Block("iron", true, function(){})},
			rate: 0.7
		},
		Copper: {
			get: function() {return new Block("copper", true, function(){})},
			rate: 0.7
		},
		Uranium: {
			get: function() {return new Block("uranium", true, function(){})},
			rate: 0.3
		}
	}
}
