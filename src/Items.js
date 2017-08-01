var Items = {
	Resource: {
		Stone: function(amount){return new Item("stone", amount, 400)},
		Coal: function(amount){return new Item("coal", amount, 300)},
		IronOre: function(amount){return new Item("iron_ore", amount, 250)},
		CopperOre: function(amount){return new Item("copper_ore", amount, 250)},
		UraniumOre: function(amount){return new Item("uranium_ore", amount, 150)},
		Wood: function(amount){return new Item("wood", amount, 500)},
	},
	Utility: {
		Furance: function(amount){return new Item("furnace", amount, 1)},
		Workbench: function(amount){return new Item("workbench", amount, 1)}
	}
}
