let randomMin = 100;
let randomMax = height - 150;
class Collect {
    constructor() {
        this.x = width;
        this.y = random(randomMin, randomMax);
        this.mateImg = loadImage("images/club_mate.png")
    }

    draw() {

        this.width = this.mateImg.width * .2;
        this.height = this.mateImg.height * .2;

        image(this.mateImg, this.x, this.y, this.width, this.height);
        this.x -= 6;
    }
}

class CollectMessage {
    constructor() {
        this.x = width - 300;
        this.y = height - 400;
    }

    setup() {
        this.message = loadImage("images/speech-bubble.png");
        }

    draw() {
        this.width = this.message.width * .5;
        this.height = this.message.height * .5;

        image(this.message, this.x, this.y, this.width, this.height);
        this.x -= 3;
    }
}

class Collect2 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.towerImg = loadImage("images/TVtower.svg")
    }

draw() {
    this.width = this.towerImg.width * .15;
    this.height = this.towerImg.height * .15;

    image(this.towerImg, this.x, this.y, this.width, this.height);
    this.x -= 7;
}
}

class Collect3 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.branImg = loadImage("images/Branderburger Tor.svg")
    }

draw() {
    this.width = this.branImg.width * .5;
    this.height = this.branImg.height * .5;

    image(this.branImg, this.x, this.y, this.width, this.height);
    this.x -= 8;
}
}

class Collect4 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.kebabImg = loadImage("images/kebab.svg")
    }

draw() {
    this.width = this.kebabImg.width * .1;
    this.height = this.kebabImg.height * .1;

    image(this.kebabImg, this.x, this.y, this.width, this.height);
    this.x -= 7.5;
}
}

class CollectMessage2 {
    constructor() {
        this.x = width - 300;
        this.y = height - 700;
    }

    setup() {
        this.message2 = loadImage("images/KEBAB NOTE.png");
        }

    draw() {
        this.width = this.message2.width * .5;
        this.height = this.message2.height * .5;

        image(this.message2, this.x, this.y, this.width, this.height);
        this.x -= 3;
    }
}

class Collect5 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.hospitalImg = loadImage("images/hospital.svg")
    }

draw() {
    this.width = this.hospitalImg.width * .5;
    this.height = this.hospitalImg.height * .5;

    image(this.hospitalImg, this.x, this.y, this.width, this.height);
    this.x -= 9;
}
}

class CollectMessage3 {
    constructor() {
        this.x = width - 300;
        this.y = height - 550;
    }

    setup() {
        this.message3 = loadImage("images/HOSPITAL NOTE.png");
        }

    draw() {
        this.width = this.message3.width * .5;
        this.height = this.message3.height * .5;

        image(this.message3, this.x, this.y, this.width, this.height);
        this.x -= 3;
    }
}

class Collect6 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.wallImg = loadImage("images/Berlin-wall2.svg")
    }

draw() {
    this.width = this.wallImg.width * .1;
    this.height = this.wallImg.height * .1;

    image(this.wallImg, this.x, this.y, this.width, this.height);
    this.x -= 6.5;
}
}

class Collect7 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.prezImg = loadImage("images/pretzel.png")
    }

draw() {
    this.width = this.prezImg.width * .05;
    this.height = this.prezImg.height * .05;

    image(this.prezImg, this.x, this.y, this.width, this.height);
    this.x -= 8.5;
}
}

class Collect8 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.charlieImg = loadImage("images/american sector.jpg")
    }

draw() {
    this.width = this.charlieImg.width * .2;
    this.height = this.charlieImg.height * .2;

    image(this.charlieImg, this.x, this.y, this.width, this.height);
    this.x -= 5.5;
}
}

class Collect9{
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.reichImg = loadImage("images/reicstag.svg")
    }

draw() {
    this.width = this.reichImg.width * .5;
    this.height = this.reichImg.height * .5;

    image(this.reichImg, this.x, this.y, this.width, this.height);
    this.x -= 9.5;
}
}

class Collect10{
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.clubImg = loadImage("images/club.svg")
    }

draw() {
    this.width = this.clubImg.width * .08;
    this.height = this.clubImg.height * .08;

    image(this.clubImg, this.x, this.y, this.width, this.height);
    this.x -= 10;
}
}

class CollectMessage4 {
    constructor() {
        this.x = width - 300;
        this.y = height - 250;
    }

    setup() {
        this.message4 = loadImage("images/Club note.png");
        }

    draw() {
        this.width = this.message4.width * .5;
        this.height = this.message4.height * .5

        image(this.message4, this.x, this.y, this.width, this.height);
        this.x -=3;
    }
}