// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Note Use the reverseString you made in the last problem in your solution


//use here the code you used for the answer of the reverseString problem
function reverseString(str) {
let result ="";
	for (i= str.length-1;i>=0;i--){
		result = result + str[i];
	}
	return result ;	
}

function reverseInt(n) {
	let str = n.toString();
	let rev = reverseString(str);
	return parseInt(rev);

}


if(reverseInt(15) === 51
    // && reverseInt(981) === 189
    // && reverseInt(500) === 5
    // && reverseInt(-15) === -51
    // && reverseInt(-90) === -9
){
    console.log('Your code passed all the tests');
}else{
    console.error("Your code didn't pass all the tests");
}