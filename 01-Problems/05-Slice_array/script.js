// implement same slice you made for strings but for arrays

//slice([1,2,3,4],0) == [1,2,3,4]
//slice([1,2,3,4],10) == []
//slice([1,2,3,4],2) == [3,4]
//slice([1,2,3,4,5,6],-2) == [5,6]


// Don't use the ready slice method, use loops to implement yours
function slice(arr, start) {

    let result = [];
    for (let i = start; i < arr.length; i++) {
        // result[result.length] = arr[i];
        result.push(arr[i]);
    }
    return result;
}

console.log(slice([1, 2, 3, 4], 0));
//slice([1,2,3,4],0) === "1234"
if (slice([1, 2, 3, 4], 0).toString() == [1, 2, 3, 4].toString()
// && slice([1, 2, 3, 4], 10).toString() == [].toString()
// && slice([1, 2, 3, 4], 2).toString() == [3, 4].toString()
// && slice([1, 2, 3, 4, 5, 6], -2).toString() == [5, 6].toString()
) {
    console.log('Your code passed the tests');
} else {
    console.error('Your code did not pass the tests');
}