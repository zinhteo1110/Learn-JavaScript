// DOM EventListerner
/*	the addEventListener() method
	: attaches an event handler to an element without overwriting existing event handlers.
syntax:
	element.addEventListener(event, function, useCapture);

	==> the first parameter is the type of the event (like 'click' or 'mousedown')
	==> the second parameter is the function we want to call when the event occurs.
	==> the third parameter is a boolean value specifying whether to use event bubbling or event capturing.
		This parameter is optional

//NOTE: don't use the "on" prefix for the event; use "click" instead of "onclick"
*/
// ==> Test DOM EventListener
document.getElementById("myBtn1").addEventListener('click', displayDate);

function displayDate() {
	document.getElementById("demo1").innerHTML = Date();
}



