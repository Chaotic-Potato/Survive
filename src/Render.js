var Render = {
	ctx: get("game").getContext("2d"),
	tileWidth: 32,
	imgs: [],
	start: new Date().getTime(),
	menu: null,
	menus: {
		inventory: "drawInventory"
	},
	getWidth: function() {
		return window.innerWidth
	},
	getHeight: function() {
		return window.innerHeight
	},
	resize: function() {
		get("game").width = $R.getWidth()
		get("game").height = $R.getHeight()
		$R.ctx.imageSmoothingEnabled = false
		$R.ctx.webkitImageSmoothingEnabled = false
		$R.ctx.mozImageSmoothingEnabled = false
	},
	frame: function() {
		$R.blocks = []
		$R.clickboxes = []
		$R.clear()
		$R.drawTiles()
		$R.blocks.sort(function(a, b){return (a.y != b.y ? a.y > b.y : (a.size != b.size ? a.size > b.size : a.x > b.x)) * 2 - 1})
		$R.blocks.filter(function(e){return e.y < $P.y}).forEach(function(e){$R.drawBlock(e.x, e.y)})
		$R.drawPlayer()
		$R.blocks.filter(function(e){return e.y >= $P.y}).forEach(function(e){$R.drawBlock(e.x, e.y)})
		$R.drawHUD()
		$R.drawHotbar()
		if ($R.menu != null) {
			$R[$R.menu.func]()
		}
		window.requestAnimationFrame($R.frame)
	},
	loadMenu: function(name) {
		if ($R.menus[name]) {
			$R.menu = {
				name: name,
				func: $R.menus[name]
			}
		}
	},
	toggleMenu: function(name) {
		if (!$R.menu || $R.menu.name != name) {
			$R.loadMenu(name)
		}	
		else {
			$R.menu = null
		}
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
	drawTile: function(t, x, y) {
		$R.drawImage("tile/" + t.texture, ($R.getWidth() - $R.tileWidth) / 2 + ($R.tileWidth * (x - $P.x)), ($R.getHeight() - $R.tileWidth) / 2 + ($R.tileWidth * (y - $P.y)), $R.tileWidth, $R.tileWidth)
	},
	drawBlock: function(x, y) {
		let tile = $G.map.tiles[mod(x, $G.map.width)][mod(y, $G.map.height)]
		let w = $R.tileWidth * tile.block.size
		$R.drawImage("block/" + tile.block.texture, ($R.getWidth() - w) / 2 + ($R.tileWidth * (x - $P.x)), ($R.getHeight() - w) / 2 + ($R.tileWidth * (y - $P.y)), w, w)
		},
	drawTiles: function() {
		let w = Math.ceil($R.getWidth() / $R.tileWidth / 2 + 0.5) + 1
		let h = Math.ceil($R.getHeight() / $R.tileWidth / 2 + 0.5) + 1
		let blocks = []
		for (let i = -w; i <= w; i++) {
			for (let j = -h; j <= h; j++) {
				let x = Math.round($P.x) + i
				let y = Math.round($P.y) + j
				let tile = $G.map.tiles[mod(x, $G.map.width)][mod(y, $G.map.height)]
				$R.drawTile(tile, x, y)
				if (tile.block) {
					$R.blocks.push({
						x: x,
						y: y,
						size: tile.block.size
					})
				}
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
			$R.drawImage("item/" + item.texture, x + 8, y + 8, 64, 64)
			if (item.amount > 1) {
				$R.drawText(item.amount, x + 68, y + 68, "#FFF", "16px Monospace", "right")
			}
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
	},
	drawInventory: function() {
		for (let i = 0; i < $P.inventory.length; i++) {
			for (j in $P.inventory[i]) {
				let x = $R.getWidth() / 2 + ((j - ($P.inventory[0].length / 2)) * 88)
				let y = 16 + i * 88
				$R.drawItemSlot(x, y, $P.inventory[i][j])
				const m = i
				const n = j
				$R.clickboxes.push({
					x: x,
					y: y,
					w: 80,
					h: 80,
					df: function(b) {
						$P.invMDown(m, n, b)
					},
					uf: function(b) {
						$P.invMUp(m, n)	
					}
				})
			}
		}
	}
}

var $R = Render
window.onresize = $R.resize
$R.resize()
