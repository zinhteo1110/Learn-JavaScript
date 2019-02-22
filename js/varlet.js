function varTest () {
	var x = 1;
	if (true) {
		var x = 2;
		console.log(x);
	}
	console.log(x);
}

function letTest () {
	let x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}

varTest();
letTest();

//------------------------
var a = 1;
var b = 2;

if (a === 1) {
	var a = 11;
	let b = 22;

	console.log("value of a(var) in this block: "+a);
	console.log("value of b(let) in this block: "+b);
}

console.log("value of a(var) out of the block: "+a);
console.log("value of b(let) out of the block: "+b);

//-------------------
var double = value => value * 2;
console.log(double(3));