var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        this.engineRunning = true;
    };
    Car.prototype.stopEngine = function () {
        this.engineRunning = false;
    };
    Car.prototype.accelerate = function () {
        this.currentSpeed += 10;
    };
    Car.prototype.decelerate = function () {
        this.currentSpeed -= 10;
    };
    return Car;
}());
var myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
// myCar.year = 2020; // <-- error: Property 'year' does not exist on type 'Car'.
console.log("My car is a ".concat(myCar.make, " ").concat(myCar.model, " with a top speed of ").concat(myCar.topSpeed, " km/h."));
var neighbor = new Car();
neighbor.make = "Nissan";
neighbor.model = "Altima";
neighbor.topSpeed = 200;
console.log("My neighbor's car is a ".concat(neighbor.make, " ").concat(neighbor.model, " with a top speed of ").concat(neighbor.topSpeed, " km/h."));
