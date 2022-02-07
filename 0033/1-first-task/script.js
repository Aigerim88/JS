// #1
let timerId = setInterval(timer, 1000);

function timer() {
    let elem = document.getElementById("first-task");
    let num = elem.innerText.split(":");
    let seconds = Number(num[1]);
    seconds--;
    elem.innerText = `00:${seconds}`;


    if (seconds === 0) {
        clearInterval(timerId);
    }


    if (seconds < 10) {
        return elem.innerText = `00:0${seconds}`;
    } else {
        return elem.innerText = `00:${seconds}`;
    }
}

