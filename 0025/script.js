let a1;
let a2;
let a3;
let a4;
let a5;
let a6;
let a7;


// вариант буквы М №3

for ( let i = 0; i < 7; i++) {
    a1 = "*";
    for (let j = 0; j < i; j++) {
        a1 += " ";
    }
    a2 = "";
    for (let k = 5; k > i; k--) {
        a2 = "*";
    }
    a3 = "";
    for ( let p = 4; p > i; p--) {
        a3 += " ";
    }
    a4 = "";
    for (let n = 3; n > i; n--) {
        a4 += " ";
    }
    a5 = "";
    for (let n = 4; n > i; n--) {
        a5 = "*";
    }
    a6 = "";
    for (let o = 0; o < i; o++) {
        a6 += " ";
    }
    a7 = "*";
    for (let u = 0; u < i; u++) {
        a7 = "*";
    }
    console.log(a1 + a2 + a3 + a4 + a5 + a6 + a7); 
}


// вариант буквы М №1

// for ( let i = 0; i < 7; i++) {
//     a1 = "*";
//     for (let j = 0; j < i; j++) {
//         a1 += " ";
//     }
//     a2 = "";
//     for (let k = 7; k > i + 1; k--) {
//         a2 += " ";
//     }   
//     a3 = "";
//     for (let p = 0; p < i; p++) {
//         a3 += " ";
//     }
//     console.log(a1 + "*" + a2 + "*" + a3 + "*");    
// }



// вариант буквы М №2

// for ( let i = 0; i < 7; i++) {
//     a1 = "*";
//     for (let j = 0; j < i; j++) {
//         a1 += " ";
//     }
//     a2 = "";
//     for (let k = 4; k > i; k--) {
//         a2 += "**";
//     } 
//     a3 = "";
//     for (let p = 0; p < i; p++) {
//         a3 += " ";
//     }
//     a4 = "*";
//     for (let h = 0; h < i; h++) {
//         a4 = "*";
//     }
//     console.log(a1 + a2 + a3 + a4);    
// }



