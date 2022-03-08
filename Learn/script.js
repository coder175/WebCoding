var check = 1;
document.querySelector('.Menu').addEventListener('click', () => {
    if (check == 1) {
        check++;
        document.querySelectorAll('.navItem').forEach(display => display.classList.add('displayBlock'));
        document.querySelectorAll('.navItem').forEach(display => display.classList.remove('displayNone'));
    } else {
        check--;
        document.querySelectorAll('.navItem').forEach(display => display.classList.remove('displayBlock'));
        document.querySelectorAll('.navItem').forEach(display => display.classList.add('displayNone'));
    }
});