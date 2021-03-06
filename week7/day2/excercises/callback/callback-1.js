'use strict';

const mapWith = (array, callback) => {
    let output = [];

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    array.forEach(element => output.push(callback(element)));
    return output;
}

const addOne = (number) => {
    return number + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const removeSecondLetter = (string) => {
    let characterArr = string.split('');
    for (let i = characterArr.length - 1; i >= 0; i--) {
        if (i % 2 === 1) characterArr.splice(i, 1);
    }
    return characterArr.join('');
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']

const removeSecondLetter2 = (string) => {
    for (let i = string.length - 1; i >= 0; i--) {
        if (i % 2 === 1) string = string.slice(0, i) + string.slice(i + 1);
    }
    return string;
}

console.log(mapWith(words, removeSecondLetter2));
