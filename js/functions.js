// a map function that should receive a function as first argument and an array as second argument
function map(f, a) {
	var a = [],i;
	for (i = 0; i != a.length; i++)
		return result = f(a[i]);
}

var f = function(x) {
	return x*x*x;
}

var numbers = [0, 1, 2, 5, 10];

var cube = map(f, numbers);
console.log(cube);