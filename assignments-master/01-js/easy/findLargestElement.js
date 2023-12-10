/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // let maxNo = numbers[0];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (numbers[i] > maxNo) {
    //         maxNo = numbers[i];
    //     }
    // }
    // return maxNo;

    if (numbers.length === 0) {
        return undefined;
      }
      return Math.max(...numbers);
}


module.exports = findLargestElement;