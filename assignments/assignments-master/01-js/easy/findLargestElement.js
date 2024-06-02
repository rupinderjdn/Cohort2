/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers === undefined || numbers.length === 0 )return undefined;
    let maxValue = Number.NEGATIVE_INFINITY;
    for(let number of numbers){
        maxValue = Math.max(maxValue,number);
    }
    return maxValue;
}

module.exports = findLargestElement;