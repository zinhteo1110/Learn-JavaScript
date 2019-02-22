// var mode = 0;
// var click1 = document.getElementById('test');

// click1.addEventListener('click', function (e) {
// 		if (mode == 0) {
// 			click1.innerHTML = 'Noi dung file html bi thay doi boi JavaScript';
// 			mode = 1;
// 		}
// },true);


// click1.addEventListener('click', function (e) {
// 	if (mode == 1) {	
// 		click1.innerHTML = 'Noi dung file html bi thay doi lan thu 2 boi JavaScript';
// 		mode = 0;
// 	}
// },true);


function KQ() {
	var ND = document.getElementById('test');
	if (ND.value == 0) {
		ND.innerHTML = "first changed!";
		ND.value = 1;
	}
	else (ND.value == 1) {
		ND.innerHTML = "second changed!";
		ND.value = 0;
	}
}