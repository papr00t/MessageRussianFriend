function isMobile() {
    return "ontouchstart" in window;
}

function generate() {
    let number = "+79"
    for (let i = 0; i < 9; i++) {
        number += Math.floor(Math.random() * 10);
    }
    return number;
}
