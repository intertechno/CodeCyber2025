
Console.WriteLine("Starting to create a long string...");
DateTime start = DateTime.Now;
string s = "";
for (int i = 0; i < 600_000; i++)
{
    s += "A";
}
DateTime end = DateTime.Now;
Console.WriteLine("String created.");

TimeSpan amount = (end - start);
double seconds = amount.TotalSeconds;
System.Console.WriteLine($"The operation took {seconds} seconds.");
