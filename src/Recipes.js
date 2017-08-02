var Recipes = [
	new Recipe({
		wood: 50
	}, Items.Utility.Workbench, 1, "hand"),
	new Recipe({
		stone: 25,
	}, Items.Utility.Furnace, 1, "workbench"),
	new Recipe({
		iron_ingot: 5,
	}, Items.Utility.Anvil, 1, "workbench"),
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
	}, Items.Material.CopperIngot, 1, "furnace")
]
