let n1 = 100;

// to convert number into string

// use toString()

console.log(n1.toString());

// or just concat it by using + with an empty string ""

console.log(n1 + "");

let n2 = -100;

// to get the absolute value of a number use Math.abs(someNumber)

console.log(Math.abs(n1)); // 100
console.log(Math.abs(n2)); // 100

// to get the sign (1 or -1) of a number use Math.sign(someNumber)

console.log(Math.sign(n1)); // 1
console.log(Math.sign(n2)); // -1

// there is a special value related to numbers called NaN meaning not a number

// You can obtain it by expressions that can't produce numbers like 0/0

console.log(0 / 0); // NaN

// By the way NaN is considered a falsy value

console.log(!! NaN); // false

// Numbers that are whole numbers like 100, 5321, 1, -101 are called integers
// Numbers that has a decimal point are called float like 100.01, 55.6 ...

//to convert a string into an integer use parseInt

console.log(parseInt("51")); // 51
console.log(parseInt("1033.4321")); // 1033
console.log(parseInt("00515")); // 515
console.log(parseInt("-15")); // -15
console.log(parseInt("0.005")); // 0
console.log(parseInt("11dsaf")); // 11
console.log(parseInt("anything1321")); // NaN

//to convert a string to a float use parseFloat

console.log(parseFloat('10.555')); //10.555

// There are also a special number related value Infinity
// For example produced by providing any non zero value by zero

console.log(1 / 0); // Infinity

//Note that NaN is not equal to another NaN

console.log(NaN == NaN); // false


// You can treat strings like you treat an array to get the nth character of a string

let s = 'Bayan';
console.log(s[0]);
console.log(s[1]);
console.log(s[2]);

// You can also loop through a strings characters like you loop through items of an array

for (let i = 0; i < s.length; i++){
    console.log(s[i]);
}

// or do the same using

for (let char of s){
    console.log(char);
}
