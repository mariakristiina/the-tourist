class Collect {
    constructor(img) {
        this.x = width;
        this.y = random(0, height-50);
        this.img = img
    }

    setup() {
        this.width = this.img.width * .2;
        this.height = this.img.height * .2;
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= 4;
    }
}  