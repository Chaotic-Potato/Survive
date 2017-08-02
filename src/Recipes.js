var Recipes = [
	new Recipe({
		wood: 50
	}, Items.Utility.Workbench, 1, "hand"),
	new Recipe({
		stone: 25,
	}, Items.Utility.Furnace, 1, "workbench"),
	new Recipe({
		iron_ingot: 5
	}, Items.Utility.Anvil, 1, "workbench"),
	new Recipe({
		stone: 100,
		iron_ingot: 15,
		coal: 10
	}, Items.Utility.BlastFurnace, 1, "anvil"),
	new Recipe({
		steel_ingot: 10
	}, Items.Utility.SteelAnvil, 1, "anvil"),
	new Recipe({
		wood: 15,
		coal: 1
	}, Items.Resource.Coal, 3, "furance"),
	new Recipe({
		iron_ore: 10, 
		coal: 1
	}, Items.Material.IronIngot, 1, "furnace"),
	new Recipe({
		copper_ore: 3,
		coal: 1
	}, Items.Material.CopperIngot, 1, "furnace"),
	new Recipe({
		iron_ingot: 3, 
		coal: 3
	}, Items.Material.SteelIngot, 1, "blast_furnace"),
	new Recipe({
		wood: 1
	}, Items.Furniture.WoodFloor, 5, "workbench"),
	new Recipe({
		wood: 100
	}, Items.Furniture.Bed, 1, "workbench"),
	new Recipe({
		copper_ingot: 5,
		wood: 10,
	}, Items.Tool.CopperPick, 1, "anvil"),
	new Recipe({
		copper_ingot: 3,
		wood: 8,
	}, Items.Tool.CopperAxe, 1, "anvil"),
	new Recipe({
		iron_ingot: 5,
		wood: 10,
	}, Items.Tool.IronPick, 1, "anvil"),
	new Recipe({
		iron_ingot: 3,
		wood: 8,
	}, Items.Tool.IronAxe, 1, "anvil"),
	new Recipe({
		steel_ingot: 5,
		wood: 10,
	}, Items.Tool.SteelPick, 1, "steel_anvil"),
	new Recipe({
		steel_ingot: 3,
		wood: 8,
	}, Items.Tool.SteelAxe, 1, "steel_anvil")
]
