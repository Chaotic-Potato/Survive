var Render = {
	ctx: get("game").getContext("2d"),
	tileWidth: 32,
	imgs: [],
	start: new Date().getTime(),
	frames: 0,
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
		$R.frames++
		setTimeout(function(){$R.frames--}, 1000)
		$R.clear()
		$R.drawTiles()
		$R.drawPlayer()
		$R.drawHUD()
		$R.drawHotbar()
		window.requestAnimationFrame($R.frame)
	},
	clear: function() {
		$R.ctx.clearRect(0, 0, $R.getWidth(), $R.getHeight())
	},
	drawImage: function(src, x, y, w, h) {
		if (!$R.imgs[src]) {
			var img = new Image()
			img.src = "imgs/" + src + ".png"
			$R.imgs[src] = img
		}
		$R.ctx.drawImage($R.imgs[src], x, y, w, h)
	},
	drawRect: function(x, y, w, h, c) {
		$R.ctx.fillStyle = c 
		$R.ctx.fillRect(x, y, w, h)	
	},
	drawText: function(s, x, y, c, f, a) {
		$R.ctx.font = f
		$R.ctx.textAlign = a
		$R.ctx.fillStyle = c
		$R.ctx.fillText(s, x, y)	
	},
	drawTile: function(x, y) {
		$R.drawImage("tile/" + $G.map.tiles[mod(x, $G.map.width)][mod(y, $G.map.height)].texture, ($R.getWidth() - $R.tileWidth) / 2 + ($R.tileWidth * (x - $P.x)), ($R.getHeight() - $R.tileWidth) / 2 + ($R.tileWidth * (y - $P.y)), $R.tileWidth, $R.tileWidth)
	},
	drawTiles: function() {
		let w = Math.ceil($R.getWidth() / $R.tileWidth / 2 + 0.5)
		let h = Math.ceil($R.getHeight() / $R.tileWidth / 2 + 0.5)
		for (let i = -w; i <= w; i++) {
			for (let j = -h; j <= h; j++) {
				$R.drawTile(Math.round($P.x) + i, Math.round($P.y) + j)
			}
		}
	},
	drawPlayer: function() {
		$R.drawImage("game/player", ($R.getWidth() - $R.tileWidth) / 2, ($R.getHeight() - $R.tileWidth) / 2, $R.tileWidth, $R.tileWidth)
	},
	drawBar: function(x, y, c, f, t) {
		$R.drawRect(x, y, 272, 48, "#555")
		$R.drawRect(x + 4, y + 4, 264, 40, "#888")
		$R.drawRect(x + 8, y + 8, 256 * f, 32, c)
		$R.drawRect(x + 264, y + 8, -256 * (1 - f), 32, "#555")
		$R.drawText(t + ": " + percent(f), x + 136, y + 32, "#FFF", "24px Monospace", "center")
	},
	drawItemSlot: function(x, y, item) {
		$R.drawRect(x, y, 80, 80, "#555")
		$R.drawRect(x + 4, y + 4, 72, 72, "#888")
		$R.drawRect(x + 8, y + 8, 64, 64, "#777")
		if (item != null) {
			$R.drawImage(item.texture, x + 4, y + 4, 32, 32)
		}
	},
	drawHotbar: function() {
		for (i in $P.inventory[0]) {
			$R.drawItemSlot($R.getWidth() / 2 + ((i - ($P.inventory[0].length / 2)) * 88), $R.getHeight() - 96, $P.inventory[0][i])
		}
	},
	drawHUD: function() {
		let colors = {
			rest: "#3C3",
			h2o: "#33C",
			food: "#C83",
			hp: "#C33"
		}
		let c = 0
		for (i in colors) {
			$R.drawBar((c % 2 ? 16 : $R.getWidth() - 288), $R.getHeight() - 64 * (Math.floor(c / 2) + 1), colors[i], $P.stats[i], i.toUpperCase())
			c++
		}
	}
}

var $R = Render
window.onresize = $R.resize
$R.resize()
$R.ctx.imageSmoothingEnabled = false
