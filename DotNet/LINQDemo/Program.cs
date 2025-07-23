// See https://aka.ms/new-console-template for more information
Console.WriteLine("Welcome to the LINQ demo application!");

// new collection initializer syntax
List<Person> people =
[
    new("Alice Johnson", "789 Pine St", "USA"),
    new("Bob Brown", "321 Maple St", "Canada"),
    new("Charlie White", "654 Cedar St", "USA"),
    new("Daniel Schmidt", "12 Berliner Allee", "Germany"),
    new("Sofia Rossi", "45 Via Roma", "Italy"),
    new("Hiroshi Tanaka", "3-2-1 Shibuya", "Japan"),
    new("Emma Dubois", "87 Rue de Rivoli", "France"),
    new("Lucas Silva", "102 Avenida Paulista", "Brazil"),
    new("Chloe Smith", "10 Downing Street", "UK"),
    new("Anika Patel", "56 MG Road", "India"),
    new("Carlos Ortega", "75 Calle de Alcalá", "Spain"),
    new("Liam O'Connor", "42 Grafton Street", "Ireland"),
    new("Natalie Müller", "99 Hauptstraße", "Austria"),
    new("Johan Svensson", "27 Drottninggatan", "Sweden"),
    new("Mina Kim", "18 Gangnam-daero", "South Korea"),
    new("Tariq Al-Fulan", "23 King Fahd Road", "Saudi Arabia"),
    new("Elena Popescu", "11 Strada Mare", "Romania"),
    new("Igor Ivanov", "8 Tverskaya Street", "Russia")
];

// LINQ query to find people from the given country
Console.Write("Enter a country to search for people: ");
string country = Console.ReadLine() ?? string.Empty;

// LINQ using the query expression syntax
List<Person> match = [.. from p in people 
                      where p.Country == country
                      select p];

// alternative LINQ using method syntax
// List<Person> match2 = [.. people.Where(p => p.Country == country)];

foreach (Person person in match)
{
    Console.WriteLine($"{person.Name}, {person.Address}, {person.Country}");
}


/*
List<Person> people = new List<Person>
{
    new Person("Alice Johnson", "789 Pine St", "USA"),
    new Person("Bob Brown", "321 Maple St", "Canada"),
    new Person("Charlie White", "654 Cedar St", "USA")
};
*/

/*
// using primary constructor syntax
Person one = new("John Doe", "123 Elm St", "USA");
Person two = new("Jane Smith", "456 Oak St", "Canada");
*/

/*
List<int> numbers = [1, 2, 3, 4, 5];
List<int> empty = [];
*/
