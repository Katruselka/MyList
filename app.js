function tuskfunc() {
    var inputstr = document.getElementById("userinput").value;
    document.getElementById('result').innerHTML = inputstr;
                }
document.getElementById('enter').addEventListener('submit', tuskfunc);