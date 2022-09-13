// Selection sort - find the minimum item in every iteration and replace with the element
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log(arr);