let count = 0;
const counter = () => {
    count++;
    console.log("🚀 ~ file: 1-counter.js:4 ~ counter ~ count:", count);
}

setInterval(counter, 1000);