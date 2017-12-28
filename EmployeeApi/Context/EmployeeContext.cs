using EmployeeApi.Models;
using System.Data.Entity;

namespace EmployeeApi.Context
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(): base("EmployeeContext")
        {
            Database.SetInitializer<EmployeeContext>(null);
        }
        public DbSet<Employee> Employees{ get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().ToTable("Employee");
            base.OnModelCreating(modelBuilder);
        }
    }
}
