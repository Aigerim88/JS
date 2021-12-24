let myArray1 = [];
let myArray2 = [];

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        myArray1.push(i);
    } else if (i % 4 === 0){
        myArray2.push(i);
    }
}

console.log(myArray1);
console.log(myArray2);