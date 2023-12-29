/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

// function sleep(milliseconds) {
//     return new Promise(resolve => setTimeout(resolve, milliseconds));
// }


const sleep = (milliseconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
    })
};

// Example usage:
console.log('Start');

sleep(3000)
    .then(() => {
        console.log('End');
    });
