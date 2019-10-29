class Tourist {
    constructor() {
        this.x = 0;
        this.velocity = 0;
        this.gravity = 0.5;
        this.jumps = 0;

    }
    preload() {
        this.touristChar = loadImage("images/TotoroCat.png");
    }

    setup() {
        this.width = this.touristChar.width * .3;
        this.height = this.touristChar.height * .3;

        this.y = height - this.height;

        this.orginalY = this.y;
    }

draw() {

    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.y > this.orginalY) {
        this.y = this.orginalY;
        this.jumps = 0;
    }

    image(this.touristChar, this.x, this.y, this.width, this.height);
}

jump() {
    if(this.jumps < 3) {
        this.velocity = -11;
        this.jumps++;
    }
}

move() {
    if(keyIsDown(39) && this.x < (width - this.width)) {
this.x += 5; }
if(keyIsDown(37) && this.x > (0)) {
    this.x -=5;
}
}



}