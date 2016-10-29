using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Aplication_Visit.Controllers
{
    public class DtoEmployee
    {
        public int iRol_id { get; set; }
        public int iEmp_id { get; set; }
        public string sRol_name { get; set; }
        public int iBra_buis_id { get; set; }
        public string sEmp_document { get; set; }
        public string sEmp_name { get; set; }
        public string sEmp_surname { get; set; }
        public string sEmp_phone { get; set; }
        public string sEmp_phone2 { get; set; }
        public string sEmp_cell_phone { get; set; }
        public string sEmp_cell_phone2 { get; set; }
        public string sEmp_addres { get; set; }
        public string sEmp_mail { get; set; }
        public string sEmp_mail2 { get; set; }
        public string sEmp_password { get; set; }
        public Boolean bemp_state { get; set; }


    }
}
