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
		CopperIngot: function(amount){return new Item("copper_ingot", amount, 100)},
		IronIngot: function(amount){return new Item("iron_ingot", amount, 100)},
		SteelIngot: function(amount){return new Item("steel_ingot", amount, 50)}
	},
	Utility: {
		Furnace: function(amount){return new Item("furnace", amount, 1, null, null, ["Utility", "Furnace"])},
		Workbench: function(amount){return new Item("workbench", amount, 1, null, null, ["Utility", "Workbench"])},
		Anvil: function(amount){return new Item("anvil", amount, 1, null, null, ["Utility", "Anvil"])},
		BlastFurnace: function(amount){return new Item("blast_furnace", amount, 1, null, null, ["Utility", "BlastFurnace"])},
		SteelAnvil: function(amount){return new Item("steel_anvil", amount, 1, null, null, ["Utility", "SteelAnvil"])}

	},
	Tool: {
		CopperPick: function(amount){return new Item("copper_pick", amount, 1, "pick", 3)},
		IronPick: function(amount){return new Item("iron_pick", amount, 1, "pick", 5)},
		SteelPick: function(amount){return new Item("steel_pick", amount, 1, "pick", 8)},
		CopperAxe: function(amount){return new Item("copper_axe", amount, 1, "axe", 3)},
		IronAxe: function(amount){return new Item("iron_axe", amount, 1, "axe", 5)},
		SteelAxe: function(amount){return new Item("steel_axe", amount, 1, "axe", 8)}
	}
}
