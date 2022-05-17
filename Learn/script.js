var Menucheck = 1;
document.querySelector('.Menu').addEventListener('click', () => {
    if (Menucheck == 1) {
        Menucheck++;
        document.querySelectorAll('.navItem').forEach(display => display.classList.add('displayBlock'));
    } else {
        Menucheck--;
        document.querySelectorAll('.navItem').forEach(display => display.classList.remove('displayBlock'));
    }
});

var checkChildLocation = '';
function drop(childLocation) {
    if (childLocation == checkChildLocation) {
        document.querySelectorAll('.drop').forEach(a => { a.style.display = 'none' });
        document.querySelectorAll('.arrow').forEach(e => { e.style.transform = 'rotate(0deg)' });
        checkChildLocation = '';
    } else {
        document.querySelectorAll('.drop').forEach(d => { d.style.display = 'none' });
        document.querySelector(`.drop:nth-child(${childLocation})`).style.display = 'flex';
        document.querySelectorAll('.arrow').forEach(e => { e.style.transform = 'rotate(0deg)' });
        document.querySelector(`#arrow${childLocation}`).style.transform = 'rotate(180deg)';
        checkChildLocation = childLocation;
    }
}

function IDtoogleDisplay(id) {
    id = id.substring(1);
    if (document.getElementById(id).style.display == "block") {
        document.getElementById(id).style.display = "none";
    } else {
        document.getElementById(id).style.display = "block";
    }
}

const words = [" Make Web Pages", " Multiply Numbers", " Learn Python", ];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 1000);
            return false;
        };
        timer = setTimeout(loopTyping, 130);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            setTimeout(typingEffect, 500);
            return false;
        };
        timer = setTimeout(loopDeleting, 70);
    };
    loopDeleting();
};

typingEffect();
