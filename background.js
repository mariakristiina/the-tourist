class Background {
    constructor() {
    this.xBerlinImg = 0; 

    }
preload() {
    console.log("bg reload");
    this.bgberlin = loadImage("images/Berlin .jpg");
}

draw() {
clear();

this.xBerlinImg -= 1;

image(this.bgberlin, this.xBerlinImg, 135, width);
image(this.bgberlin, this.xBerlinImg + width, 135, width);

if(this.xBerlinImg <= -width) {
    this.xBerlinImg = 0;
};

}

}