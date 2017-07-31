function get(d) {
	return document.getElementById(d)
}

function mod(n, d) {
	return (n + d * (n < 0 ? Math.ceil(-n / d) : 0)) % d
}
