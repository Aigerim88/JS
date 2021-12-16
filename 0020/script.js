let first_number = Number(prompt("Первое число:"));
let operator = prompt("Оператор:");
let second_number = Number(prompt("Второе число:"));

if (operator === "-") {
    let res = (first_number - second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "+") {
    let res = (first_number + second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "*") {
    let res = (first_number * second_number)
    alert(`Ваш ответ ${res}`);
} else if (operator === "/") {
    let res = (first_number / second_number)
    alert(`Ваш ответ ${res}`);
} else if (operator === "%") {
    let res = (first_number % second_number);
    alert(`Ваш ответ ${res}`);
} else if (operator === "**") {
    let res = (first_number ** second_number);
    alert(`Ваш ответ ${res}`);
} else {
    alert("ERROR!");
}
