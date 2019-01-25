/*
//	1. Test ham in ra ket qua
var x = 3;
var y = 1.1;
document.write(x + y);
document.write("<br>");
document.write(x * y);
document.write("<br>");
document.write((x+y)*(x-y));
document.write("<br>");
var z = 9;
document.write(Math.sqrt(z));
document.write("<br>");
document.write(Math.abs(y/x));
// -- End 1.

// 2. Example 1-5 The switch statement
//putstr("Enter a month number: ");
//var monthNum = readline();

var monthNum = prompt("Enter a month number: ");
var monthName;
switch (monthNum) {
	case "1":
		monthName = "January";
			document.write("<br>");
		document.write("Day la thang mot.");
		break;
	case "2":
		monthName = "February";
			document.write("<br>");
		document.write("Day la thang hai.");
		break;
	case "3":
		monthName = "March";
			document.write("<br>");
		document.write("Day la thang ba.");
		break;
	case "4":
		monthName = "April";
			document.write("<br>");
		document.write("Day la thang tu.");
		break;
	case "5":
		monthName = "May";
			document.write("<br>");
		document.write("Day la thang nam.");
		break;
	case "6":
		monthName = "June";
			document.write("<br>");
		document.write("Day la thang sau.");
		break;
	case "7":
		monthName = "July";
		document.write("<br>");
		document.write("Day la thang bay.");
		break;
	case "8":
		monthName = "August";
			document.write("<br>");
		document.write("Day la thang tam.");
		break;
	case "9":
		monthName = "September";
			document.write("<br>");
		document.write("Day la thang chin.");
		break;
	case "10":
		monthName = "October";
			document.write("<br>");
		document.write("Day la thang muoi.");
		break;
	case "11":
		monthName = "November";
			document.write("<br>");
		document.write("Day la thang muoi mot.");
		break;
	case "12":
		monthName = "December";
			document.write("<br>");
		document.write("Day la thang muoi hai.");
		break;
	default:
		document.write("<br>");
		document.write("Bad input");
}



// 3. Tim hieu ve "Adding | Removing Elements ---- an Array"
//	-- at first: 
//		+ .unshift()
//		- .shift()

// -- at last:
//		+ .push()
//		- .pop()	

// cach # de Add | Remove .... in an Array.
var numbers = [1,2,3,4,5];
var numbers_2 = new Array();
var numbers_3 = new Array(10);
var numbers_4 = 3;
var arr = [7,4,1776];

document.write(numbers.length);
document.write("<br>");
document.write(numbers_2.length);
document.write("<br>");
document.write(numbers_3.length);
document.write("<br>");
document.write(Array.isArray(numbers_4));
document.write("<br>");
document.write(Array.isArray(arr));


document.write("<br>")
var nums = [];
for(i = 0; i < 100; ++i)
{
	nums[i] = i + 1;
}
document.write(nums);

document.write("<br>");
var numbers_5 = [1,2,3,4,5];
var sum = numbers_5[0] + numbers_5[1] + numbers_5[2] + numbers_5[3] + numbers_5[4];
document.write(sum);

document.write("<br>");
var numbers_6 = [1,2,3,5,8,13,21];
var sum = 0;
for(var i = 0; i< numbers_6.length; ++i){
	sum += numbers_6[i];
}
document.write(sum);

// 3.1 Creating Arrays from Strings
document.write("<br>");
var sentence = "the quick brown for jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i ){
	document.write("word " + i + ": " + words[i]);
	document.write("<br>");
}

// 3.2 assign one array to another array
document.write("<br>");
document.write("assign one array to another array: ");
var numbers_7 = [];
for (var i =0; i < 10; ++i)
{
	numbers_7[i] = i + 1;
}
var samenumbers_7 = numbers_7;
document.write("<br>");
document.write("---> values of numbers_7's array: <br>");
document.write(numbers_7);
numbers_7[0] = 400;
document.write("<br>");
document.write("---> values of samenumbers_7's array: ");
document.write("<br>");
document.write(samenumbers_7);

// 3.3 searching for a value in the string.
document.write("<br>");
var word = prompt("Enter a word to search for: ");
var str = ["David", "Mike", "Zinhteo", "BigBang", "Napole", "Mike", "Jennifer"];
// var FirstPos = str.indexOf(word);
// var LastPos = str.lastIndexOf(word);
// document.write("<br>First found " + word + " at position " + FirstPos);
// document.write("<br>Last found " + word + " at position " + LastPos);
var vitri = str.indexOf(word);
if (vitri >= 0){
	document.write("<br> Tim thay ten " + word + " tai vi tri thu " + vitri + " trong Array.");
}
else{
	document.write("<br> Not found " + word + " in Array.");
}

*/

