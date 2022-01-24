document.addEventListener("DOMContentLoaded", sum);

function sum () {
    const btn = document.getElementById("myBtn");
    btn.addEventListener("click", mySum);
}

function mySum() {
    let result = document.getElementById("result");
    let num1 = document.getElementById("input1");
    let a = Number(input1.value);
    let num2 = document.getElementById("input2");
    let b = Number(input2.value);

    result.textContent = a + b;
}