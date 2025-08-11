using AspNetNorthwindWebApi.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetNorthwindWebApi.Controllers
{
    [Route("api/customers")]
    [ApiController]
    public class CustomersApiController : ControllerBase
    {
        public List<Customer> GetAllCustomers()
        {
            using NorthwindContext context = new();
            List<Customer> customers = [.. context.Customers];
            return customers;
        }
    }
}