/*
// 3.4 Creating New Arrays from Existing Arrays
// concat() && splice()
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
document.write(itDiv);
document.write("<br>");
document.write(typeof(itDiv));
document.write("<br>");
document.write(Array.isArray(itDiv));

itDiv = dmpDept.concat(cisDept);
document.write("<br>");
document.write(itDiv);
document.write("<br>");
document.write(Array.isArray(itDiv));

*/

/*
// test with splice()
// tien hanh cat phan tu cua mang ra. O vi tri thu 3 va lay 3 phan tu.
document.write("we have an array: ----> ['Mike', 'Robe', 'Julie', 'John', 'Zinhteo', 'Raymond', 'Cynthia', 'Bryan']");
document.write("<br>");
var itDiv2 = ["Mike", "Robe", "Julie", "John", "Zinhteo", "Raymond", "Cynthia", "Bryan"];
var dmpDept2 = itDiv2.splice(3,3);
document.write("Tien hanh cat 3 phan tu trong mang tu vi tri thu 3 cua mang ta duoc: ");
document.write("<br>");
var cisDept2 = itDiv2;
document.write("====> "+ dmpDept2);
document.write("<br>");
document.write("Mang ban dau itDiv2 con lai cac phan tu: ");
document.write("<br>");
document.write("====> "+ cisDept2);


// 3.5 Adding | Removing Elements to an Array
// Adding: ---> push():last && unshift():first
// Removing: --> pop():last && shift(): first
var nums = [1,2,3,4,5];
document.write("Ta co mang 5 phan tu: [1,2,3,4,5]");

// Adding element into the last array.
nums.push(6);
document.write("<br>");
document.write("<br>Ket Qua them(Adding) 1 phan tu o cuoi mang : "+nums);


// Adding element into the first array.
nums = [1,2,3,4,5];
document.write("<br>");
var numadd = 7;
for( var i = nums.length; i > 0; i--)
{
	nums[i] = nums[i-1];
}
nums[0] = numadd;
document.write("Ket Qua khi them(Adding) 1 phan tu vao dau mang: "+nums);


// Removing the first element.
nums = [1,2,3,4,5];
for(var i = 0; i < nums.length; ++i){
	nums[i] = nums[i+1];
}
document.write("<br> Ket Qua khi xoa(Removing) 1 phan tu o dau mang : "+nums);

// Removing the last element
nums = [1,2,3,4,5];
var newnums = [];
var N = nums.length; // 5
for (var i = 0; i < N-1; i++){
	newnums[i] = nums[i];
}
document.write("<br> Ket Qua khi xoa(Removing) 1 phan tu o cuoi mang :"+newnums);

document.write("<br>");

//	3.6 Adding | Removing elements in the middle array.

// with splice() to add
var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
document.write("Them cac phan tu vao giua mang voi lenh splice() <br>")
document.write(nums);

document.write("<br>");
// with splice() to remove
var nums = [1,2,3,400,500,600,4,5,6];
nums.splice(3,3);
document.write("Xoa cac phan tu o giua mang voi lenh splice() <br>");
document.write(nums);


//	Putting Array Elements in Order.
document.write("<br>");
var nums = [1,2,3,4,5];
document.write("Ta co mang cac phan tu: [1,2,3,4,5]<br>");
document.write("Mang sap xep nguoc: ");
nums.reverse();
document.write(nums);

document.write("<br>");
var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
document.write("Ta co mang names nhu sau: "+names);
names.sort();
document.write("<br> Mang sau khi dc sap xep: "+ names);
//sort not work so well with numbers. Just work so well with string.

// ==> compare 2 numbers
document.write("<br> Compare 2 numbers.");
function compare(num1, num2){
	return num1 - num2;
}

var nums = [3,1,2,100,4,200];
nums.sort(compare);
document.write(nums);

// Non-Array-Generatin Iterator Functions
// with forEach()
document.write("<br>");
function square(num) {
	document.write("<br>Binh phuong cua "+num, " la: " +(num*num));
}
var nums = [1,2,3,4,5,6,7,8,9,10];
var result = nums.forEach(square);

// with every()
document.write("<br>");
function isEven(num){
	return num % 2 == 0;
}

function isOdd(num){
	return num % 2 != 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
	document.write("<br>All number are even");
}
else
{
	document.write("<br>Not all numbers are even");
}

// -- with some()
document.write("<br>");
function isEven(num) {
	return num %2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
	document.write("Some numbers are even");
}
else {
	document.write("no numbers are even");
}

document.write("<br>");
var nums = [1,3,5,7,9];
var someEven = nums.some(isEven);
if (someEven){
	document.write("some number are even");
}
else
{
	document.write("no numbers are even.")
}

//	-- with reduce()
document.write("<br>");
var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < nums.length; ++i)
{
	sum += nums[i];
}
document.write("<br>"+sum);

// another way
function add(runningTotal, currentValue){
	return runningTotal + currentValue;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var sum = nums.reduce(add);
document.write("<br>Tong cua 1-->10 theo reduce() la: "+sum);
// add(1,2) --> 3
// add(3,3) --> 6
// ... add (45,10) --> 55.

// We can also use reduce() with strings to perform concatenation:
document.write("<br>");
function concat(accumulatedString, item){
	return accumulatedString + item;
} 
var words = ["the ", "quick ", "brown ", "fox "];
var sentence1 = words.reduce(concat);
document.write(sentence1);

// reduceRight() similarly to reduce(), only working form the righthand -->
// side of the array to the left.
document.write("<br>");
var sentence2 = words.reduceRight(concat);
document.write(sentence2);

// --> Iterator Functions That Return a New Array
//	array:map()	filter()
function curve(grade){
	return grade += 5;
}
var grades = [3,6,4,27,23,31];
var newgrades = grades.map(curve);
document.write("<br>New values after plus 5: "+newgrades);

document.write("<br>");
var nums = [];
for (var i = 0; i < 20; ++i){
	nums[i] = i + 1;
}
var evens = nums.filter(isEven);
document.write("Even numbers: "+evens);
var odds = nums.filter(isOdd);
document.write("<br> Odd numbers: "+odds);

// Here is another interestign use of filter()
function passing(num) {
	return num >= 60;
}

document.write("<br>");
var grades = [];
for (var i = 0; i < 20; ++i){
	grades[i] = Math.floor(Math.random() * 101);
}

var passGrades = grades.filter(passing);
document.write("<br>All grades: "+grades);
document.write("<br>Passing grades: "+passGrades);

// --filter() with string
document.write("<br>");
function afterc(str) {
	if(str.indexOf("cie") > -1) {
		return true;
	}
	return false;
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
document.write("<br> Cac tu co chuoi tim kiem 'cie' thoa dk la: "+misspelled); 


// === 3.7 Two-Dimensional Arrays
document.write("<br> mang 2 chieu.");
var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i)
{
	twod[i] = [];
}
document.write("<br>"+twod);

// a two-dimensional array looks like this:
// --> int[][] myArray = { {0,1,2,3}, {3,2,1,0}, {3,5,6,1}, {3,8,3,4} };

// --> It is better to think of the two-dimensional array as a matrix.
//  int [][] myArray = { {0,1,2,3},			
//						 {3,2,1,0},
//						 {3,5,6,1},
//						 {3,8,3,4}	};

Array.matrix = function(numrows, numcols, initial){
	var arr = [];
	for(var i = 0; i < numrows; ++i){
		var columns = [];
		for(var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,4,8);
document.write("<br>"+nums[2][2]);
var names = Array.matrix(3,3,"");
names[1][2] = "Joe";
document.write("<br>"+names[1][2]);

// --> We can also create a two-dimensional array 
//     and initialize it to a set of values in one line.
var grades  = [[89,77,78], [76,82,81], [91,94,89]];
document.write("<br> Gia tri cua mang o vi tri [2][2]: "+grades[2][2]) //89

*/

