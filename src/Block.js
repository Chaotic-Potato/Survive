var Block = function(texture, clip, size, under, onInt, itemGiven, itemAmount, hp, tool, tile) {
	this.texture = texture
	this.clip = clip
	this.size = size
	this.under = under
	this.onInt = onInt || function(e){}
	this.itemGiven = itemGiven
	this.itemAmount = itemAmount
	this.hp = hp
	this.tool = tool
	this.tile = tile
}

Block.prototype = {
	remove: function() {
		this.tile.block = null
		$P.pickUp(new Items[this.itemGiven[0]][this.itemGiven[1]](this.itemAmount))
	},
	damage: function(n) {
		this.hp -= n
		if (this.hp <= 0) {
			this.remove()
		}
	},
	interact: function(b) {
		switch (b) {
			case 0:
				this.onInt(this)
				break
			case 2:
				this.damage(($P.inventory[0][$P.hotSelect] && $P.inventory[0][$P.hotSelect].tool == this.tool ? $P.inventory[0][$P.hotSelect].damage : 1))
		}
	}
}
