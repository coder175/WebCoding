// let number1 = 123.4;
// let number2 = 987.6;
// console.log(number1 + number2);




let myCanvas = document.getElementById("Drawing");
myCanvas.style.border = "10px dashed blue";
let context = myCanvas.getContext("2d");
context.fillStyle = "blue";
context.fillRect(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 200) + 100), Math.floor((Math.random() * 50) + 50));

setInterval(() => {
    let currentdate = new Date();
    let nowHours = currentdate.getHours();
    let nowMinutes = currentdate.getMinutes();
    let nowSeconds = currentdate.getSeconds();
    if (parseInt(nowHours) > 12) {
        parseInt(nowHours) - "12";
    }
    document.getElementById('time').innerText = nowHours + ':' + nowMinutes + ':' + nowSeconds; 
}, 1);
