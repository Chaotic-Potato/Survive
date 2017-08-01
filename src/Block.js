var Block = function(texture, clip, size, onInt, itemGiven, itemAmount, hp, tile) {
	this.texture = texture
	this.clip = clip
	this.size = size
	this.onInt = onInt
	this.itemGiven = itemGiven
	this.itemAmount = itemAmount
	this.hp = hp
	this.tile = tile
}

Block.prototype = {
	remove: function() {
		this.tile.block = null
		$P.pickUp(new this.itemGiven(this.itemAmount))
	},
	damage: function(n) {
		this.hp -= n
		if (this.hp <= 0) {
			this.remove()
		}
	},
	interact: function() {
		this.onInt(this)
	}
}
