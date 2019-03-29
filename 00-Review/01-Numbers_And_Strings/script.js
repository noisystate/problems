let n1 = 100;

// to convert number into string

// use toString()

console.log("001\t", n1.toString());

// or just concat it by using + with an empty string ""

console.log("002\t", n1 + "");

let n2 = -100;

// to get the absolute value of a number use Math.abs(someNumber)

console.log("003\t", Math.abs(n1)); // 100
console.log("004\t", Math.abs(n2)); // 100

// to get the sign (1 or -1) of a number use Math.sign(someNumber)

console.log("005\t", Math.sign(n1)); // 1
console.log("006\t", Math.sign(n2)); // -1

// there is a special value related to numbers called NaN meaning not a number

// You can obtain it by expressions that can't produce numbers like 0/0

console.log("007\t", 0 / 0); // NaN

// By the way NaN is considered a falsy value

console.log("008\t", !!NaN); // false

// Numbers that are whole numbers like 100, 5321, 1, -101 are called integers
// Numbers that has a decimal point are called float like 100.01, 55.6 ...

//to convert a string into an integer use parseInt

console.log("009\t", parseInt("51")); // 51
console.log("010\t", parseInt("1033.4321")); // 1033
console.log("011\t", parseInt("00515")); // 515
console.log("012\t", parseInt("-15")); // -15
console.log("013\t", parseInt("0.005")); // 0
console.log("014\t", parseInt("11dsaf")); // 11
console.log("015\t", parseInt("anything1321")); // NaN

//to convert a string to a float use parseFloat

console.log("016\t", parseFloat('10.555')); //10.555

// There are also a special number related value Infinity
// For example produced by providing any non zero value by zero

console.log("017\t", 1 / 0); // Infinity

//Note that NaN is not equal to another NaN

console.log("018\t", NaN == NaN); // false


// You can treat strings like you treat an array to get the nth character of a string

let s = 'Bayan';
console.log("019\t", s[0]);
console.log("020\t", s[1]);
console.log("021\t", s[2]);

// You can also loop through a strings characters like you loop through items of an array
console.log('##############022##################');
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}

// or do the same using
console.log('##############023##################');
for (let char of s) {
    console.log(char);
}
