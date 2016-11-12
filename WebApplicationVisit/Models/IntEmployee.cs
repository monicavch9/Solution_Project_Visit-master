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

        //Method for  insert employee
        Boolean InsertUpdateEmployee(DtoEmployee emp);

        //Method for  delete employee
        Boolean DeleteEmployee(DtoEmployee emp);
        //Method for  list employee
        List<DtoEmployee> ListEmployee(DtoEmployee emp);
        List<DtoEmployee> ListEmployeeSelect(DtoEmployee emp);


        //Method for login employee
        List<DtoEmployee> loginEmployee(DtoEmployee emp);
        List<DtoEmployee> ResetPasswordEmployee(DtoEmployee emp);
        List<DtoEmployee> UpdateEmployeePassword(DtoEmployee emp);
    }
}
