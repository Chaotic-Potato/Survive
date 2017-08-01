var Recipe = function(ings, out, outAmount, tool) {
	this.ings = ings
	this.out = new out(outAmount)
	this.tool = tool
}

Recipe.prototype = {
	check: function(ings, tools) {
		if (tools.indexOf(this.tool) == -1) {
			return false
		}
		for (let i in this.ings) {
			if (!ings[i] || this.ings[i] > ings[i]) {
				return false
			} 
		}
		return true
	} 
}
