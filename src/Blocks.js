var Blocks = {
	Resource: {
		Stone: {
			get: function() {return new Block("stone", false, 1, function(){})},
			rate: 2
		},
		Coal: {
			get: function() {return new Block("coal", false, 1, function(){})},
			rate: 1
		},
		Iron: {
			get: function() {return new Block("iron", false, 1, function(){})},
			rate: 0.7
		},
		Copper: {
			get: function() {return new Block("copper", false, 1, function(){})},
			rate: 0.7
		},
		Uranium: {
			get: function() {return new Block("uranium", false, 1, function(){})},
			rate: 0.3
		},
		Tree: {
			get: function() {return new Block("tree", true, 3, function(){})},
			rate: 15
		}

	}
}
