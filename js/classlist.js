// Click to hidden a button in a div
var h1 = document.getElementById("test");
var b1 = document.getElementById("btn1");
var b2 = document.getElementById("btn2");
var b3 = document.getElementById("btn3");
var result = document.getElementById("btn");
b3.hidden = true;

result.addEventListener("click", function() {
	b1.hidden = true;
	b3.hidden = false;
}, false);

