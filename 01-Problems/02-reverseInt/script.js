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

// function reverseInt(n) {
	
	  // if(n<0)
	  // { let sign = Math.sign(n);
      // let str = n.toString();
	  // let rev = reverseString(str);
	  // let intg= parseInt(rev);
	  // let num= intg * sign ;
	  // return num ;
// }
	// if(n>0){
	// convert the integer to string to reverse it	
	// let str = n.toString();
	// reverse string
	// let rev = reverseString(str);
	// convert the string to integer
	// let intg= parseInt(rev);
	// return intg ;
	// }	


// }
function reverseInt(n) {
	  let sign = Math.sign(n);
      let str = n.toString();
	  let rev = reverseString(str);
	  let intg= parseInt(rev);
	  let num= intg * sign ;
	  return num ;
}

 if(reverseInt(15) === 51
     && reverseInt(981) === 189
     && reverseInt(500) === 5
     && reverseInt(-15) === -51
     && reverseInt(-90) === -9

){
    console.log('Your code passed all the tests');
}else{
    console.error("Your code didn't pass all the tests");
}
//convert integer to string by use n.toString() --> "-90"
//reverse the string "09-"
//convert the reversed string to integer by use parseInt("string") -->9


console.log(reverseInt(-90));
// "-90"
