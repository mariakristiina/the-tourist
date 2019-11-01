let randomMin = 100;
let randomMax = height - 150;
class Collect {
    constructor() {
        this.x = width;
        this.y = random(randomMin, randomMax);
        this.mateImg = loadImage("images/club_mate.png")
    }

    draw() {

        this.width = this.mateImg.width * .22;
        this.height = this.mateImg.height * .22;

        image(this.mateImg, this.x, this.y, this.width, this.height);
        this.x -= 7;
    }
}

class CollectMessage {
    constructor() {
        this.x = width - 300;
        this.y = height - 350;
    }

    setup() {
        this.message = loadImage("images/Mate Note.png");
        }

    draw() {
        this.width = this.message.width * .53;
        this.height = this.message.height * .53;

        image(this.message, this.x, this.y, this.width, this.height);
        this.x -= 3.5;
    }
}

class Collect2 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.towerImg = loadImage("images/TVtower.svg")
    }

draw() {
    this.width = this.towerImg.width * .17;
    this.height = this.towerImg.height * .17;

    image(this.towerImg, this.x, this.y, this.width, this.height);
    this.x -= 8;
}
}

class Collect3 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.branImg = loadImage("images/Branderburger Tor.svg")
    }

draw() {
    this.width = this.branImg.width * .52;
    this.height = this.branImg.height * .52;

    image(this.branImg, this.x, this.y, this.width, this.height);
    this.x -= 9;
}
}

class Collect4 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.kebabImg = loadImage("images/kebab.svg")
    }

draw() {
    this.width = this.kebabImg.width * .12;
    this.height = this.kebabImg.height * .12;

    image(this.kebabImg, this.x, this.y, this.width, this.height);
    this.x -= 8.5;
}
}

class CollectMessage2 {
    constructor() {
        this.x = width - 300;
        this.y = height - 500;
    }

    setup() {
        this.message2 = loadImage("images/KEBAB NOTE.png");
        }

    draw() {
        this.width = this.message2.width * .52;
        this.height = this.message2.height * .52;

        image(this.message2, this.x, this.y, this.width, this.height);
        this.x -= 3.5;
    }
}

class Collect5 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.hospitalImg = loadImage("images/hospital.svg")
    }

draw() {
    this.width = this.hospitalImg.width * .52;
    this.height = this.hospitalImg.height * .52;

    image(this.hospitalImg, this.x, this.y, this.width, this.height);
    this.x -= 10;
}
}

class Collect6 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.wallImg = loadImage("images/Berlin-wall2.svg")
    }

draw() {
    this.width = this.wallImg.width * .15;
    this.height = this.wallImg.height * .15;

    image(this.wallImg, this.x, this.y, this.width, this.height);
    this.x -= 7.5;
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
    this.x -= 9.5;
}
}

class Collect8 {
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.charlieImg = loadImage("images/american sector.jpg")
    }

draw() {
    this.width = this.charlieImg.width * .22;
    this.height = this.charlieImg.height * .22;

    image(this.charlieImg, this.x, this.y, this.width, this.height);
    this.x -= 6.5;
}
}

class Collect9{
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.reichImg = loadImage("images/reicstag.svg")
    }

draw() {
    this.width = this.reichImg.width * .52;
    this.height = this.reichImg.height * .52;

    image(this.reichImg, this.x, this.y, this.width, this.height);
    this.x -= 10.5;
}
}

class Collect10{
    constructor() {
    this.x = width;
    this.y = random(randomMin, randomMax);
    this.clubImg = loadImage("images/club.svg")
    }

draw() {
    this.width = this.clubImg.width * .12;
    this.height = this.clubImg.height * .12;

    image(this.clubImg, this.x, this.y, this.width, this.height);
    this.x -= 11;
}
}

class CollectMessage4 {
    constructor() {
        this.x = width - 300;
        this.y = height - 350;
    }

    setup() {
        this.message4 = loadImage("images/CLUB NOTE.png");
        this.orginalX = this.x;
      
        }

    draw() {
        this.width = this.message4.width * .52;
        this.height = this.message4.height * .52;

        image(this.message4, this.x, this.y, this.width, this.height);
        this.x -=4;

        if(this.x <= 0) {
            sumClub= false;
            this.x = this.orginalX;
        }   
    }
}

    class Collect11{
        constructor() {
        this.x = width;
        this.y = random(randomMin, randomMax);
        this.ringImg = loadImage("images/ring.png")
        }
    
    draw() {
        this.width = this.ringImg.width * .25;
        this.height = this.ringImg.height * .25;
    
        image(this.ringImg, this.x, this.y, this.width, this.height);
        this.x -= 12;
    }
    }