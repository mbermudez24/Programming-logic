class Car {
    constructor(model,speed,antiquity) {
        this.model = model;
        this.speed = speed;
        this.antiquity = antiquity;
    };
    increaseSpeed() {
        this.speed += 10;
    };
    decreaseSpeed() {
        this.speed -= 10;
    };

    present() {
        return 'I have a ' + this.model;
    };
};

class Bus extends Car {
    constructor(model,speed,antiquity,seats) {
        super(model,speed,antiquity);
        this.seats = seats;
    };
    increaseSpeed() {
        this.speed += 5;
    };
    decreaseSpeed() {
        this.speed -= 5;
    };
}

var bus = new Bus('Volvo', 100, 2023,30);
console.log(bus);
bus.increaseSpeed();
console.log(bus);

var car1 = new Car('Mercedes Class A', 200, 2023);
var car2 = new Car('Mercedes Class B', 300, 2022);
var car3 = new Car('Mercedes Class C', 400, 2021);
var car4 = new Car('Mercedes Class D', 500, 2020);

document.write("<h1>Speed: "+car1.speed+"</h1>");
console.log(car1);
car1.increaseSpeed();
car1.increaseSpeed();
car1.increaseSpeed();

console.log(car1);
document.write("<h1>Speed: "+car1.speed+"</h1>");