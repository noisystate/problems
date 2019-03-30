// Given a string str, and a number it returns a string starting from the given index

// slice('Mohamed', 0) --> 'Mohamed'
// slice('Mohamed', 2) --> 'hamed'
// slice('Bayan', 10) --> ''
// slice('max' , -2) --> 'ax'
// slice('KokoNoNo' , -2) --> 'No'

// looping , string concatenation

// function slice(str, start) {
	// if(start >= str.length){
		// return '';
	// }
	// let result = '';
	// if(start == 0){
		// return str;
	// }
	// else if(start > 0){
		// for(let i=start; i<str.length; i++){
			// result += str[i];
		// }
	// }else{
		// start = str.length + start;
		// for(let i=start; i<str.length; i++){
			// result += str[i];
		// }
	// }
	
	// return result;
// }

function slice(str, start) {
	if(start >= str.length){
		return '';
	}
	let result = '';
	if(start == 0){
		return str;
	}
	if(start < 0){
		start = str.length + start;
	}
	for(let i=start; i<str.length; i++){
		result += str[i];
	}
	
	return result;
}


if (slice('Mohamed', 0) == 'Mohamed'
    && slice('Bayan', 2) == 'yan'
    && slice('Max', -1) == 'x'
    && slice('Beboooo', 12) == ''
) {
    console.log('Your code passed the tests');
}else {
    console.error('Your code did not pass the tests');
}