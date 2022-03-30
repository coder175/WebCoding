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
        document.querySelectorAll('.drop').forEach(a => { a.style.display = 'none'});
        document.querySelectorAll('.arrow').forEach(e => { e.style.transform = 'rotate(0deg)'});
        checkChildLocation = '';
    } else {
        document.querySelectorAll('.drop').forEach(d => { d.style.display = 'none'});
        document.querySelector(`.drop:nth-child(${childLocation})`).style.display = 'flex';
        document.querySelectorAll('.arrow').forEach(e => { e.style.transform = 'rotate(0deg)'});
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