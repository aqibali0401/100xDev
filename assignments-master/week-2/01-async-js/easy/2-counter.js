let count = 0;
const counter = () => {
    count++;
    console.log("🚀 ~ file: 1-counter.js:4 ~ counter ~ count:", count);
}

for (let i = 0; i < 10; i++) {
    setTimeout(counter, 100000);    
} 


