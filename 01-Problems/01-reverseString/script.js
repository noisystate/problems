// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverseString('apple') === 'elppa'
//   reverseString('hello') === 'olleh'
//   reverseString('Greetings!') === '!sgniteerG'


function reverseString(str) {
	let result ="";
	for (i= str.length-1;i>=0;i--){
		result = result + str[i];
	}
	return result ;		
}

if (reverseString('apple') === 'elppa'
    && reverseString('hello') === 'olleh'
    && reverseString('Greetings!') === '!sgniteerG'
) {
    console.log('Your code passed all tests');
}else{
    console.error('Your code didn\'t pass all the tests');
}