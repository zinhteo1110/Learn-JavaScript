var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = prompt\();
var position = names.indexOf(name);
if (postion >= 0)
{
	print("found " + name + " at position " + position);
}
else {
	print(name + " not found in array.");
}
