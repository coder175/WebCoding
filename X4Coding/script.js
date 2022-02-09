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

var doc = document.getElementById('code_result').contentWindow.document;
var html_value;
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: false,
    matchBrackets: true,
    autoCloseBrackets: true,
    autoCloseTags: true,
    mode: "htmlmixed",
});
function run() {
    html_value = editor.getValue();
    doc.open();
    doc.write(html_value);
    doc.close();
}