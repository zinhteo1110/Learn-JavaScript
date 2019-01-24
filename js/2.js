// Nhap vao so trang. Vi du: 520
// Nhap vao so luong trang can in moi mat. Vi du: 10
// Khi do se co cac cap 10 trang le va 10 trang chan. Nhu sau::
//	==> 1,3,5,7,9,11,13,15,17,19
//	==> 2,4,6,8,10,12,14,16,18,20
//	==> 21,23,25,27,29,31,33,35,37,39
//	==> 22,24,26,28,30,32,34,36,38,40

// ==> SOLUTION
//	+ su dung Array
//	+ Array: isEven --> so chan
//	+ Array: isOdd	--> so le

var dayso = [];
var pages = prompt("Nhap vao so trang:: ");
var num_print = 10;
var SLI1M = pages/num_print;

var daysochan = [];
var daysole = [];

// Viet ham kiem tra so le
function isEven(num) {
	return num%2 == 0;
}

// Viet ham kiem tra so le
function isOdd(num) {
	return num%2 == 1;
}

for( var i = 0; i <= pages; ++i) {
	dayso[i] = i + 1;
}

var evens = dayso.filter(isEven);
console.log("day so chan la: "+evens);
var odds = dayso.filter(isOdd);
console.log("day so le la: "+odds);



// while ( evens.length%10 == 0) {
// 	step += 10;
// 	daysochan = evens.splice(begin,step,0);
// }

var B1	= odds.splice(0,10);
var E1 = evens.splice(0,10);

var mangle = [];
var mangchan = [];

// ==> Viet ham lay han so phan tu dau tien cua mang
function split(Array_Numbers,capacity) {
	Array_Numbers.splice(0,capacity);
}

console.log("day so le dc lay ra:     "+B1);
console.log("day so chan dc lay ra:   "+E1);
console.log("day so le con lai:      "+odds);
console.log("day so chan con lai:    "+evens);

// for (var i = 0; i < SLI1M; ++i) {
// 	mangle[i] =  
// }






























