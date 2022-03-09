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
var courseCheck = 0;
function courses() {
    if (courseCheck == 0) {
        document.getElementById('drop1').style.display = "flex";
        courseCheck++;
    } else {
        document.getElementById('drop1').style.display = "none";
        courseCheck--;
    }
}