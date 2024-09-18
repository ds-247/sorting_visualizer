const MIN = -10000;
const MAX = 10000;

function generateRandomArray(size) {
    let temp_arr = [];

    for (let i = 0; i < size; i++){
        let random_number = Math.floor(Math.random() * (MAX-MIN)) + MIN
        temp_arr.push(random_number);
    }

    return temp_arr
}


export default {
    generateRandomArray
}