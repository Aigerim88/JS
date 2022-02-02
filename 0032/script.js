let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

// Вариант №1
// let newArr = arr.flat(Infinity);

// console.log(newArr);


// Вариант №2
function newArr(arr, arr2) {
    for ( let i = 0; i < arr.length; i++ ) {
        if (  Array.isArray(arr[i])) {
            newArr(arr[i], arr2);
        } else  {
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

let arr2 =[];
console.log(newArr(arr, arr2));



