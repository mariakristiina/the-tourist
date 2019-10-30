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
        loop();
        document.querySelector(".start-screen").style.visibility = "hidden";
        game.timer();
        
    }
}