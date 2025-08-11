using AspNetWebApiDemo2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebApiDemo2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonsController : ControllerBase
    {
        public List<PersonModel> GetPersons()
        {
            // read the CSV file data
            string csvPath = @"C:\Academy\Code Cyber\Code\Persons.csv";
            string[] csvLines = System.IO.File.ReadAllLines(csvPath);

            // convert the CSV data into PersonModel objects
            List<PersonModel> persons = [];
            bool isFirstLine = true;
            foreach (string line in csvLines)
            {
                if (isFirstLine)
                {
                    isFirstLine = false;
                    continue;
                }

                string[] parts = line.Split(',');
                persons.Add(new PersonModel
                {
                    PersonNumber = int.Parse(parts[0]),
                    PersonName = parts[1],
                    Birthdate = parts[2]
                });
            }

            return persons;
        }
    }
}
