function Queue() {
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
}

function enqueue(element) {
	this.dataStore.push(element);
}

function dequeue() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length-1];
}

function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}	
	return retStr;
}

function empty() {
	if (this.dataStore.length == 0) {
		return true;
	}
	else {
		return false;
	}
}

// ==> TEST
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
//console.log(q.toString());
q.dequeue();
console.log("Front of queue: "+q.front());
console.log("Back of queue: "+q.back());

function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(males, famales) {
<<<<<<< HEAD
	
}



=======
	var names = read("contact.txt").split("\n");
	for (var i = 0; i < names.length; ++i) {
		names[i] = names[i].trim();
	}
	for (var i = 0; i < names.length; ++i) {
		var dancer = names[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if (sex == "F") {
			females.enqueue(new Dancer(name, sex));
		}
		else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females) {
	document.write("<br> The dance partners are: \n");
	while(!females.empty() && !males.empty()) {
		person = females.dequeue();
		putstr("Female dancer is: " + person.name);
		person = males.dequeue();
		document.write("<br> and the male dancer is: " + person.name);
	}
}


var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if (!femaleDancers.empty()) {
	document.write(femaleDancers.front().name + " is waitting to dance.");
}
if (!maleDancers.empty()) {
	document.write(maleDancers.front().name + " is waitting to dance.");
}
>>>>>>> 0c4f7fed8716dfdfd89c551272b8f631ed20ee36













