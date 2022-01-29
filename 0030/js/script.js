document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.getElementById("calc__screen");
    const one = document.getElementById("calc__1");
    const two = document.getElementById("calc__2");
    const three = document.getElementById("calc__3");
    const four = document.getElementById("calc__4");
    const five = document.getElementById("calc__5");
    const six = document.getElementById("calc__6");
    const seven = document.getElementById("calc__7");
    const eight = document.getElementById("calc__8");
    const nine = document.getElementById("calc__9");
    const zero = document.getElementById("calc__0");
    const plus = document.getElementById("calc__plus");
    const minus = document.getElementById("calc__minus");
    const division = document.getElementById("calc__div");
    const mult = document.getElementById("calc__mult");
    const root = document.getElementById("calc__root");
    const expon = document.getElementById("calc__exp");
    const equal = document.getElementById("calc__equal");
    const c = document.getElementById("calc__c");

    let myBtn = [one, two, three, four, five, six, seven, eight, nine, zero, plus, minus, division, mult, root, expon];
    let myValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "/", "*", "√", "^"];
    for (let i = 0; i < myBtn.length && i < myValue.length; i++) {
        myBtn[i].addEventListener("click", () => {
                inputElem.value += myValue[i];
            })
    }

    equal.addEventListener("click", calculate)
    function calculate () {
        let si = 0;
        for( let i = 0; i < inputElem.value.length; i++) {
            if ("+-/*√^".includes(inputElem.value[i])) {
                si = i;
            }
        }
        const firstNum = Number(inputElem.value.slice(0, si));
        const secondNum = Number(inputElem.value.slice(si + 1, inputElem.value.length));
        let result = 0;
        if (inputElem.value[si] == "+") result = firstNum + secondNum;
        else if (inputElem.value[si] == "-") result = firstNum - secondNum;
        else if (inputElem.value[si] == "*") result = firstNum * secondNum;
        else if (inputElem.value[si] == "/") result = firstNum / secondNum;
        else if (inputElem.value[si] == "^") result = Math.pow(firstNum, secondNum);
        else if (inputElem.value[si] == "√") {
            let res = Number(inputElem.value.slice(1, inputElem.value.length));
            result = Math.sqrt(res);
        }
        inputElem.value = result;
    }

    c.addEventListener("click", clearAll);   

    function clearAll() {
        inputElem.value = "";
    }
})