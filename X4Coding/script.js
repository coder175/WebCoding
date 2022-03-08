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

var editor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});

var editor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "css",
});
var editor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "javascript",
});
function run() {
    var end = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
${document.getElementById('cssCode').innerText}
</style>
</head>
<body>
${document.getElementById('htmlCode').innerText}
<script>
${document.getElementById('jsCode').innerText}
</script>
</body>
</html>`
document.getElementById('resultIframe').srcdoc = "";
document.getElementById('resultIframe').srcdoc = end;

}

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