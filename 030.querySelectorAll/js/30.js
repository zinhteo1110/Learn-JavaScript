// var a = document.querySelectorAll('.card-columns .card .card-blockquote');							// ==> not work
// var a = document.querySelectorAll('.card-columns .card .card-img-top .card-block'); 					// ==> not work
// var a = document.querySelectorAll('.card-columns .card .block'); 									// ==> not work
var a = document.querySelectorAll('.card .card-text .x');
// var b = document.querySelectorAll('.card-title');
//console.log(a);

// console.log(a[0].innerHTML = "ABC");

for (var i = 0; i < a.length; i++) {
	// if(i==0){
		// console.log(a[i].innerHTML = "Day la phan tu thu 3");
		console.log(a[i]);
		console.log(a);
		console.log("a.length:" +a.length);
		// a[i].innerHTML = "Day la phan tu duoc chon!";
	// }
	
}

var b = document.querySelectorAll('#nd');
//console.log(b);

var c = document.querySelectorAll('[data-thongbao]');
// console.log(c);

// for (var i = 0; i < b.length; i++) {
// 	 console.log(b);
	// console.log("Day la card-title thu"+i);
	// b[i].innerHTML = "Day la Card title thu " + i;
	// if(i==0) {
	// 	b[i].innerHTML = "Day la Card Title thu 1";
	// }
	// b[i].innerHTML = "Day la Card Title thu " + parseInt(i+1);
//}