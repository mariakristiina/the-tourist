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

class CollectMessage3 {
    constructor() {
        this.x = 300;
        this.y = 100;
    }

    setup() {
        this.message3 = loadImage("images/HOSPITAL NOTE.png");
        }

    draw() {
        image(this.message3, this.x, this.y, 100, 100);
    }
}

class Collect6 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.wallImg = loadImage("images/berlin-wall.png")
    }

draw() {
    this.width = this.wallImg.width * .2;
    this.height = this.wallImg.height * .2;

    image(this.wallImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect7 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.prezImg = loadImage("images/pretzel.png")
    }

draw() {
    this.width = this.prezImg.width * .05;
    this.height = this.prezImg.height * .05;

    image(this.prezImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect8 {
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.charlieImg = loadImage("images/american sector.jpg")
    }

draw() {
    this.width = this.charlieImg.width * .2;
    this.height = this.charlieImg.height * .2;

    image(this.charlieImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect9{
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.reichImg = loadImage("images/reicstag.svg")
    }

draw() {
    this.width = this.reichImg.width * .5;
    this.height = this.reichImg.height * .5;

    image(this.reichImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class Collect10{
    constructor() {
    this.x = width;
    this.y = random(0, height - 50);
    this.clubImg = loadImage("images/club.svg")
    }

draw() {
    this.width = this.clubImg.width * .08;
    this.height = this.clubImg.height * .08;

    image(this.clubImg, this.x, this.y, this.width, this.height);
    this.x -= 1;
}
}

class CollectMessage4 {
    constructor() {
        this.x = 400;
        this.y = 200;
    }

    setup() {
        this.message3 = loadImage("images/Club note.png");
        }

    draw() {
        image(this.message3, this.x, this.y, 100, 100);
        this.x -=1;
    }
}