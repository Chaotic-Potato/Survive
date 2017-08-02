var Items = {
	Resource: {
		Stone: function(amount){return new Item("stone", amount, 400)},
		Coal: function(amount){return new Item("coal", amount, 300)},
		IronOre: function(amount){return new Item("iron_ore", amount, 250)},
		CopperOre: function(amount){return new Item("copper_ore", amount, 250)},
		UraniumOre: function(amount){return new Item("uranium_ore", amount, 150)},
		Wood: function(amount){return new Item("wood", amount, 500)},
	},
	Material: {
		IronIngot: function(amount){return new Item("iron_ingot", amount, 100)},
		CopperIngot: function(amount){return new Item("copper_ingot", amount, 100)},
	},
	Utility: {
		Furnace: function(amount){return new Item("furnace", amount, 1, ["Utility", "Furnace"])},
		Workbench: function(amount){return new Item("workbench", amount, 1, ["Utility", "Workbench"])},
		Anvil: function(amount){return new Item("anvil", amount, 1, ["Utility", "Anvil"])}
	}
}
