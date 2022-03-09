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
        document.getElementById('arrow1').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('drop1').style.display = "none";
        courseCheck--;
        document.getElementById('arrow1').style.transform = "rotate(0deg)";

    }
}