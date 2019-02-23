const fs = require('fs');
fs.readFile('contact.txt', 'utf-8', (err, data) => {
	if (err) throw err;
		console.log(data);
})