using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Aplication_Visit.Controllers;

namespace Aplication_Visit.Models
{
    interface IntBusiness
    {

        //Method for  insert employee
        Boolean InsertUpdateBusiness(DtoBusiness bus);

        //Method for  delete employee
        Boolean DeleteBusiness(DtoBusiness bus);
        //Method for  list employee
        List<DtoBusiness> ListBraBusiness(DtoBusiness bus);
        List<DtoBusiness> ListBusinessSelect(DtoBusiness bus);


    }
}
