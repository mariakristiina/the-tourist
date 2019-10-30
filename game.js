class Game {
    constructor() {
        this.tourist = new Tourist();
        this.background = new Background();
        this.message = new CollectMessage();
        this.message2 = new CollectMessage2();
        this.message3 = new CollectMessage3();
        this.message4 = new CollectMessage4();
        this.mateArr = [];
        this.TVArr = [];
        this.branArr = [];
        this.kebabArr = [];
        this.hospitalArr = [];
        this.wallArr = [];
        this.prezArr = [];
        this.charlieArr = [];
        this.reichArr = [];
        this.clubArr = [];

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
        this.message4.setup();

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

        if (sumKebab >= 5) {
            this.message2.draw();
        }

        if (frameCount > 100 && frameCount % 300 === 0 && !sightsCollected.includes("the TV Tower")) {
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
                sightsCollected.push("the TV Tower");
            }
        });

        if (frameCount > 100 && frameCount % 300 === 0 && !sightsCollected.includes("Brandenburger Tor")) {
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
                sightsCollected.push("Brandenburger Tor");
            }
        });

        if (frameCount > 100 && frameCount % 600 === 0 && !sightsCollected.includes("collected")) {
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

        if (frameCount > 100 && frameCount % 600 === 0 && !sightsCollected.includes("the Berlin Wall")) {
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
                sightsCollected.push("the Berlin Wall");
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

        if (frameCount > 100 && frameCount % 600 === 0 && !sightsCollected.includes("Checkpoint Charlie")) {
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
                sightsCollected.push("Checkpoint Charlie");
            }
        });

        if (frameCount > 100 && frameCount % 600 === 0 && !sightsCollected.includes("the Reichstag")) {
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
                sightsCollected.push("the Reichstag");
            }
        });

        if (frameCount > 100 && frameCount % 250 === 0) {
            this.clubArr.push(new Collect10);
        }

        this.clubArr.forEach((club, index) => {
            club.draw();

            if (club.x + club.width <= 0) {
                this.clubArr.splice(index, 1);
            }
            if (this.pointCollection(club, this.tourist)) {
                this.clubArr.splice(index, 1);
                sumClub += 1;
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
                if(sightsCollected.length === 0) {
                document.querySelector(".end-sights").innerHTML = `You didn't visit any sights!`; }
                else {document.querySelector(".end-sights").innerHTML = `You visited ${sightsCollected}`} 
                if(sumKebab > 6) {
                document.querySelector(".end-food").innerHTML = `You defintely put on weight! You ate ${sumKebab} Kebabs!`; }
                if(sumMate > 9) {
                document.querySelector(".end-mate").innerHTML = `You wont sleep for couple of nights! You drank ${sumMate} Mates!`; }  
                if(hospitalCollected.includes("collected")) {
                document.querySelector(".end-hospital").innerHTML = `Your weekend was a bit dramatic, you were taken to the hospital!`;}  
            }
        }, 1000);

    }

}