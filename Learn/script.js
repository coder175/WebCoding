phrases = ['To code from scrach', 'To do math', 'To be smart', 'test1', 'test2', 'test3']
round = 0
function type() {
    phrs = phrases[round].split('');
    console.log(phrs.length)
    for (let x = 0; x < phrs.length; x++) {
        setTimeout(() => {
            document.getElementById('subtitle').innerHTML += phrs.shift();
        }, x * 200);
    }
    setTimeout(() => { del() }, 1500);
}
function del() {
    phrsLen = phrases[round].split('');
    for (let x = 0; x < phrsLen; x++) {
        setTimeout(() => {
            document.getElementById('subtitle').innerText.slice(0, -1);
        }, x * 50);
    }
    if (phrases.length > (round + 1)) round++
    else round = 0
    setTimeout(() => { type() }, 500);
}
type()



// const words = ["CS  S3.", "HTML5.", "javascript."];
// let i = 0;
// let timer;

// function typingEffect() {
// 	let word = words[i].split("");
// 	var loopTyping = function() {
// 		if (word.length > 0) {
// 			document.getElementById('word').innerHTML += word.shift();
// 		} else {
// 			deletingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopTyping, 100);
// 	};
// 	loopTyping();
// };

// function deletingEffect() {
// 	let word = words[i].split("");	
// 	var loopDeleting = function() {
// 		if (word.length > 0) {
// 			word.pop();
// 			document.getElementById('word').innerHTML = word.join("");
// 		} else {
// 			if (words.length > (i + 1)) {
// 				i++;
// 			} else {
// 				i = 0;
// 			};
// 			typingEffect();
// 			return false;
// 		};
// 		timer = setTimeout(loopDeleting, 50);
// 	};
// 	loopDeleting();
// };

// typingEffect();