/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const promiseFun = (n) => {
    const myPromist = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('Opration is successful');
            } else {
                reject('Opration is rejected');
            }

        }, n * 1000);
    });

    myPromist.then((res) => {
        console.log("🚀 ~ file: 1-promisify-setTimeout.js:19 ~ myPromist.then ~ res:", res);
    }).catch((err) => {
        console.log("🚀 ~ file: 1-promisify-setTimeout.js:21 ~ myPromist.then ~ err:", err);
    });
}

function wait(n) {
    promiseFun(n);
}

wait(3);