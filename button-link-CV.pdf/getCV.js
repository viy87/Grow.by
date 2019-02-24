var nameUser = prompt('Enter your name');

while (nameUser == null || nameUser == "") {
	alert('You did not enter your name');
	var nameUser = prompt('Please, enter your name');
}

alert('Hello ' + nameUser + '! ' + 'Now you can get CV.');