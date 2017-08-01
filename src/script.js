const TICK_RATE = 60

function get(d) {
	return document.getElementById(d)
}

function mod(n, d) {
	return (n + d * (n < 0 ? Math.ceil(-n / d) : 0)) % d
}

function intrp(a, b, f){
	return a + (6 * Math.pow(f, 5) - 15 * Math.pow(f, 4) + 10 * Math.pow(f, 3)) * (b - a)
}

function percent(n) {
	return Math.round(n * 100) + "%"
}

function dist(x, y) {
	return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}