// ==> Processing Two-Dimensional Array Elements
// Tinh diem trung binh cua moi sinh vien trong cau truc mang 2 chieu.
//var grades = [[89,77,78], [76,82,81], [91,94,89]];
// var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
// var total = 0;
// var average = 0.0;
// for(var row = 0; row < grades.length; ++row){			// grades.length --> 3
// 	for(var col = 0; col < grades[row].length; ++col){
// 		total += grades[row][col];
// 	}
// 	average = total / grades[row].length;                // grades[row].length --> 4
// 	document.write("<br> Student " +parseInt(row+1) + " average: "+average.toFixed(2));
// 	total = 0;
// 	average= 0.0;
// }

// Student 1 average: 83.50
// Student 2 average: 81.00
// Student 3 average: 92.75 

// document.write("<br>");
// for(var col = 0; col < grades.length; ++col){
// 	for(var row = 0; row < grades[col].length; ++row){
// 		total += grades[row][col];
// 	}

// 	average = total / grades[col].length;
// 	document.write("<br> Test "+parseInt(col+1) + " average: "+average.toFixed(2));
// 	total = 0;
// 	average = 0.0;
// }
// // chay ko loi voi numrow == numcol.

// ==> Jagged Arrays
// var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
// var total = 0;
// var average = 0.0;
// for(var row = 0; row < grades.length; ++row){
// 	for(var col =0; col < grades[row].length; ++col) {
// 		total += grades[row][col];
// 	}
// 	average = total / grades[row].length;
// 	document.write("<br> Student "+parseInt(row+1) + " average: " + average.toFixed(2));	
//  	total = 0;
// 	average = 0;
// }

