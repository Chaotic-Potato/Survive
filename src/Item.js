var Item = function(texture, amount, maxAmount) {
	this.texture = texture
	this.amount = amount
	this.maxAmount = maxAmount
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
