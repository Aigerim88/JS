let userN1 = Number(prompt("Введите цифру №1:"));
let userN2 = Number(prompt("Введите цифру №2:"));
let userN3 = Number(prompt("Введите цифру №3:"));
let userN4 = Number(prompt("Введите цифру №4:"));
let userN5 = Number(prompt("Введите цифру №5:"));
let userN6 = Number(prompt("Введите цифру №6:"));
let userN7 = Number(prompt("Введите цифру №7:"));

let userArray2 = [];
let userArray3 = [];

// проверка на кратность 2
if (userN1 % 2 === 0) {
    userArray2.push(userN1)
};
if (userN2 % 2 === 0) {
    userArray2.push(userN2)
};
if (userN3 % 2 === 0) {
    userArray2.push(userN3)
};
if (userN4 % 2 === 0) {
    userArray2.push(userN4)
};
if (userN5 % 2 === 0) {
    userArray2.push(userN5)
};
if (userN6 % 2 === 0) {
    userArray2.push(userN6)
};
if (userN7 % 2 === 0) {
    userArray2.push(userN7)
};

// проверка на кратность 3
if (userN1 % 3 === 0) {
    userArray3.push(userN1)
};
if (userN2 % 3 === 0) {
    userArray3.push(userN2)
};
if (userN3 % 3 === 0) {
    userArray3.push(userN3)
};
if (userN4 % 3 === 0) {
    userArray3.push(userN4)
};
if (userN5 % 3 === 0) {
    userArray3.push(userN5)
};
if (userN6 % 3 === 0) {
    userArray3.push(userN6)
};
if (userN7 % 3 === 0) {
    userArray3.push(userN7)
};

// выводим два массива 
console.log(userArray2); //массив кратный 2
console.log(userArray3); //массив кратный 3
