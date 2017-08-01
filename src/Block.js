var Block = function(texture, clip, size, onInt, itemGiven, itemAmount, hp, tile) {
	this.texture = texture
	this.clip = clip
	this.size = size
	this.onInt = onInt || function(e){}
	this.itemGiven = itemGiven
	this.itemAmount = itemAmount
	this.hp = hp
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
				this.damage(1)
		}
	}
}
