const phrases = ['To be smarter (duh.)']
let round = 0
function type() {
    let phrs = phrases[round].split('');
    for (let x = 0; x < phrs.length; x++) {
        setTimeout(() => {
            document.getElementById('subtitle').innerHTML += phrs.shift();
        }, x * 200);
    }
    setTimeout(() => {
        del()
    }, (phrs.length*200)+1500);
}
function del() {
    let phrsLen = phrases[round].split('');
    for (let x = 0; x < phrsLen; x++) {
        alert('dodo')
        setTimeout(() => {
            document.getElementById('subtitle').innerText.slice(0, -1);
        }, x * 1000);
    }
    if (phrases.length > (round + 1)) round++
    else round = 0
    setTimeout(() => { type() }, 500);
}
function blink() {
}
type()