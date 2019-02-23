var myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener('keypress', checkName, false);

function checkName(evt) {
	var charCode = evt.charCode;
	if (charCode != 0) {
		if (charCode < 97 || charCode > 122) {
			evt.preventDefault();
			displayWarning("Please use lowercase letters only." + "\n" + "charCode: " + charCode + "\n");
		}
	}
}

var warningTimeout;
var warningBox = document.createElement("div");		//tao element
warningBox.className = "warning";

function displayWarning(msg) {
	warningBox.innerHTML = msg;

	if (document.body.contains(warningBox)) {	//true
		console.log(document.body.contains(warningBox));
		console.log(warningBox);
		window.clearTimeout(warningTimeout);
	} else {
		// insert warningBox after myTextbox
		myTextbox.parentNode.insertBefore(warningBox, myTextbox.nextSibling);
	}

	warningTimeout = window.setTimeout(function() {
		warningBox.parentNode.removeChild(warningBox);
		warningTimeout = -1;
	}, 2000);	//delay 2s
}