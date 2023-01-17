const phrases = ['How the first printing press became', 'Other stuff']
let round = 0
function type() {
    document.getElementById('caret').style.opacity = '1'
    let phrs = phrases[round].split('');
    for (let x = 0; x < phrs.length; x++) {
        setTimeout(() => {
            document.querySelector('#subtitle').innerHTML += phrs.shift();
        }, x * 100);
    }
    setTimeout(() => {
        blink(8)
        setTimeout(() => { del() }, 4500);
    }, phrs.length * 100);
}
function del() {
    document.getElementById('caret').style.opacity = '1'
    let phrsLen = phrases[round].split('');
    for (let x = 0; x < phrsLen.length; x++) {
        setTimeout(() => {
            document.querySelector('#subtitle').innerHTML = phrsLen.slice(0, -(x + 1)).join('');
        }, x * 70);
    }
    if (phrases.length > (round + 1)) round++
    else round = 0
    setTimeout(() => {
        blink(4)
        setTimeout(() => { type() }, 2500);
    }, phrsLen.length * 70);
}
let rtime = 0
function blink(stime) {
    let c = document.getElementById('caret');
    let interval = setInterval(function () {
        if (rtime >= stime) {
            rtime = 0
            clearInterval(interval);
        }
        rtime++;
        c.style.opacity = (c.style.opacity === '0' ? '1' : '0');
    }, 500);
}
setTimeout(() => {
    setTimeout(() => { type() }, 500);
    document.getElementById('restOfBody').style.visibility = 'visible';
    document.getElementById('restOfBody').style.opacity = '1';
}, 1500);

window.addEventListener('scroll', () => {
    let navElement = document.querySelector('nav');
    this.scrollY > 10 ? navElement.style.borderBottom = '2px solid var(--main-color)' : navElement.style.borderBottom = 'none';
}, false);