'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"

let checkNums = (arr: number[]) => {
    let containsAll: boolean = true;
    for (let i = 4; i <= 16; i+= 4){
        containsAll = containsAll && arr.includes(i);
    }
    return containsAll;
}

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));

export = checkNums;