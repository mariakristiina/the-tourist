class Game {
    constructor() {
        this.tourist = new Tourist();
        this.background = new Background();
        this.message = new CollectMessage();
        this.mateArr = [];
        this.TVArr = [];
        this.branArr = [];
        this.kebabArr = [];
        this.hospitalArr = [];
        this.wallArr = [];
        this.prezArr = [];
        this.charlieArr = [];
        this.reichArr = [];
        this.message2 = new CollectMessage2();
        this.message3 = new CollectMessage3();
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
        this.message3.setup();

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
        });

        if (sumMate > 5) {
            this.message.draw();
        }

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
                document.querySelector(".food span").innerHTML = sumKebab + sumFood;
            }
        });

        if (sumKebab > 5) {
            this.message2.draw();
        }

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

        if (frameCount > 100 && frameCount % 600 === 0 && !hospitalCollected.includes("collected")) {
            this.hospitalArr.push(new Collect5);
        }
        this.hospitalArr.forEach((hospital, index) => {
            hospital.draw();
            
            if (hospital.x + hospital.width <= 0) {
                this.hospitalArr.splice(index, 1);
            }
            if (this.pointCollection(hospital, this.tourist)) {
                this.hospitalArr.splice(index, 1);
                hospitalCollected.push("collected");
            }
        });

        if (hospitalCollected.includes("collected")) {
            this.message3.draw();
                }

        if (frameCount > 100 && frameCount % 600 === 0 && !wallCollected.includes("collected")) {
            this.wallArr.push(new Collect6);
        }

        this.wallArr.forEach((wall, index) => {
            wall.draw();

            if (wall.x + wall.width <= 0) {
                this.wallArr.splice(index, 1);
            }
            if (this.pointCollection(wall, this.tourist)) {
                this.wallArr.splice(index, 1);
                sumSights += 1;
                document.querySelector(".sights span").innerHTML = sumSights;
                wallCollected.push("collected");
            }
        });

        if (frameCount > 100 && frameCount % 150 === 0) {
            this.prezArr.push(new Collect7);
        }

        this.prezArr.forEach((food, index) => {
            food.draw();

            if (food.x + food.width <= 0) {
                this.prezArr.splice(index, 1);
            }
            if (this.pointCollection(food, this.tourist)) {
                this.prezArr.splice(index, 1);
                sumFood += 1;
                document.querySelector(".food span").innerHTML = sumKebab + sumFood;
            }
        });

        if (frameCount > 100 && frameCount % 600 === 0 && !charlieCollected.includes("collected")) {
            this.charlieArr.push(new Collect8);
        }

        this.charlieArr.forEach((wall, index) => {
            wall.draw();

            if (wall.x + wall.width <= 0) {
                this.charlieArr.splice(index, 1);
            }
            if (this.pointCollection(wall, this.tourist)) {
                this.charlieArr.splice(index, 1);
                sumSights += 1;
                document.querySelector(".sights span").innerHTML = sumSights;
                charlieCollected.push("collected");
            }
        });

        if (frameCount > 100 && frameCount % 600 === 0 && !reichCollected.includes("collected")) {
            this.reichArr.push(new Collect9);
        }

        this.reichArr.forEach((sight, index) => {
            sight.draw();

            if (sight.x + sight.width <= 0) {
                this.reichArr.splice(index, 1);
            }
            if (this.pointCollection(sight, this.tourist)) {
                this.reichArr.splice(index, 1);
                sumSights += 1;
                document.querySelector(".sights span").innerHTML = sumSights;
                reichCollected.push("collected");
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
                document.querySelector(".end-screen").style.visibility = "visible";
                if (sumSights < 3) {
                    document.querySelector(".end-sights").innerHTML = "You only visited " + sumSights + " sights."
                } else {
                    document.querySelector(".end-sights").innerHTML = "You visited "
                }

            }
        }, 1000);

    }

}