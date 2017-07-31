var Render = {
	ctx: get("game").getContext("2d"),
	tileWidth: 64,
	getWidth: function() {
		return window.innerWidth
	},
	getHeight: function() {
		return window.innerHeight
	},
	resize: function() {
		get("game").width = $R.getWidth()
		get("game").height = $R.getHeight()
	},
	frame: function() {
		$R.clear()
		$R.drawTiles()
		$R.drawPlayer()
		window.requestAnimationFrame($R.frame)
	},
	clear: function() {
		$R.ctx.clearRect(0, 0, $R.getWidth(), $R.getHeight())
	},
	drawImage: function(src, x, y, w, h) {
		var img = new Image()
		img.src = "imgs/" + src + ".png"
		$R.ctx.drawImage(img, x, y, w, h)
	},
	drawTile: function(x, y) {
		$R.drawImage("tile/" + $G.map.tiles[mod(x, $G.map.width)][mod(y, $G.map.height)].texture, ($R.getWidth() - $R.tileWidth) / 2 + ($R.tileWidth * (x - $P.x)), ($R.getHeight() - $R.tileWidth) / 2 + ($R.tileWidth * (y - $P.y)), $R.tileWidth, $R.tileWidth)
	},
	drawTiles: function() {
		let w = Math.ceil($R.getWidth() / $R.tileWidth / 2 - 0.5)
		let h = Math.ceil($R.getHeight() / $R.tileWidth / 2 - 0.5)
		for (let i = -w; i <= w; i++) {
			for (let j = -h; j <= h; j++) {
				$R.drawTile($P.x + i, $P.y + j)
			}
		}
	},
	drawPlayer: function() {
		$R.drawImage("game/player", ($R.getWidth() - $R.tileWidth) / 2, ($R.getHeight() - $R.tileWidth) / 2, $R.tileWidth, $R.tileWidth)
	}
}

var $R = Render
window.onresize = $R.resize
$R.resize()
