class Background {
    constructor() {
    this.xBerlinImg = 0; 

    }
preload() {
    console.log("bg reload");
    this.bgberlin = loadImage("images/Berlin .jpg");
}

setup() {
image(this.bgberlin, this.xBerlinImg, height - this.bgberlin.height, width);

}

draw() {
clear();

this.xBerlinImg -= 1;

image(this.bgberlin, this.xBerlinImg, height - this.bgberlin.height, width);
image(this.bgberlin, this.xBerlinImg + width, height - this.bgberlin.height, width);

if(this.xBerlinImg <= -width) {
    this.xBerlinImg = 0;
};

}

}