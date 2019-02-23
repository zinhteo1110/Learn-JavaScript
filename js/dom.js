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

/-------------------------------------------------------------------------------
/	Others addEventListener:
/		.addEventListener('resize', function) ==> active when resize the window
*/


// ==> Test DOM EventListener
document.getElementById("myBtn1").addEventListener('click', displayDate);

function displayDate() {
	document.getElementById("demo1").innerHTML = Date();
}

// ==> Add an Event Handle to an Element
// document.getElementById("myBtn2").addEventListener('click',Alert_Information);

// function Alert_Information() {
// 	alert("Informations showed by click on button Try It");
// }
	// ==> co the viet lai don gian nhu sau:
document.getElementById("myBtn2").addEventListener('click', function Aler_Information() {
	alert("Information showed by click on button Try It with another way.");
});

// ==> Add Many Event Handlers to the Same Element
// -----> The addEventListener() method allows you to add many events to the same element, 
//			without overwriting existing events:
/*
document.getElementById("myBtn3").addEventListener('click', two_click);

function two_click() {
	alert("This is the First Click");
	alert("This is the Second Click");
}
*/
//	==> Cách viết ở trên cũng sẽ alert 2 thông báo. Tuy nhiên Tutorial w3school lại viết như sau:
var x = document.getElementById("myBtn3");
x.addEventListener('click',First_Click);
x.addEventListener('click',Second_Click);

function First_Click() {
	alert("This is the first click");
}

function Second_Click() {
	alert("This is the second click");
}

// EVENT BUBBLING or EVENT CAPTURING.
// an element inside another element.
// syntax:
//		==>  .addEventListener('event', function, useCapture);
//					useCapture is boolean: true | false
// to use the capturing model pass the third argument as true.
// Example:
// 
//  <div>
//		<ul>
//			<li></li>
//		</ul>
//	</div>
//
// Capturing:  from outside ---> to inside.
// Bubbling :  outside <--- from inside.

document.getElementById("myP1").addEventListener('click', function() {
	alert("You clicked the white element! - div1");
}, false);

document.getElementById("myDiv1").addEventListener('click', function() {
	alert("You clicked the orange element! - div1");
}, false);

document.getElementById("myP2").addEventListener('click', function() {
	alert("You clicked the white element! - div2");
}, true);

document.getElementById("myDiv2").addEventListener('click', function() {
	alert("You clicked the orange element! - div2");
}, true);
// ==>  Vẫn không hiểu Bubbling và Capturing là như thế nào.