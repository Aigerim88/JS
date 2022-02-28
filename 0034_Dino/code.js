var gameStop = false 
var points = 0 
// var score = 1 

// document.addEventListener("DOMContentLoaded", add_bush)

// function add_bush (){
//     var bush2 = document.createElement("img");
//     bush2.setAttribute("src", "./image/bush_PNG7212.png");
//     bush2.setAttribute("top", "60%");
//     bush2.setAttribute("left", "30%");
//     bush2.setAttribute("alt", "The Bush");
//     bush2.innerText = bush2;
//     document.body.appendChild(bush2);
// }

document.addEventListener("DOMContentLoaded", main)

function main () {
    document.addEventListener("keydown", go)    
}


function go (event) {
    let dino = document.querySelector(".gamer")
    let x = parseInt(dino.style.left)
    let y = parseInt(window.getComputedStyle(dino).top)    

    x = !x ? 50 : x 

    if (event.code === "ArrowRight") {
        dino.style.transform = "scaleX(1)"
        x += 20
    } else if (event.code === "ArrowLeft") {
        dino.style.transform = "scaleX(-1)"
        x -= 20               
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {
            dino.style.top = `${y}px`
            setTimeout(() => checkStop(), 310)
        }, 3000)
    }

    dino.style.left = `${x}px`

    setTimeout(() => checkStop(), 310)
    
}

function checkStop() {
    let dino = document.querySelector(".gamer")
    let x = parseInt(window.getComputedStyle(dino).left)
    let y = parseInt(window.getComputedStyle(dino).top)

    let handX = 54 + x
    let handY = 69 + y 

    if (dino.style.transform === "scaleX(-1)") {
        handX = 6 + x
        handY = 69 + y
    }
    

    let bush = document.querySelector(".bush")
    let bw = parseInt(window.getComputedStyle(bush).width)
    let bh = parseInt(window.getComputedStyle(bush).height)
    
    let x1 = parseInt(window.getComputedStyle(bush).left)
    let y1 = parseInt(window.getComputedStyle(bush).top)
    let x2 = x1 + bw
    let y2 = y1
    let x3 = x1
    let y3 = y1 + bh
    let x4 = x1 + bw
    let y4 = y1 + bh

    // console.log(x, y)
    
    if (handX > x1 && handX < x2 && handY < y3 && handY > y1) {
        setTimeout(() => {
            alert("GAME OVER!")
            gameStop = true
        }, 310)
    }

    if (gameStop === false && dino.style.transform === "scaleX(1)" && handX > x2 && handY < y2 && y === parseInt(window.getComputedStyle(dino).top)) {
        points++;
    } 

    if (gameStop === false && dino.style.transform === "scaleX(-1)" && handX < x1 && handY < y1 && y === parseInt(window.getComputedStyle(dino).top)) {
        points++;
    } 

    if (gameStop === true) {
        points = 0;
    } 
    console.log(points)
     
    let field = document.querySelector(".field")
    if (handX > parseInt(window.getComputedStyle(field).width)) {
        let dino = document.querySelector(".gamer")
        let x = parseInt(dino.style.left)
        let y = parseInt(window.getComputedStyle(dino).top) 

        let bush = document.querySelector(".bush")
        let bw = parseInt(window.getComputedStyle(bush).left) + 100 + `px`;
        let bh = parseInt(window.getComputedStyle(bush).top)
    }
}