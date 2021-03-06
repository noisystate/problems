// --- Directions
// Given an array of numbers, return the maximum number in the given array
// ordering of numbers.
// --- Examples
//   max([51,1231,32,6645]) === 6645
//   max([51]) === 51
//   max([]) === NaN
//   max([12.555,12]) === 12.555
//   max([-1151, 1]) === 1

// Note Use the reverseString you made in the last problem in your solution


function max(numbers = [x, y, z]) {
    if (numbers.length == 0) {
        return NaN;
    }

    maxi = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxi) {
            maxi = numbers[i];
        }
    }
    return maxi;
}


// function max(numbers = [x, y, z]) {
//     if (numbers.length > 0) {
//         maxi = 0;
//         for (i = 0; i < numbers.length; i++) {
//             if (numbers[i] > maxi) {
//                 maxi = numbers[i];
//             }
//         }
//         return maxi;
//     }
//     if (numbers.length == 0) {
//         numbers.NaN;
//     }
// }
//
//
if (max([15]) === 15
    && isNaN(max([]))
    && max([312, 33, 53412]) === 53412
    && max([0, -200, -10]) === 0
    && max([14501, 32, 111]) === 14501
) {
    console.log('Your code passed all the tests');
} else {
    console.error("Your code didn't pass all the tests");
}