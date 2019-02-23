var dayso = [];
var dayso2 = [];
var begin_page = 635;
var end_page = 656; 
var total_pages = parseInt(end_page - begin_page);
var pair_pages = parseInt(total_pages/10);
var each_pair = parseInt(pair_pages/2);

for(var i = 0; i < total_pages; i++)
{
	dayso[i] = begin_page + i;
}

for(var i = 0; i <= total_pages + 1; i++ ){
	dayso2[i] = i + begin_page;
}

//document.write("<br> So luong trang: "+(end_page - begin_page));
document.write("<br> So luong trang: "+dayso.length);
document.write("<br> So luong cac day so le & day so chan can de in la: "+pair_pages);
document.write("<br> So luong moi cap le & moi cap chan la : "+each_pair);
document.write("<br>");

function isEvens(num) {
	return num%2 == 0;
} 

function isOdds(num) {
	return num%2 == 1;
}

var Evens = dayso.filter(isEvens);
var Odds = dayso.filter(isOdds);
// console.log(Odds);
// console.log(Evens);

document.write("<br>"+Odds);
document.write("<br>"+Evens);

// var O1 = Odds.splice(0,10);
// var E1 = Evens.splice(0,10);

//split10(Odds,Evens,each_pair);

// xay dung ham cat 10 phan tu dau tien cua mang
/*
function split10_Odd(nums,each_pair){
	var nums_Odd = [];
	var i = 0;
	while (i < each_pair){
		nums_Odd[i] = nums.splice(0,10);
		document.write("<br>"+nums_Odd[i]);
		i++;
	}
}
 ==> HAM TREN OK.


function split10(Array_Odds,Array_Evens,each_pair){
	var nums_Odd = [];
	var nums_Even = [];
	var i = 0;
	while (i < each_pair){
		nums_Odd[i] = Array_Odds.splice(0,10);
		nums_Even[i] = Array_Evens.splice(0,10);
		document.write("<br>"+nums_Odd[i]);
		document.write("<br>"+nums_Even[i]);
		document.write("<br>");
		i++;
	}
}
*/

// document.write("<br> dayso2 la: "+dayso2);
// //begin = 261, end = 379
// var Evens2 = [];
// Evens2 = dayso2.filter(isEvens);
// document.write("<br> TotalPages la: " +total_pages);
// document.write("<br> day so le tu 381-->539 la: "+Evens2);

// for(var i = 0; i < nums_Odd.length; i++){
// 	document.write("<br>"+nums_Odd[i]);
// }

// function split10_Even(nums[],each_pair){
// 	var nums_Even = nums.splice(0,10);
// }	

// document.write("<br>"+O1);
// document.write("<br>"+E1);
// document.write("<br>"+Odds);
// document.write("<br>"+Evens);

//function printebook()
// xay dung vong long for de in 32 cap day so le & day so chan (tuc la in 32 lan)
// for (var i = 0; i < pair_pages; i++){

// }

/*
lập trình cho phép phân tách 2 dãy số chắn và lẽ phục vụ cho việc in ebooks 2 mặt 
		1. Nhập vào số trang tổng. Ví dụ: 532 trang.
		2. Vậy có 2 dãy số lẻ và chẵn như sau: 
			1,3,5,7,9....531
			2,4,6,8,10...532
		3. Nhập số cần phân tách của từng dãy số. Ví dụ nếu nhập vào 10 thì dãy số lẻ sẽ phân tách như sau:
			1,3,5,7,9,11,13,15,17,19  ( gồm 10 số - tương ứng 10 trang)
			2,4,6,8,10,12,14,16,18,20  (tương tự 10 cho 10 số chẵn)

			Tiến trình này lặp cho tới khi tiến tới trang cuối cùng. [532]

		4. Kết thúc xuất ra được file để copy paste cho việc in.	
		5. Mở rộng có thể lập trình in trực tiếp.
*/  

////////////////////////////////////////////////////////////////////////////////////////
// Muc tieu trang HTML view dc button trang thai cua tung dong : Printting | Printted.//
// Nhap vao so trang bat dau va trang ket thuc.										  //
// Luu lai trang thai tren de co the in nhung lan sau								  //
// Hien thi ten Ebook dang in.													      //
// ==> Cac kien thuc can thiet de lam cac yeu cau tren:
// ==> + CSS
//  	 - Lam hieu ung process the hien viec printting.	
// ==> + Tim hieu ve Elements, cach thuc tuong tac Elements giua HTML va JavaScript.