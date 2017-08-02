var Item = function(name, amount, maxAmount, tool, damage, block) {
	this.name = name
	this.amount = amount
	this.maxAmount = maxAmount
	this.tool = tool
	this.damage = damage
	this.block = block
}

Item.prototype = {
	same: function(e) {
		if (e == null) {
			return false
		}
		for (let i in e) {
			if (i != "amount" && e[i] != this[i]) {
				return false
			}
		}
		for (let i in this) {
			if (i != "amount" && e[i] != this[i]) {
				return false
			}
		}
		return true
	}
}
