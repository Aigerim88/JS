document.addEventListener("DOMContentLoaded", () => {
    const elem = document.querySelector("input")
    const time = document.querySelector("div")

        const goButton = document.getElementById("go")
    goButton.addEventListener("click", () => {
        time.innerHTML = elem.value;
    })
 
    const startButton = document.getElementById("start")
    let intervalID;
    startButton.addEventListener("click", () => {
        intervalID = 0
        if (intervalID < 1) {
            intervalID = setInterval(myTimer, 1000)
        }    
    })
 
    const pauseButton = document.getElementById("pause")
    pauseButton.addEventListener("click", () => 
    {
        clearInterval(intervalID)
        intervalID = 0
    })

    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", () => {
        time.innerHTML = elem.value
        clearInterval(intervalID)
    })
})


 
function myTimer () {  
    const time = document.querySelector("div")
    let current = time.innerText.split(":") // ['25', '00']
    let seconds = Number(current[1])
    let minutes = Number(current[0])
 
    if (minutes === 0 && seconds === 0) {
        return 0
    }
 
    if (seconds === 0) {
        seconds = 59
        minutes--
    } else {
        seconds--
    }
 
    seconds = convertTime(seconds)
    minutes = convertTime(minutes)        
    
    time.innerHTML = `${minutes}:${seconds}`
}
 
function convertTime(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return String(num)
    }
}