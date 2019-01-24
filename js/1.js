// var totalpage = 36;
// var daysole = [];
// var daysochan = [];

// var count_each_array = totalpage/2; 	//18
// var print_page = 9;	// yeu cau moi lan in 9 trang so le, 9 trang so chan. ==> daysole.length = 9, 
// 																			// ==> daysochan = 9.
// var print_loop = count_each_array/print_page;

// for(i=0; i<=totalpage; i++)
// {
// 	if(i%2 == 1)
// 	{
// 		daysole.push(i);  //add them gia tri vao cuoi mang.
// 	}

// 	if(i !=0 && i%2 ==0)
// 	{
// 		daysochan.push(i);
// 	}
// }

// console.log(daysole); //in ra 18 so le 1,3,5...
// console.log(daysochan);	//in ra 18 so chan 2,4,6...

// console.log("So chu so le: ");
// console.log(daysole.length);

//luc nay dang co ket qua: 
//	daysole  [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35]
//	daysochan[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36]

// muc tieu:
// 1,3,5,7,9,11,13,15,17
// 2,4,6,8,10,12,14,16,18

//	19,21,23,25,27,29,31,33,35
//	20,22,24,26,28,30,32,34,36

// for(j=0; j<print_page; j++)
// {
// 	console.log(daysole);
// 	console.log(daysochan);
// }

// --- Two-Dimensional Arrays
Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i){
		var columns = [];
		for (var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr; // tra ve mang 2 chieu voi gia tri rong.
}
var nums = Array.matrix(5,5,0); //khoi tao mang 2 chieu 5 dong, 5 cot va chua co gia tri.
document.write("<br> Gia tri mang o vi tri [1][1] la: "+nums[1][1]);
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";;
document.write("<br> Gia tri cua mang o vi tri [1][2] la:: "+names[1][2]);