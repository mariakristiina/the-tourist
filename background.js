let images = 1;
let speed = 2;

class Background {
    constructor() {
        this.xBerlinImg = 0;

    }
    preload() {
        console.log("bg reload");
        this.bgberlin = loadImage("images/wall 1.jpeg");
    }

    setup() {
        image(this.bgberlin, this.xBerlinImg, height - this.bgberlin.height, width);
    }

    draw() {
        clear();

        this.xBerlinImg -= speed;

        image(this.bgberlin, this.xBerlinImg, height - this.bgberlin.height, width);
        image(this.bgberlin, this.xBerlinImg + width, height - this.bgberlin.height, width);


        if (this.xBerlinImg <= -width) {
            this.xBerlinImg = 0;
        };
    }

}