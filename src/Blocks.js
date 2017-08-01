var Blocks = {
	Resource: {
		Stone: {
			get: function() {return new Block("stone", true, 1, function(){})},
			rate: 2
		},
		Coal: {
			get: function() {return new Block("coal", true, 1, function(){})},
			rate: 1
		},
		Iron: {
			get: function() {return new Block("iron", true, 1, function(){})},
			rate: 0.7
		},
		Copper: {
			get: function() {return new Block("copper", true, 1, function(){})},
			rate: 0.7
		},
		Uranium: {
			get: function() {return new Block("uranium", true, 1, function(){})},
			rate: 0.3
		},
		Tree: {
			get: function() {return new Block("tree", false, 3, function(){})},
			rate: 5
		}

	}
}
