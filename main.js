const game = new Game();

function preload() {
    console.log("preload");
    game.preload();
}

function setup() {
    console.log("setup");
    createCanvas(width, height);
    game.setup();
    game.timer();
}

function draw() {
    // console.log("draw");
   game.draw(); 
}


function keyPressed() {
    if (keyCode === 32) {
        game.tourist.jump();
    }
    if (keyCode === 13) {
    }
}

function keyPressedTimes() {
    let forwardPressed = [];
    if(keyPressed() && keyCode === 39) {
    console.log(forwardPressed);
    }

}


