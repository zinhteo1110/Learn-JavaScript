//localStorage.clear();
let myObj = { name: 'haidn4', favourite: 'Dota2'};
localStorage.setItem('key', JSON.stringify(myObj));

let item = JSON.parse(localStorage.getItem('key'));
console.log(item);
console.log(typeof item);
