// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//try to solve it once using loops and once using reverseString method you implemented in a former exercise
function reverseString(str) {
    let result = "";
    for (i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}

// Make another solution without using reverseString


function palindrome(str) {
    let rev = reverseString(str);

    return rev === str;
    // if(rev===str){
    // 	return true;
    // }
    // else {
    // 	return false;
    // }
}

if (palindrome('abba') === true
    && palindrome('abcdefg') === false
    && palindrome('oppo') === true
) {
    console.log("Your code passed all tests");
} else {
    console.error("Your code didn't pass all the tests");
}

