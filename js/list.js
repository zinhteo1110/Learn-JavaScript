// Abstract data type (ADT)
// A List Class Implementation
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

// Append: Adding an Element to a List
function append(element) {
	this.dataStore[this.listSize++] = element;
}

// Remove: Removing an Element from a List.
//	First, we have to find the element in the list, and then we have to remove it
//	Find: Finding an Element in a List
function find(element) {
	for(var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

//	Remove
function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true
	}
	return false;
}

//	Length: Determining the Number of Elements in a List
function length() {
	return this.listSize;
}

// toString: Retrieving a List's Elements
function toString() {
	return this.dataStore;
}

// Insert: Inserting an Element into a List
function insert(element, after) {
	var insertPos = this.find(after);
	if (insertPos > -1) {
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}

// Clear: Removing All Elements from a List
function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

// Contains: Determining if a Given Value Ls in a List
// The Contains() function is usefull when you want to check a list to see if a particular value is part of the list.
//	Here is the definition
function contains(element) {
	for(var i = 0; i < this.dataStore.length; ++i) {
		if (this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

// Traversing a List
function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize-1;
}

function prev() {
	if (this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if (this.pos < this.listSize-1) {
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

//	Iterating Through a List
var names = new List();
	names.append("Clayton");
	names.append("Raymond");
	names.append("Cynthia");
	names.append("Jennifer");
	names.append("Bryan");
	names.append("Danny");
	names.append("BigBang");

// var A = names.front();
// var B = names.currPos();
// var C = names.length();
// var D = names.next();
// var E = names.getElement();
// console.log(names.getElement());

// names.next();
// console.log(names.getElement());

 // names.next();
 // names.next();
 // names.next();
// console.log(names.currPos());
// names.prev();
// console.log(names.getElement());

// var A = names.length();
// console.log(names.listSize);
// console.log(names.dataStore);
// console.log(A);

// for(names.front(); names.currPos() < names.length(); names.next()) {
// 	console.log(names.getElement());
// }

// for (names.end(); names.currPos() >= 0; names.prev()) {
// 	console.log(names.getElement);
// }

//names.clear();
// for(A; B < C; D) {
// 	console.log(E);
// }

console.log(names.front);
































