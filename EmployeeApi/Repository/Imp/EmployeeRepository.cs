using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EmployeeApi.Models;
using EmployeeApi.Context;

namespace EmployeeApi.Repository.Imp
{
    public class EmployeeRepository : IEmployeeRepository
    {
        public Employee CreateEmployee(Employee employee)
        {
            using (var context = new EmployeeContext())
            {
                context.Employees.Add(employee);
                context.SaveChanges();
                return employee;
            }
        }

        public List<Employee> GetEmployees()
        {
            using (var context = new EmployeeContext())
            {
                var employees = context.Employees.ToList();
                return employees;
            }
        }
    }
}