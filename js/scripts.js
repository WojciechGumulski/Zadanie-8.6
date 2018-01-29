var a = prompt('Wprowadź wartość zmiennej a'),
	b = prompt('Wprowadź wartość zmiennej b'),
	value = (a * a) - (2 * a * b) + (b * b);
alert('Wynik działania = ' + value);
console.log('Wynik działania = ' + value);

if (value > 0) {
	console.log('Wynik dodatni');
	alert('Wynik dodatni');
} else if (value < 0) {
	console.log('Wynik ujemny');
	alert('Wynik ujemny');
} else {
	console.log('Wynik jest równy zero');
	alert('Wynik jest równy zero');
}