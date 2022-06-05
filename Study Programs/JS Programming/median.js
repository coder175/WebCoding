// let numbers = [5,6,8,4,7];
// function median(numbers){
//     numbers.sort()
//     if(numbers.length % 2 === 1){
//         let position = numbers.length / 2;
//         position = Math.ceil(position)
//         return numbers[position - 1]
//     } else {
//         let pos = math.floor(numbers.length / 2)
//         let number1 = numbers[pos]
//         let number2 = numbers[pos+1]
//         return(number1 + number2) / 2
//     }
// }
// console.log(median(numbers));

function median(numbers) {
    let len = numbers.length;
    let isOdd = len % 2 === 1;
    numbers.sort((a, b) => a - b);
    if (isOdd) {
        return numbers[Math.floor(len / 2)];
    }
    else {
        return(numbers[Math.floor(len / 2)] + numbers[Math.ceil(len / 2)]) / 2
    }
}
let testNumbers = [70, 20, 68, 100, 38]
console.log(median(testNumbers))