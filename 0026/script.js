
function myMax(myArr) {
    return Math.max.apply(null, myArr);
}

let result = myMax([1, 2 , 3, 7, 89, 0]);
console.log(result);