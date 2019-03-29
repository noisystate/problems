// You can initialize an array with no elements in it

let arr1 = [];

// and then assign values at specific indices
// array[index] = value

arr1[0] = "Bayan";
arr1[0] = "Kawas";
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

// if you tried to access an index that haven't value in it you will receive undefined

console.log("006\t", arr2[6]);

// you can assign values to elements at any index even if the indices before it are not yet filled

arr1[10] = 'Yuppp';

console.log("007\t" ,arr1);
