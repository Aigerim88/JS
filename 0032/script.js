let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

// Вариант №1
let newArr = arr.flat(Infinity);

console.log(newArr);


// Вариант №2
// function newArr(arr) {
//     for ( let elem of arr ) {
//         if ( typeof elem == "object") {
//             newArr(elem);
//         } else  {
//             return arr.push(elem);
//         }
//     }
// }

// console.log(newArr(arr));
