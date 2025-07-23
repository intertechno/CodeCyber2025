// using primary constructor syntax
public class Person(string name, string address, string country)
{
    public string Name { get; set; } = name;
    public string Address { get; set; } = address;
    public string Country { get; set; } = country;
}

/*
public class Person
{
    public string Name { get; set; } = "";
    public string Address { get; set; } = "";
    public string Country { get; set; } = "";
}
*/
