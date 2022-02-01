document.addEventListener("DOMContentLoaded", run);

function run() {
    const tog = document.getElementById("toggle");
    tog.addEventListener("click", lampChange);
}

function lampChange() {
    const innerTog = document.getElementById("inner-toggle");
    const tog = document.getElementById("toggle");
    const lamp = document.getElementById("img");
    if (lamp.style.backgroundImage === 'url("./img/bulb-on.png")') {
        lamp.style.backgroundImage = 'url("./img/bulb_off.png")';
        lamp.style.transition = '0.5s';
        tog.style.backgroundColor = 'green';        
        innerTog.style.marginLeft = '0px';
        innerTog.style.transition = '0.5s';
    } else {
        lamp.style.backgroundImage = 'url("./img/bulb-on.png")';
        lamp.style.transition = '0.5s';
        tog.style.backgroundColor = 'red';
        innerTog.style.marginLeft = '100px';
        innerTog.style.transition = '0.5s';
    }
}
