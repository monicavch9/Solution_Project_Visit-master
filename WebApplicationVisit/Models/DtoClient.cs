using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationVisit.Models
{
    public class DtoClient
    {
        public int iCli_bus_id { get; set; }
        public string sCli_bus_name { get; set; }
        public string sCli_bus_document { get; set; }
        public string sCli_bus_type { get; set; }
        public int iCli_state { get; set; }
        public string sEmp_document { get; set; }
        public string sEmp_mail { get; set; }

        public int iBra_off_id { get; set; }
        public int iCit_id{ get; set; }
        public string sCit_name { get; set; }
        public int iCont_id { get; set; }
        public string sCont_name { get; set; }
        public int iEmp_id { get; set; }
        public string sBra_off_name { get; set; }
        public string sBra_off_phone { get; set; }
        public string sBra_off_address { get; set; }
        public string sBra_com_name { get; set; }
        public string sBra_com_phone { get; set; }
        public string sBra_com_mail { get; set; }
        public string sBra_com_mail2 { get; set; }
        public Boolean bBra_com_validate { get; set; }
        public Boolean bBra_off_state { get; set; }
    }
}