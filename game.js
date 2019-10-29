class Game {
    constructor() {
        this.tourist = new Tourist();
        this.background = new Background();
        this.collectCoffee = [];
    }
    preload() {
        this.background.preload();
        this.tourist.preload();
        this.coffeeImg = loadImage("images/Coffee.png");
    }

    setup() {
        this.tourist.setup();

    }

    draw() {
        this.background.draw();
        this.tourist.draw();
        this.tourist.move();

        if (frameCount > 100 && frameCount % 50 === 0) {
            const newCollect = new Collect(this.coffeeImg)
            newCollect.setup()
            this.collectCoffee.push(newCollect);
        }

        this.collectCoffee.forEach((coffee, index) => {
            coffee.draw();

            if(coffee.x + coffee.width <= 0) {
                this.collectCoffee.splice(index, 1); 
            }
            if(this.pointCollection(coffee, this.tourist)) { 
                this.collectCoffee.splice(index, 1); 
                arr.push(sum += 1);
                if( arr[arr.length-1] > 9) {
                document.querySelector(".coffee span").innerHTML = "Slow Down, you wont sleep!!!"; 
                } else {
                document.querySelector(".coffee span").innerHTML = arr[arr.length-1]; 
                }
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

}