class Game {
    constructor(img) {
        this.tourist = new Tourist();
        this.background = new Background();
        this.mateArr = [];
        this.sightArr = [];
    }
    preload() {
        this.background.preload();
        this.tourist.preload();
        this.mateImg = loadImage("images/club_mate.png");
        this.TVTowerImg = loadImage("images/TV tower.svg");
        this.BranImg = loadImage("images/Branderburger Tor.svg");
        this.imgMessage = loadImage("images/speech-bubble.png");
    }

    setup() {
        this.background.setup();
        this.tourist.setup();

    }

    draw() {
        this.background.draw();
        this.tourist.draw();
        this.tourist.move();

        if (frameCount > 100 && frameCount % 50 === 0) {
            const newCollect = new Collect(this.mateImg)
            newCollect.setup()
            this.mateArr.push(newCollect);
        }

        this.mateArr.forEach((mate, index) => {
            mate.draw();

            if (mate.x + mate.width <= 0) {
                this.mateArr.splice(index, 1);
            }
            if (this.pointCollection(mate, this.tourist)) {
                this.mateArr.splice(index, 1);
                arr.push(sum += 1);
                document.querySelector(".mate span").innerHTML = arr[arr.length - 1];
                if (arr[arr.length - 1] > 10) {
                    const message = new Collect(this.imgMessage)
                    message.setup();
                    message.draw();
                }
            }
        });
        if (frameCount > 50 && frameCount % 150 === 0) {
            const TVTower = new Collect(this.TVTowerImg)
            TVTower.setup()
            this.sightArr.push(TVTower);
        }
        if (frameCount > 50 && frameCount % 50 === 0) {
            const newCollect = new Collect(this.BranImg)
            newCollect.setup()
            this.sightArr.push(newCollect);
        }

        this.sightArr.forEach((sight, index) => {
            sight.draw();

            if (sight.x + sight.width <= 0) {
                this.sightArr.splice(index, 1);
            }
            if (this.pointCollection(sight, this.tourist)) {
                this.sightArr.splice(index, 1);
                arr.push(sum += 1);
                document.querySelector(".sights span").innerHTML = arr[arr.length - 1];
            }
        });


    }

    pointCollection(collect, tourist) {
        if (
            tourist.x + tourist.width * .5 < collect.x ||
            collect.x + tourist.width * .5 < tourist.x
        ) {
            return false;
        }
        if (
            tourist.y > collect.y + collect.height * .8 ||
            collect.y > tourist.y + tourist.height * .8
        ) {
            return false;
        }
        return true;
    }

    timer() {
        let timeLeft = 0;
        let timer = setInterval(function () {
            document.querySelector(".timer span").innerHTML = time - timeLeft;
            timeLeft += 1;
            if (timeLeft > time) {
                clearInterval(timer);
                console.log("the end");
                noLoop();
            }
        }, 1000);

    }

}