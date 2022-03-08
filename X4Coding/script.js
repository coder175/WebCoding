var check = 1;
document.querySelector('.Menu').addEventListener('click', () => {
    if (check == 1) {
        check++;
        document.querySelectorAll('.navItem').forEach(display => display.classList.add('displayBlock'));
    } else {
        check--;
        document.querySelectorAll('.navItem').forEach(display => display.classList.remove('displayBlock'));
    }
});

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});

var editor = CodeMirror.fromTextArea(document.getElementById("code1"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
var editor = CodeMirror.fromTextArea(document.getElementById("code2"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
function run() {
    var startingFirst = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>`
var startingFirstMiddle = `
</style>
</head>
<body>`
var startingMiddle = `
<script>`
var startingLast = `
</script>
</body>
</html>`

var bodyText = document.getElementById('code').innerText;
var headText = document.getElementById('code1').innerText;
var scriptText = document.getElementById('code2').innerText;
var end = startingFirst + headText + startingFirstMiddle + bodyText + startingMiddle + scriptText + startingLast;
console.log(end);
}
run();

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.transform = "translate(-99999px, 0px)";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.transform = "translate(0px, 0px)";
    evt.currentTarget.className += " active";
  }

  function html() {
}

function css() {
}

function js() {
}

function result() {

}