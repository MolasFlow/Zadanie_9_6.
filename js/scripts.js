// scripts.js
// Below is the command that makeing the test of JavaScripts working
var variable = 'test';

console.log(variable); // ok i understand now

/*
var name = prompt('Enter your name');
alert('Hello, ' + name);
console.log('Hello, ' + name);   




function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('Nieprawidłowe dane');
	} else {
		return a * h / 2;
	}
};

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(-3, 15);

console.log(triangle2Area);

var triangle3Area = getTriangleArea(2, 0);

console.log(triangle3Area);


var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	console.log('To imie jest już dodane');
};

console.log(allNames);


var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased);

var length = text.length;

var partOftext = textCharsAfter.slice(0, length/2);

console.log(partOftext);


function drawTree(height) {
	withButtonItemsClass
		for (var j = 0; j < height - i; j++) {
			star += ' ';
		}
		for (var j = 0; j <= i; j++) {
			star += '* '; // dodałem spację po *, żeby choinka stała prosto :)
		}
		console.log(star);	
	}
}

drawTree(5);



var withButtonItemsClass = document.getElementsByClassName('button');

console.log(withButtonItemsClass);

var buttonLenght = withButtonItemsClass.length;

var newElem = withButtonItemsClass;

for (var b = 0; b < buttonLenght; b++) {
	alert(newElem[b].innerText);
}
*/


var list = document.getElementById('list');

var add = document.getElementById('addElem');

var itemNumber = document.getElementsByTagName('li');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + itemNumber.length + ' '; 
	list.appendChild(element);

});





























