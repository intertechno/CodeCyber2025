class Car {
    make: string;
    model: string;
    topSpeed: number;

    // private properties
    #engineRunning: boolean;
    #currentSpeed: number;

    startEngine() {
        this.#engineRunning = true;
    }

    stopEngine() {
        this.#engineRunning = false;
    }

    accelerate() {
        if (this.#engineRunning) {
            this.#currentSpeed += 10;
        }
        else {
            throw new Error("Engine is not running. Please start the engine first.");
        }
    }

    decelerate() {
        if (this.#engineRunning) {
            this.#currentSpeed -= 10;

            if (this.#currentSpeed < 0) {
                this.#currentSpeed = 0;
            }
        }
    }

    logStatus() {
        console.log(`Car make: ${this.make}, model: ${this.model}, top speed: ${this.topSpeed} km/h, current speed: ${this.#currentSpeed} km/h.`);
    }
}

const myCar = new Car();
myCar.make = "Toyota";
myCar.model = "Corolla";
myCar.topSpeed = 180;
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
// myCar.#currentSpeed = -1234; // <-- This is allowed, but not recommended.
myCar.accelerate();
// myCar.year = 2020; // <-- error: Property 'year' does not exist on type 'Car'.
myCar.logStatus();

const neighbor = new Car();
neighbor.make = "Nissan";
neighbor.model = "Altima";
neighbor.topSpeed = 200;
neighbor.logStatus();
