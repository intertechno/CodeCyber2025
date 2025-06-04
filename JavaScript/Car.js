class Car {
    make;
    model;
    topSpeed;
}

const myCar = new Car();
myCar.maake = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
myCar.year = 2020; // Adding a new property dynamically

console.log(`My car is a ${myCar.make} ${myCar.model} with a top speed of ${myCar.topSpeed} km/h.`);
console.log(`Year: ${myCar.year}`);

/*
// defining an object without classes
const anotherCar = {
    make: "Honda",
    model: "Civic",
    topSpeed: 200
};
*/