document.addEventListener("DOMContentLoaded", run)

function run() {
    let a = ""; //первое число
    let b = ""; // второе число
    let sign = ""; // знак операции
    let finish = false;

    const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const action = ["-", "+", "/", "*", "^", "√"];

    // экран
    const out = document.querySelector(".calc-screen p");

    // функция очистки - кнопка С
    function clearAll () {
        let a = ""; 
        let b = ""; 
        let sign = ""; 
        let finish = false;
        out.textContent = 0;
    }

    // добавляем событие на кнопку очистки С
    document.querySelector(".c").addEventListener("click", clearAll);

    // добавляю событие на кнопки
    const key = document.querySelector(".calc__item");
    key.addEventListener("click", btn);
    
    function btn() {
        // если нажата цифровая кнопка
       if(digit.includes(key.value)) {
            if (b === "" && sign === "") {
                a += key.value;
                console.log( a, b, sign);
                out.textContent = a;
            } else if (a !== "" && b !== "" && finish) {

            } else {
                b += key.value;
                out.textContent = b;
            }
            // если нажата кнопка операции
            if(action.includes(key.value)) {
                sign = key.value;
                out.textContent = sign;
                console.log( a, b, sign);
                return
            }

            //нажата кнопка =
            if (key.value === "=") {
                
            }
        }
    }   
}