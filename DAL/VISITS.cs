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
    
    public partial class VISITS
    {
        public VISITS()
        {
            this.IT_HAS_ACTIVITIES = new HashSet<IT_HAS_ACTIVITIES>();
        }
    
        public int VIS_ID { get; set; }
        public int BRA_OFF_ID { get; set; }
        public string VIS_ADDRESS { get; set; }
    
        public virtual BRANCH_OFFICE BRANCH_OFFICE { get; set; }
        public virtual ICollection<IT_HAS_ACTIVITIES> IT_HAS_ACTIVITIES { get; set; }
    }
}
