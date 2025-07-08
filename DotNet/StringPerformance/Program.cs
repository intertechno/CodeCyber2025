using System.Text;

Console.WriteLine("Starting to create a long string...");
DateTime start = DateTime.Now;

StringBuilder builder = new();
for (int i = 0; i < 500_000; i++)
{
    builder.Append("A");
}
string s = builder.ToString();

/*
string s = "";
for (int i = 0; i < 600_000; i++)
{
    s += "A";
}
*/

DateTime end = DateTime.Now;
Console.WriteLine("String created.");

TimeSpan amount = (end - start);
double seconds = amount.TotalSeconds;
System.Console.WriteLine($"The operation took {seconds} seconds.");
