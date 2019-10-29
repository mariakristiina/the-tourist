class Collect {
    constructor(img) {
        this.x = width;
        this.y = random(0, height - 50);
        this.img = img
        this.img2 = img
        this.img3 = img
        this.imgMessage = img;
    }

    setup() {
        this.width = this.img.width * .2;
        this.height = this.img.height * .2;
    }

    draw() {

        image(this.img, this.x, this.y, this.width, this.height);
        this.x -= 1;
        image(this.img2, this.x, this.y, this.width, this.height);
        this.x -= 1;
        image(this.img3, this.x, this.y, this.width, this.height);
        this.x -= 1;
        image(this.imgMessage, 0, 0, 50, 50);
        this.x -= 1;
    }
}