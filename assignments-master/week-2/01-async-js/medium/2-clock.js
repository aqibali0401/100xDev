// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// let count = 0;
// const counter = () => {
//     count++;
//     console.log("🚀 ~ file: 1-counter.js:4 ~ counter ~ count:", count);
// }

// setInterval(counter, 1000);



const getTime = () => {
    // Get the current timestamp in milliseconds
    const timestamp = Date.now();
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);
    // Get hours, minutes, and seconds
    let hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    let timeMeridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    // Format the result as HH:MM:SS
    const formattedTime = `${hours}:${minutes}:${seconds} ${timeMeridian}`;

    return formattedTime;
}

const counter = () => {

    console.log(getTime());
};

setInterval(counter, 1000);

