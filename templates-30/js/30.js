var a = document.querySelectorAll('.card .card-blockquote');
console.log(a);

for(var i = 0; i < a.length; i++) {
	if (i==2) {
	console.log(a[i]);
	a[i].innerHTML = "day la phan tu dc chon!";
	}
}

var b = document.getElementById('nd');
console.log(b);

var c = document.querySelectorAll("#nd");
console.log(c);

var d = document.querySelectorAll("[data-thongbao]");
console.log(d);