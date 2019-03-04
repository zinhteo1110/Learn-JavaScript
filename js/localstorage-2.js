/*
	localStorage and sessionStorage, part of the web storage API.

*/
// Map bất kỳ file html nào để chạy script bên dưới.

var result1 = document.getElementById('test1');

// Create item:
let myObj1 = {name: 'BigBang', favourite: 'Dota2'};
localStorage.setItem('key-1', JSON.stringify(myObj1));


let myObj2 = {user: 'haidn4', job: 'system'};
localStorage.setItem('key-2', JSON.stringify(myObj2));

let myObj3 = {game: "Dota2", hero: 'pudge'};
localStorage.setItem('key-3', JSON.stringify(myObj3));

// Read item:
document.writeln("Read Items:");
let item = JSON.parse(localStorage.getItem('key-1'));
result1.innerHTML = document.write(item);
console.log(Array.isArray(item));
console.log(typeof item);
console.log("Gia tri item:" +item);

console.log("So phan tu trong localStorage: "+localStorage.length);
console.log(JSON.parse(localStorage.getItem('key-1')));
console.log(JSON.parse(localStorage.getItem('key-2')));
console.log(JSON.parse(localStorage.getItem('key-3')));

console.log("Dung vong lap de xuat ra pair(key, value) trong localStorage: ");

for (let i = 0; i < localStorage.length; i++) {
	let K = localStorage.key(i);
	let V = JSON.parse(localStorage.getItem(K));
	console.log(K, V);
}

//localStorage.clear(); ==> Viết trực tiếp lệnh này trên Console và chạy.

// tại sao JSON.parse(localStorage.getItem('key-1')) ==> OK
// tại sao let key = localStorage.key(i) &  JSON.parse(localStorage.getItem(key))
// Lúc thì có dấu nháy 'key-1' và không có dấu nháy key.

// ==> 'key-1' là key thứ nhất trong localStorage. (Tức là chỉ định trực tiếp được key nào trong localStorage)
// ==> key là nguyên bộ key trong localStorage. ==> cần dùng vòng for như trên để duyệt.

// Kiểm tra:
let key = localStorage.key(0);
console.log(key);	// xuất ra được key-1
console.log(typeof key);	// string.
let value1 = JSON.parse(localStorage.getItem('key-3'));
console.log(value1);
console.log(typeof value1);

//===========================
//  Test kiểm tra việc tạo ra 1 Object và 1 Ảrray. Sau đó dùng chức năng kiểm tra: Array.isArray để kiểm kết quả của Objec và Array vừa tạo nên
var O1 = {name: 'ABC', function: 'create'};
var A1 = ["1", "abc", "d1fe"];

console.log(typeof O1);
console.log(typeof A1);

console.log(Array.isArray(O1));
console.log(Array.isArray(A1));


console.log(O1);
console.log(A1);