/*

// 3.8 ==> Arrays of Objects
function Point(x,y) {
	this.x = x;
	this.y = y;
}

function displayPts(arr) {
	for(var i =0; i < arr.length; ++i){
		document.write("<br> "+arr[i].x + "," + arr[i].y);
	}
}

var p1 = new Point(1,2);
var p2 = new Point(3,5);
var p3 = new Point(2,8);
var p4 = new Point(4,4);
var Points = [p1,p2,p3,p4];

for(var i = 0; i < Points.length; ++i){
	document.write("<br> Point "+ parseInt(i+1) +": --> " +Points[i].x + "," +Points[i].y+"<br>");
}

document.write("<br> Mang sau khi them phan tu: ");
var p5 = new Point(12,-3);
Points.push(p5);
// for(var i = 0; i < Points.length; ++i){
// 	document.write("<br> Point "+parseInt(i+1) +" :--> "+Points[i].x +","+Points[i].y);
// }
displayPts(Points);

Points.shift();
document.write("<br> Mang sau khi tien hanh lay ra 1 phan tu: ");
displayPts(Points);



// ==> 3.9  Arrays in Objects
function weekTemps() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(temp){
	this.dataStore.push(temp);
}

function average() {
	var total = 0;
	for(var i = 0; i < this.dataStore.length; ++i){
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}

var thisweek = new weekTemps();
thisweek.add(52);
thisweek.add(55);
thisweek.add(61);
thisweek.add(65);
thisweek.add(55);
thisweek.add(50);
thisweek.add(52);
thisweek.add(49);
document.write("<br>");
document.write("<br> Chi so nhiet do cac ngay trong tuan la: ");
for(var i = 0; i < thisweek.dataStore.length; ++i ){
	document.write(thisweek.dataStore[i]+" ");
}
document.write("<br> Nhiet do trung binh trong tuan nay la: "+thisweek.average());
*/

// ==> 4.0 How to Modify Attributes, Classes, and Styles in the DOM.
















