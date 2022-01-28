document.addEventListener("DOMContentLoaded", () => {
    let firstNumber = '';
    let secondNumber = '';
    let sign = '';
    const out = document.querySelector('calc__screen');

    // событие на кнопки
    const btn = document.querySelectorAll('calc__item');
    for (let i=0; i < btn.length; i++) {
        let button = btn[i];
        button.addEventListener("click", () => {
            firstNumber += button.value;
            out = firstNumber; 
        })
    }

})