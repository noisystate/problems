// You can initialize an array with no elements in it

let arr1 = [];

// and then assign values at specific indixes
// array[index] = value

arr1[0] = "Bayan";


arr1[1] = "Kawas";
console.info("001\t", arr1);

// or You can initialize it with items in it

let arr2 = ['Bayan', 'Kawas'];
console.log("002\t", arr2);

// and also can continue adding elements to it
arr2[2] = "Is good girl";
console.log("003\t", arr2);

// you can access any element using its index

console.log("004\t", arr1[1]);
console.log("005\t", arr2[0]);

// to get the count of items in an array we use length attribute
console.log('006\t', arr1.length);
console.log('007\t', arr2.length);

// if you tried to access an index that haven't value in it you will receive undefined

console.log("008\t", arr2[6]);

// you can assign values to elements at any index even if the indices before it are not yet filled

arr1[10] = 'Yuppp';


// but the length of arr1 will be 11, not 2

console.log("009\t" ,arr1.length);

// and any values in between will be undefined

console.log("010\t" ,arr1[2]);
console.log("011\t" ,arr1[3]);
console.log("012\t" ,arr1[6]);


// Looping through array elements

let arr3 = ['one', 'two', 'three', 'four'];

console.log('############013##############');
for(let i=0; i< arr3.length; i++){
    console.log("Element #" + i + "is:\t", arr3[i]);
}

// Or this way
// But you can't maintain index this way
console.log('############014##############');
for(element of arr3){
    console.log(element);
}
console.log('############################');

// You can also fill the array with values using loops
// But note that you can only use the first method as the second method (for .. of .. ) doesn't maintain indices and you can't assign
// value to array without the index of the element you want to assign to


// Example : Write a loop that hold the even numbers from 0 until 20
let arr4 = [];
for(let i=0; i<=10; i++){
    arr4[i] = i * 2;
}

console.log("016\t", arr4);


