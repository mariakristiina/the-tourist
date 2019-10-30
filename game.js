class Game {
    constructor() {
        this.tourist = new Tourist();
        this.background = new Background();
        this.message = new CollectMessage();
        this.mateArr = [];
        this.TVArr = [];
        this.branArr = [];
        this.kebabArr = [];
        this.message2 = new CollectMessage2();
    }
    preload() {
        this.background.preload();
        this.tourist.preload();
    }

    setup() {
        this.background.setup();
        this.tourist.setup();
        this.message.setup();
        this.message2.setup();
 
    }

    draw() {
        clear();
        this.background.draw();
        this.tourist.draw();
        this.tourist.move();

        if (frameCount > 100 && frameCount % 150 === 0) {
            this.mateArr.push(new Collect);
        }

        this.mateArr.forEach((mate, index) => {
            mate.draw();

            if (mate.x + mate.width <= 0) {
                this.mateArr.splice(index, 1);
            }
            if (this.pointCollection(mate, this.tourist)) {
                this.mateArr.splice(index, 1);
                sumMate += 1;
                document.querySelector(".mate span").innerHTML = sumMate;
                }
                if(sumMate > 5) {
                this.message.draw();
                }
        });

        if (frameCount > 100 && frameCount % 150 === 0) {
            this.kebabArr.push(new Collect4);
        }

        this.kebabArr.forEach((food, index) => {
            food.draw();

            if (food.x + food.width <= 0) {
                this.kebabArr.splice(index, 1);
            }
            if (this.pointCollection(food, this.tourist)) {
                this.kebabArr.splice(index, 1);
                sumKebab += 1;
                document.querySelector(".food span").innerHTML = sumKebab;
                }
                if(sumKebab > 5) {
                this.message2.draw();
                }
        });


        if (frameCount > 100 && frameCount % 300 === 0 && !arrTVCollected.includes("collected")) {
            this.TVArr.push(new Collect2);
        }

        this.TVArr.forEach((tower, index) => {
            tower.draw();

            if (tower.x + tower.width <= 0) {
                this.TVArr.splice(index, 1);
            }
            if (this.pointCollection(tower, this.tourist)) {
                this.TVArr.splice(index, 1);
                sumSights += 1;
                document.querySelector(".sights span").innerHTML = sumSights;
                arrTVCollected.push("collected");
                }
        });

        if (frameCount > 100 && frameCount % 300 === 0 && !arrBranCollected.includes("collected")) {
            this.branArr.push(new Collect3);
        }

        this.branArr.forEach((tor, index) => {
            tor.draw();

            if (tor.x + tor.width <= 0) {
                this.branArr.splice(index, 1);
            }
            if (this.pointCollection(tor, this.tourist)) {
                this.branArr.splice(index, 1);
                sumSights += 1;
                document.querySelector(".sights span").innerHTML = sumSights;
                arrBranCollected.push("collected");
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
                start = false;
                document.querySelector(".end-screen").style.visibility= "visible";
            }
        }, 1000);

    }

}