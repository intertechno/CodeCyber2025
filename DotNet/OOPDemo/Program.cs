Console.WriteLine("Welcome to the OOP Demo!");

/*
// creating an instance of the Car class (old-school way)
Car myCar = new Car();
myCar.Make = "Toyota";
myCar.Model = "Camry";
myCar.CurrentSpeed = 0;
myCar.EngineRunning = false;
*/

// var myCar2 = new Car();
Car myCar = new()
{
    Make = "Toyota",
    Model = "Camry"
};
