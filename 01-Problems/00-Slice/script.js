// Given a string str, and a number it returns a string starting from the given index

// slice('Mohamed', 2) --> 'hamed'
// slice('Bayan', 10) --> ''
// slice('max' , -2) --> 'ax'

// looping , string concatenation

function slice(str, start) {

}


if (slice('Mohamed', 0) == 'Mohamed'
    && slice('Bayan', 2) == 'an'
    && slice('Max', -1) == 'x'
    && slice('Beboooo', 12) == ''
) {
    console.log('Your code passed the tests');
}else {
    console.error('Your code did not pass the tests');
}