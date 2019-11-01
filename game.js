class Game {
    constructor() {
        this.tourist = new Tourist();
        this.background = new Background();
        this.message = new CollectMessage();
        this.message2 = new CollectMessage2();
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
        this.ringArr = [];

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

        if (sumMate > 8) {
            this.message.draw();
        }

        if (frameCount > 300 && frameCount % 100 === 0) {
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

        if (sumKebab > 6) {
            this.message2.draw();
        }

        if (frameCount > 300 && frameCount % 450 === 0 && !sightsCollected.includes("the TV Tower")) {
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

        if (frameCount > 700 && frameCount % 450 === 0 && !sightsCollected.includes("Brandenburger Tor")) {
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

        if (frameCount > 350 && frameCount % 400 === 0) {
            this.hospitalArr.push(new Collect5);
        }
        this.hospitalArr.forEach((hospital, index) => {
            hospital.draw();

            if (hospital.x + hospital.width <= 0) {
                this.hospitalArr.splice(index, 1);
            }
            if (this.pointCollection(hospital, this.tourist)) {
                this.hospitalArr.splice(index, 1);
                countDown = "off";
                noLoop();
                document.querySelector(".end-hospital").style.visibility = "visible";
                document.querySelector(".end-message").style.visibility = "visible";
                document.querySelector(".end-message").innerHTML = "Your weekend is over!"
                document.querySelector(".end-message").style.left = "73vh";
                document.querySelector("h1").style.visibility = "visible";
                document.querySelector(".scores").style.visibility = "hidden";
                document.querySelector(".timer").style.visibility = "hidden";
            }
        });

        if (frameCount > 700 && frameCount % 600 === 0 && !sightsCollected.includes("the Berlin Wall")) {
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

        if (frameCount > 50 && frameCount % 120 === 0) {
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

        if (frameCount > 500 && frameCount % 500 === 0 && !sightsCollected.includes("Checkpoint Charlie")) {
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

        if (frameCount > 800 && frameCount % 800 === 0 && !sightsCollected.includes("the Reichstag")) {
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

        if (frameCount > 1000 && frameCount % 600 === 0) {
            this.clubArr.push(new Collect10);
        }

        this.clubArr.forEach((club, index) => {
            club.draw();

            if (club.x + club.width <= 0) {
                this.clubArr.splice(index, 1);
            }
            if (this.pointCollection(club, this.tourist)) {
                this.clubArr.splice(index, 1);
                sumClub = true;
            }
        });
        if(sumClub) {
        this.message4.draw();
        }

        if (frameCount > 200 && frameCount % 150 === 0) {
            this.ringArr.push(new Collect11);
        }

        this.ringArr.forEach((ring, index) => {
            ring.draw();

            if (ring.x + ring.width <= 0) {
                this.ringArr.splice(index, 1);
            }
            if (this.pointCollection(ring, this.tourist)) {
                this.ringArr.splice(index, 1);
                countDown = "off";
                noLoop();
                document.querySelector(".end-message").style.visibility = "visible";
                document.querySelector(".end-message").innerHTML = "Your weekend is over!"
                document.querySelector(".end-message").style.left = "73vh";
                document.querySelector("h1").style.visibility = "visible";
                document.querySelector(".scores").style.visibility = "hidden";
                document.querySelector(".timer").style.visibility = "hidden";
                document.querySelector(".end-ring").style.visibility = "visible";
                document.querySelector(".end-ring").innerHTML = `You were run over by the S-Bahn!`;
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
        if(countDown === "on") {
        let timeLeft = 0;
        let timer = setInterval(function () {
            if(countDown === "on") {
            document.querySelector(".timer span").innerHTML = time - timeLeft;
            timeLeft += 1; } 
            else { document.querySelector(".timer span").innerHTML = time - timeLeft;
        }
            if (timeLeft > time) {
                clearInterval(timer);
                console.log("the end");
                noLoop();
                start = false;
                document.querySelector(".end-screen").style.visibility = "visible";
                document.querySelector(".end-message").style.visibility = "visible";
                document.querySelector(".end-mate").style.visibility = "visible";
                document.querySelector(".end-food").style.visibility = "visible";
                document.querySelector(".end-sights").style.visibility = "visible";
                document.querySelector("h1").style.visibility = "visible";
                document.querySelector(".scores").style.visibility = "hidden";
                document.querySelector(".timer").style.visibility = "hidden";

                if(sightsCollected.length === 0) {
                document.querySelector(".end-sights").innerHTML = `What were you doing? You didn't visit any sights!`; }
                else if(sightsCollected.length === 5) {document.querySelector(".end-sights").innerHTML = `You are a good tourist! You visited all the sights!`} 
                else if(sightsCollected.length === 1) {document.querySelector(".end-sights").innerHTML = `What were you doing? You visited only one sight!`} 
                else {document.querySelector(".end-sights").innerHTML = `Well done! You visited ${sumSights}/5 sights.`
                    document.querySelector(".end-sights").style.padding = "3vh 8vh"
                    document.querySelector(".end-sights").style.left = "63vh"
            } 
               
                if((sumFood + sumKebab) === 0) {
                document.querySelector(".end-food").innerHTML = `You didn't eat anything the whole weekend`; }
                else if(sumFood === 1 && sumKebab === 1)  { document.querySelector(".end-food").innerHTML = `You ate a Kebab and a Pretzel!`; 
                document.querySelector(".end-food").style.padding ="3vh 9vh";    }
                else if(sumFood === 1)  { document.querySelector(".end-food").innerHTML = `You ate ${sumKebab} Kebabs and a Pretzel!`;
                document.querySelector(".end-food").style.padding ="3vh 8.5vh";  }
                else if(sumKebab === 1)  { document.querySelector(".end-food").innerHTML = `You ate a Kebab and ${sumFood} Pretzels!`;
                document.querySelector(".end-food").style.padding ="3vh 8.5vh";  }
                else if ((sumFood + sumKebab) < 6) { document.querySelector(".end-food").innerHTML = `You ate ${sumKebab} Kebabs and ${sumFood} Pretzels!`;
                document.querySelector(".end-food").style.padding ="3vh 8vh";  }
                else {
                document.querySelector(".end-food").innerHTML = `You defintely put on some weight! You ate ${sumKebab} Kebabs and ${sumFood} Pretzels!`; 
                document.querySelector(".end-food").style.padding ="3vh 3vh";
                document.querySelector(".end-food").style.left ="50vh";}
                
                if(sumMate === 0) {
                    document.querySelector(".end-mate").innerHTML = `You didn't drink any Mates!`;
                }
                else if (sumMate === 1) {
                    document.querySelector(".end-mate").innerHTML = `You drank 1 Mate!`; 
                    document.querySelector(".end-mate").style.padding ="3vh 16.3vh";  
                }
                else if (sumMate < 6) {
                    document.querySelector(".end-mate").innerHTML = `You drank ${sumMate} Mates!`;
                    document.querySelector(".end-mate").style.padding ="3vh 15.6vh";
                } else {
                    document.querySelector(".end-mate").innerHTML = `You drank ${sumMate} Mates! You wont sleep for a while!`;
                    document.querySelector(".end-mate").style.padding = "3vh 3vh";
                    document.querySelector(".end-mate").style.left = "59.5vh";
                }
                
                if(hospitalCollected.includes("collected")) {
                document.querySelector(".end-hospital").style.visibility = "visible";}  
            }
        }, 1000); }

 else { document.querySelector(".timer span").innerHTML = time - timeLeft; } }
}
