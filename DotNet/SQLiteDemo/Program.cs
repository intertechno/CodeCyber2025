using System.Data.SQLite;

Console.WriteLine("Welcome to the SQLite Example!");

string connectionString = @"Data Source=C:\Users\Koulutus\Desktop\northwind.db;Version=3;";
using SQLiteConnection connection = new(connectionString);
connection.Open();
Console.WriteLine("Connection to SQLite established.");

string sql = """
    SELECT *
    FROM Customers
    WHERE Country = "Finland"
    """;

// execute the SQL query and display the results
using SQLiteCommand command = new(sql, connection);
using SQLiteDataReader reader = command.ExecuteReader();
while (reader.Read())
{
    Console.WriteLine($"Customer ID: {reader["CustomerID"]}, Name: {reader["CompanyName"]}");
}

Console.WriteLine("Query executed successfully.");

// ---
Console.WriteLine();
Console.WriteLine("Please enter a product name:");
string productName = Console.ReadLine() ?? "";

sql = "SELECT UnitPrice FROM Products " +
      "WHERE ProductName = $ProductName";

// execute the SQL query and display the price
using SQLiteCommand priceCommand = new(sql, connection);
priceCommand.Parameters.AddWithValue("$ProductName", productName);
using SQLiteDataReader priceReader = priceCommand.ExecuteReader();
if (priceReader.Read())
{
    Console.WriteLine($"The price of {productName} is {priceReader["UnitPrice"]}");
}
else
{
    Console.WriteLine($"Product {productName} not found.");
}
