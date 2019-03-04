const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));  // JSON.stringify() to convert a data array to a string.
const data = JSON.parse(localStorage.getItem('items'));		// JSON.parse() to convert the contents of localStorage back into something we can work with later in the data variable.

// what is const ?

const liMaker = (text) => {
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}

form.addEventListener('submit', function(e) {
	e.preventDefault();

	itemsArray.push(input.value);
	localStorage.setItem('items', JSON.stringify(itemsArray));
	liMaker(input.value);
	input.value = "";
});

data.forEach(item => {
	liMaker(item);
});

button.addEventListener('click', function () {
	localStorage.clear();
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}
})
