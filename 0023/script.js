let myArray = [23, 72, 35, 62, 75, 25];
let a = Number(prompt("Введите любое число:"));

while (a) {
    if (myArray.includes(a)) {
        alert("Есть");
    } else {
        alert("Нет");
    }  
    a = Number(prompt("Введите любое число:")); 
}