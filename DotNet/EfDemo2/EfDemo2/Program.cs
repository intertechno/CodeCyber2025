using EfDemo2.Models;

Console.WriteLine("Welcome to the EF Demo 2!");

using NorthwindContext context = new();
List<Customer> finnishCustomers =
    [.. context.Customers.Where(c => c.Country == "Finland")];

foreach (Customer customer in finnishCustomers)
{
    Console.WriteLine($"{customer.CustomerId} {customer.CompanyName}");
}
