using EmployeeApi.Models;
using EmployeeApi.Services;
using EmployeeApi.Services.Imp;
using System.Web.Http;

namespace EmployeeApi.Controllers
{
    public class EmployeeController : ApiController
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController()
        {
            _employeeService = new EmployeeService();
        }

        [HttpGet, Route("GetEmployees")]
        public IHttpActionResult GetEmployees()
        {
            var employees = _employeeService.GetEmployees();
            return Ok(employees);
        }

        [HttpPost, Route("employee/add")]
        public IHttpActionResult CreateEmployee(string firstName,string lastName, string designation)
        {
            var employee = new Employee { FirstName = firstName, LastName = lastName, Designation = designation };
            var createdEmployee = _employeeService.CreateEmployee(employee);
            return Ok(createdEmployee);
        }
    }
}
