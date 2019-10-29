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
    game.draw();
}

function keyPressed() {
    if (keyCode === 32) {
        game.tourist.jump();
    }
}