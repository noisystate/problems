// Booleans Review


let b1 = true;
let b2 = false;

let b3 = 10 > 12;

let b4 = b1 || b2 && b3;

// Truthy and Falsy values

// Truthy values are treated like true when included inside the condition of an if(TRUTHY EXPRESSION)
// Falsy values are treated like true when included inside the condition of an if(FALSY EXPRESSION)

// Among Numbers 0 is falsy

if (0) {
    console.log('001\t', 'This line is not going to be printed');
}

if (-15) {
    console.log('002\t', 'This line will be printed');
}

// Among strings empty string is considered falsy value ""

if ("") {
    console.log('003\t', 'You are bad');
}

// Any other string is considered truthy

if ("bayan") {
    console.log('004\t', 'You are cute :P');
}

// Another falsy value is undefined

// You can use it explicitly

if (undefined) {
    console.log('005\t', 'No, I will not get printed');
}
let notDefined = undefined;

console.log('006\t',notDefined);

// and if a variable is declared without being initialized it will be undefined

let alsoNotDefined;

console.log('007\t',alsoNotDefined);

if (alsoNotDefined) {
    console.log('008\t', 'You are just dreaming that this message can show up');
}

// null also is used to describe that an object deson't have a value yet but is defined
// null is also considered a falsy value

let nullVar = null;

if (nullVar) {
    console.log('009\t', 'I am an evil guy');
}

// when using || operator, the expression gets evalutated to the first truthy value it meets

let myOr = undefined || null || false || 'Bayan is nice :P';
console.log('010\t',myOr); // Bayan is nice :P

// or if they are all falsy values it will be evaluted to the last falsy value in the expression
let myOr2 = undefined || null || false || 0 || '';

console.log('011\t',myOr2); // ''

// and when using && operator, the expression gets evaluted to the first falsy value it meets
let myAnd = "Mohamed" && "Bayan" && null;

console.log('012\t',myAnd); // null

// but if all the values are truthy it will be evaluated to the last truthy value in the expression
let myAnd2 = "Mohaned" && "Bayan" && "Are best friends";
console.log('013\t',myAnd2); // "Are best friends"

// the negate (not) operator converts true into false and false into true

console.log('014\t',!true); // false;
console.log('015\t',!false); // true;


// if you need to convert any value to boolean value you can double negate it by !!
// truthy values will be converted into true and falsy values will be converted into false
console.log('017\t',!!"Bayan is so nice"); // true

console.log('018\t',!!undefined); // false
