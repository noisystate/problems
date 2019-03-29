// An object is like a map of key-value pairs

let obj = { // here one, two and three are called keys or properties (props in short)
    one: 1,
    two: 2,
    three: 3
};

// And then you can access values at specific keys in this format

console.log("001\t", obj.one);

// Or this way

console.log("002\t", obj['two']);

// if the key string is stored in some object then we must use the second form
let key = 'three';
console.log("003\t", obj[key]); // meaning obj['three'] or obj.three

// while if you tried to use obj.key , it will search for key called key
// and thus returns undefined

console.log("004\t", obj.key);

// You can initialize it as an empty object also

let obj2 = {};

// Adding values at specific keys

obj.four = 4;

obj2[key] = 3;

// You can loop through object key value pairs using (for .. in ..)

console.log('############005############');
for (let key in obj) {
    console.log("Value at key [" + key + "] is:\t", obj[key]);
}
console.log("###########################");

// Example: Create an object that form like a map holding the characters used in a string
// as the keys of the object and the times it repeated in the string as the value

let countMap = {};
let str = "mohamed ahmed ibrahim";

for (let char of str) {
    if (countMap[char]) {
        countMap[char]++;
    } else {
        countMap[char] = 1;
    }
}

console.log("006\t", countMap);