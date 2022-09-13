let arr = []
arr[arr.length] = 2
arr[arr.length] = 5
arr[arr.length] = 4
arr[arr.length] = 7
console.log(arr)
let popedNum = arr[arr.length - 1]
console.log(popedNum)
arr.length = arr.length - 1
console.log(arr)