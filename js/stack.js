// Example 4-1. The stack class
function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.peek = peek;
	this.pop = pop;
	this.clear = clear;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;

}

function peek() {
	return this.dataStore[this.top-1];
}

function pop() {
	return this.dataStore[--this.top];
}

function clear() {
	this.top = 0;
}

function length() {
	return this.top;
}

//	------Example: ------------------
/*
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: "+ s.length());
console.log(s.peek());
var popped = s.pop();
console.log("the popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
console.log("length: "+s.length());
s.clear();
console.log(s.peek());
console.log("length: "+s.length());
s.push("Clayton");
console.log(s.peek());
console.log("------------------------------");

*/

/*===================================================
function mulBase(num, base) {
	var s1 = new Stack();
	do {
		s1.push(num % base);
		num = Math.floor(num /= base);	//Math.floor: ham lay so nguyen duong.
		console.log(num);
	} while (num > 0);
	var converted = "";
	while (s1.length() > 0) {
		converted +=  s1.pop();
	}
	return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

var num = 125;
var base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

===================================================== */

//	Palindromes
/*
	dad is apalindrome

       | 
	racecar   rac -->e--< rac i sa palindrome
	   |
*/

function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
	} 
	var rword = "";
	while (s.length() > 0)
	{
		rword += s.pop();
	}
	if (word == rword) {
		return true;
	}
	else {
		return false;
	}
}

	var word = "100001";
	if (isPalindrome(word)) {
		console.log(word + " is a palindmore. ");
	}
	else {
		console.log(word + " is not a palindmore. ");
	}

	var word = "racecar";
	if (isPalindrome(word)) {
		console.log(word + " is a palinmore.");
	}
	
//	Demonstrating Recursion

function factorial(n) {
	if (n==0) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}


console.log("Luy thua cua 5 la: "+factorial(5));

//	Example 4-5. Simulating recursice processes using a stack
// 5,4,3,2,1 5*4*3*2*1
function fact(n) {
	var s = new Stack();
	while (n > 1)
	{
		s.push(n--);
	}
	var product = 1;
	console.log("So phan tu trong Stack la: "+s.length());
	while (s.length() > 0) {
		product = product * s.pop();
	}
	return product;
}

console.log("Luy thua cua n su dung Stack la: "+fact(5));






























