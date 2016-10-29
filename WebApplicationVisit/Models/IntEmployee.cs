using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aplication_Visit.Controllers;

namespace Aplication_Visit.Models
{
    interface IntEmployee
    {
        //Method for  list employee
        List<DtoEmployee> listEmployee();
        List<DtoEmployee> listEmployeeSelect(string selection);
        //Method for  insert employee
        Boolean insertEmployee(DtoEmployee emp);
        //Method for  update employee
        Boolean updateEmployee(DtoEmployee emp);
        //Method for  delete employee
        Boolean deleteEmployee(DtoEmployee emp);
        //Method for login employee
        List<DtoEmployee> loginEmployee(DtoEmployee emp);
        List<DtoEmployee> ResetPasswordEmployee(DtoEmployee emp);
        List<DtoEmployee> UpdateEmployeePassword(DtoEmployee emp);
    }
}
