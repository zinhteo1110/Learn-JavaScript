var mode = 0;
var click1 = document.getElementById('test');

click1.addEventListener('click', function (e) {
		if (mode == 0) {
			click1.innerHTML = 'Noi dung file html bi thay doi boi JavaScript';
			mode = 1;
		}
},true);


click1.addEventListener('click', function (e) {
	if (mode == 1) {	
		click1.innerHTML = 'Noi dung file html bi thay doi lan thu 2 boi JavaScript';
		mode = 0;
	}
},true);
