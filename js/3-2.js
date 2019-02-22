// Research about Cookie
// follow the link: https://www.tutorialspoint.com/javascript/javascript_cookies.html

// function set Cookie's value
// function WriteCookie() {
// 	if (document.myform.customer.value == "") {
// 		alert("Enter some value! ");
// 		return;
// 	}
// 	cookievalue = escape(document.myform.customer.value) + ";";
// 	document.cookie = "name" + cookievalue;
// 	document.write ("Setting Cookies : " + "name=" + cookievalue );
// }

// function Read Cookie's values
// function ReadCookie () {
// 	var allcookies = document.cookie;
// 	document.write ("All Cookies : " + allcookies );

// 	// Get all the cookies pairs in an array
// 	cookiearray = allcookies.split(';');

// 	// Now take key value pair out of this array
// 	for (var i = 0; i < cookiearray.length; i++) {
// 		name = cookiearray[i].split('=')[0];
// 		value = cookiearray[i].split('=')[1];
// 		document.write ("Key is : " + name + " and Value is : " + value);
// 	}
// }


// Setting Cookies Expiry Date
// get current date
var expiredate = new Date();
// increate date by 5 Hours
expiredate.setHours(expiredate.getHours() + 5);
document.cookie = 'cookiename = cookievalue; expires = +'