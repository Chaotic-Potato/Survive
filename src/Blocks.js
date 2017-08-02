var Blocks = {
	Resource: {
		Stone: {
			get: function(tile) {return new Block("stone", false, 1, null, ["Resource", "Stone"], Math.floor(4 + Math.random() * 4), 5, "pick", tile)},
			rate: 2
		},
		Coal: {
			get: function(tile) {return new Block("coal", false, 1, null, ["Resource", "Coal"], Math.floor(3 + Math.random() * 4), 10, "pick", tile)},
			rate: 1
		},
		Iron: {
			get: function(tile) {return new Block("iron", false, 1, null, ["Resource", "IronOre"], Math.floor(2 + Math.random() * 3), 16, "pick", tile)},
			rate: 0.7
		},
		Copper: {
			get: function(tile) {return new Block("copper", false, 1, null, ["Resource", "CopperOre"], Math.floor(2 + Math.random() * 3), 12, "pick", tile)},
			rate: 0.7
		},
		Uranium: {
			get: function(tile) {return new Block("uranium", false, 1, null, ["Resource", "UraniumOre"], Math.floor(1 + Math.random() * 3), 50, "pick", tile)},
			rate: 0.3
		},
		Tree: {
			get: function(tile) {return new Block("tree", true, 3, null, ["Resource", "Wood"], Math.floor(6 + Math.random() * 7), 8, "axe", tile)},
			rate: 15
		}
	},
	Utility: {
		Furnace: {get: function(tile) {return new Block("furnace", true, 1, function(e){$R.toggleMenu("furnace")}, ["Utility", "Furnace"], 1, 8, "pick", tile)}},
		Workbench: {get: function(tile) {return new Block("workbench", true, 1, function(e){$R.toggleMenu("workbench")}, ["Utility", "Workbench"], 1, 6, "axe", tile)}},
		Anvil: {get: function(tile) {return new Block("anvil", true, 1, function(e){$R.toggleMenu("anvil")}, ["Utility", "Anvil"], 1, 15, "pick", tile)}},
		BlastFurnace: {get: function(tile) {return new Block("blast_furnace", true, 1, function(e){$R.toggleMenu("blast_furnace")}, ["Utility", "BlastFurnace"], 1, 25, "pick", tile)}},
		SteelAnvil: {get: function(tile) {return new Block("steel_anvil", true, 1, function(e){$R.toggleMenu("steel_anvil")}, ["Utility", "SteelAnvil"], 1, 15, "pick", tile)}}
	}
}
