public class Car
{
    // properties
    public string Model { get; init; } = "";
    public string Make { get; init; } = "";
    private int CurrentSpeed { get; set; }
    private bool EngineRunning { get; set; }

    // methods
    public void StartEngine()
    {
        EngineRunning = true;
        Console.WriteLine("Engine started.");
    }

    public void StopEngine()
    {
        EngineRunning = false;
        Console.WriteLine("Engine stopped.");
    }

    public void Accelerate(int speed)
    {
        if (EngineRunning)
        {
            CurrentSpeed += speed;
            Console.WriteLine($"Accelerated to {CurrentSpeed} km/h.");
        }
        else
        {
            Console.WriteLine("Cannot accelerate, the engine is not running.");
        }
    }

    public void Decelerate(int speed)
    {
        if (CurrentSpeed >= speed)
        {
            CurrentSpeed -= speed;
            Console.WriteLine($"Slowed down to {CurrentSpeed} km/h.");
        }
        else
        {
            Console.WriteLine("Cannot decelerate, speed is too low.");
        }
    }
}
