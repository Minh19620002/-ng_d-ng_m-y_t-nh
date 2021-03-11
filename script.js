var num1
var num2

function getvalue() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
}

function plus() {
    getvalue();
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function minus() {
    getvalue();
    result = num1 - num2;
    document.getElementById("result").innerHTML = result;

}

function mutiply() {
    getvalue();
    result = num1 * num2;
    document.getElementById("result").innerHTML = result;

}

function divide() {
    getvalue();
    result = num1 / num2;
    document.getElementById("result").innerHTML = result;

}