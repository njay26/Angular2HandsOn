using System;
using System.Collections.Generic;
using EmployeeApi.Models;
using EmployeeApi.Repository;
using EmployeeApi.Repository.Imp;

namespace EmployeeApi.Services.Imp
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService()
        {
            _employeeRepository = new EmployeeRepository();
        }

        public Employee CreateEmployee(Employee employee)
        {
            return _employeeRepository.CreateEmployee(employee);
        }

        public List<Employee> GetEmployees()
        {
            return _employeeRepository.GetEmployees();
        }
    }
}