var Blocks = {
	Resource: {
		Stone: {
			get: function(tile) {return new Block("stone", false, 1, null, ["Resource", "Stone"], Math.floor(4 + Math.random() * 4), 1, tile)},
			rate: 2
		},
		Coal: {
			get: function(tile) {return new Block("coal", false, 1, null, ["Resource", "Coal"], Math.floor(3 + Math.random() * 4), 1, tile)},
			rate: 1
		},
		Iron: {
			get: function(tile) {return new Block("iron", false, 1, null, ["Resource", "IronOre"], Math.floor(2 + Math.random() * 3), 1, tile)},
			rate: 0.7
		},
		Copper: {
			get: function(tile) {return new Block("copper", false, 1, null, ["Resource", "CopperOre"], Math.floor(2 + Math.random() * 3), 1, tile)},
			rate: 0.7
		},
		Uranium: {
			get: function(tile) {return new Block("uranium", false, 1, null, ["Resource", "UraniumOre"], Math.floor(1 + Math.random() * 3), 1, tile)},
			rate: 0.3
		},
		Tree: {
			get: function(tile) {return new Block("tree", true, 3, null, ["Resource", "Wood"], Math.floor(6 + Math.random() * 7), 3, tile)},
			rate: 15
		}
	},
	Utility: {
		Furnace: {get: function(tile) {return new Block("furnace", true, 1, function(e){}, ["Utility", "Furnace"], 1, 1, tile)}},
		Workbench:{get: function(tile) {return new Block("workbench", true, 1, function(e){}, ["Utility", "Workbench"], 1, 1, tile)}}
	}
}
