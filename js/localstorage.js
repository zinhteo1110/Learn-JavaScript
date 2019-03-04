const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

<<<<<<< HEAD
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
=======
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
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
});
>>>>>>> 0c4f7fed8716dfdfd89c551272b8f631ed20ee36
