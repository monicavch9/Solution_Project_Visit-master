using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplicationVisit.Models
{
    interface IntClient
    {
        //Method for  insert employee
        Boolean InsertUpdateClit(DtoClient clit);
        //Method for  delete employee
        Boolean DeleteClit(DtoClient clit);
        //Method for  list employee
        List<DtoClient> ListClit(DtoClient clit);
        List<DtoClient> ListClitSelect(DtoClient clit);

    }
}
