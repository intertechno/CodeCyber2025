using System.Text.Json;

const string InputFile = @"C:\Academy\Code Cyber\Code\DotNet\Numbers.txt";
string[] lines = [.. File.ReadLines(InputFile)];

// part 1: calculating sum and average
int sum = 0;
foreach (string line in lines)
{
    int value = int.Parse(line);
    sum += value;
}

double average = sum / lines.Length;
Console.WriteLine($"Calculated file numbers, sum is {sum}, and average {average}.");

// part 2: store results in JSON into a file
string json = JsonSerializer.Serialize(new { sum, average });
File.WriteAllText("Result.json", json);
Console.WriteLine("Wrote JSON result file.");
