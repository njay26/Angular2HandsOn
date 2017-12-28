using EmployeeApi.Models;
using System.Collections.Generic;

namespace EmployeeApi.Services
{
    public  interface IEmployeeService
    {
        List<Employee> GetEmployees();
        Employee CreateEmployee(Employee employee);
    }
}
