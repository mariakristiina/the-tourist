class Collect {
    constructor() {
        this.x = width;
        this.y = random(0, height - 50);
        this.mateImg = loadImage("images/club_mate.png")
    }

    draw() {

        this.width = this.mateImg.width * .2;
        this.height = this.mateImg.height * .2;

        image(this.mateImg, this.x, this.y, this.width, this.height);
        this.x -= 1;
    }
}

class CollectMessage {
    constructor() {
        this.x = 100;
        this.y = 0;

    }

    setup() {
        this.message = loadImage("images/speech-bubble.png");
        }

    draw() {
        image(this.message, this.x, this.y, 100, 100);
    }
}

class Collect2 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.towerImg = loadImage("images/TVtower.svg")
    }

draw() {
    this.width = this.towerImg.width * .15;
    this.height = this.towerImg.height * .15;

    image(this.towerImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect3 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.branImg = loadImage("images/Branderburger Tor.svg")
    }

draw() {
    this.width = this.branImg.width * .5;
    this.height = this.branImg.height * .5;

    image(this.branImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect4 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.kebabImg = loadImage("images/kebab.svg")
    }

draw() {
    this.width = this.kebabImg.width * .1;
    this.height = this.kebabImg.height * .1;

    image(this.kebabImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class CollectMessage2 {
    constructor() {
        this.x = 200;
        this.y = 0;
    }

    setup() {
        this.message2 = loadImage("images/KEBAB NOTE.png");
        }

    draw() {
        image(this.message2, this.x, this.y, 100, 100);
    }
}

class Collect5 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.hospitalImg = loadImage("images/hospital.svg")
    }

draw() {
    this.width = this.hospitalImg.width * .5;
    this.height = this.hospitalImg.height * .5;

    image(this.hospitalImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

