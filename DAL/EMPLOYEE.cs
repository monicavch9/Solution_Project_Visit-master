
//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------


namespace DAL
{

using System;
    using System.Collections.Generic;
    
public partial class EMPLOYEE
{

    public EMPLOYEE()
    {

        this.BRANCH_OFFICE = new HashSet<BRANCH_OFFICE>();

    }


    public int EMP_ID { get; set; }

    public int ROL_ID { get; set; }

    public int BRA_BUIS_ID { get; set; }

    public string EMP_DOCUMENT { get; set; }

    public string EMP_NAME { get; set; }

    public string EMP_SURNAME { get; set; }

    public string EMP_PHONE { get; set; }

    public string EMP_PHONE2 { get; set; }

    public string EMP_CELL_PHONE { get; set; }

    public string EMP_CELL_PHONE2 { get; set; }

    public string EMP_ADDRES { get; set; }

    public string EMP_MAIL { get; set; }

    public string EMP_MAIL2 { get; set; }

    public string EMP_PASSWORD { get; set; }

    public bool EMP_STATE { get; set; }

    public string EMP_PER { get; set; }

    public string EMP_PHOTO { get; set; }



    public virtual BRANCH_COMPANY BRANCH_COMPANY { get; set; }

    public virtual ICollection<BRANCH_OFFICE> BRANCH_OFFICE { get; set; }

    public virtual ROLE ROLE { get; set; }

}

}
