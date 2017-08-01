var Blocks = {
	Resource: {
		Stone: {
			get: function(tile) {return new Block("stone", false, 1, function(e){e.damage(1)}, Items.Stone, Math.floor(4 + Math.random() * 4), 1, tile)},
			rate: 2
		},
		Coal: {
			get: function(tile) {return new Block("coal", false, 1, function(e){e.damage(1)}, Items.Coal, Math.floor(3 + Math.random() * 4), 1, tile)},
			rate: 1
		},
		Iron: {
			get: function(tile) {return new Block("iron", false, 1, function(e){e.damage(1)}, Items.IronOre, Math.floor(2 + Math.random() * 3), 1, tile)},
			rate: 0.7
		},
		Copper: {
			get: function(tile) {return new Block("copper", false, 1, function(e){e.damage(1)}, Items.CopperOre, Math.floor(2 + Math.random() * 3), 1, tile)},
			rate: 0.7
		},
		Uranium: {
			get: function(tile) {return new Block("uranium", false, 1, function(e){e.damage(1)}, Items.UraniumOre, Math.floor(1 + Math.random() * 3), 1, tile)},
			rate: 0.3
		},
		Tree: {
			get: function(tile) {return new Block("tree", true, 3, function(e){e.damage(1)}, Items.Wood, Math.floor(6 + Math.random() * 7), 3, tile)},
			rate: 15
		}

	}
}
