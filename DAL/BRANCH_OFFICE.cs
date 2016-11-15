//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class BRANCH_OFFICE
    {
        public BRANCH_OFFICE()
        {
            this.QUOTATION = new HashSet<QUOTATION>();
            this.VISITS = new HashSet<VISITS>();
        }
    
        public int BRA_OFF_ID { get; set; }
        public int CLI_BUS_ID { get; set; }
        public int CIT_ID { get; set; }
        public int EMP_ID { get; set; }
        public string BRA_OFF_NAME { get; set; }
        public string BRA_OFF_PHONE { get; set; }
        public string BRA_OFF_ADDRESS { get; set; }
        public string BRA_COM_NAME { get; set; }
        public string BRA_COM_PHONE { get; set; }
        public string BRA_COM_MAIL { get; set; }
        public string BRA_COM_MAIL2 { get; set; }
        public bool BRA_COM_VALIDATE { get; set; }
        public bool BRA_OFF_STATE { get; set; }
    
        public virtual EMPLOYEE EMPLOYEE { get; set; }
        public virtual CITIES CITIES { get; set; }
        public virtual CLIENT_BUSINESS CLIENT_BUSINESS { get; set; }
        public virtual ICollection<QUOTATION> QUOTATION { get; set; }
        public virtual ICollection<VISITS> VISITS { get; set; }
    }
}
