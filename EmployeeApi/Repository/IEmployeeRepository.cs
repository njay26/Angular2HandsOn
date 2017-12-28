using EmployeeApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeApi.Repository
{
   public interface IEmployeeRepository
    {
        List<Employee> GetEmployees();
        Employee CreateEmployee(Employee employee);
    }
}
