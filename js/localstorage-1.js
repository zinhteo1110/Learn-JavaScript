const form = document.querySelector('form');
const input = document.getElementById('text');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


// create each Element <li>
const liMaker = (text) => {
	const li = document.createElement('li');
	li.textContent = text;
	ul.appendChild(li);
}  

form.addEventListener('submit', function (e) {
	e.preventDefault();

	itemsArray.push(input.value);
	localStorage.setItem(input.value);
})

