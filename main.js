const game = new Game();


function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    createCanvas(width, height);
    game.setup();
}

function draw() {
    // console.log("draw");
    if (start == true) {
        game.draw();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        game.tourist.jump();
    }
    if (keyCode === 13) {
        start = true
        document.querySelector(".start-screen").style.visibility = "hidden";
        document.querySelector("h1").style.visibility = "hidden";
        document.querySelector(".scores").style.visibility = "visible";
        document.querySelector(".timer").style.visibility = "visible";
        countDown = "on";
        game.timer();
    }
    if(keyCode === 91) {
        window.location.reload();
    }
}

window.addEventListener("keydown", function (e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);