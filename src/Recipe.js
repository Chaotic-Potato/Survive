var Recipe = function(ings, out, outAmount, station) {
	this.ings = ings
	this.out = new out(outAmount)
	this.station = station
}

Recipe.prototype = {
	check: function(ings, stations) {
		if (stations.indexOf(this.station) == -1) {
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
