using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aplication_Visit.Controllers;
using DAL;

namespace Aplication_Visit.Models
{
    public class CtrlBusiness : IntBusiness
    {
        /*
                public bool InsertUpdateEmployee(DtoEmployee emp)
                {
                    Entities_Visit ctx;
                    bool bResult = false;
                    using (ctx = new Entities_Visit())
                    {

                        try
                        {
                            var query = ctx.PR_INSET_UPDATE_EMPLOYEE
                                (
                                 emp.iRol_id,emp.iBra_buis_id,emp.sEmp_document,emp.sEmp_name,emp.sEmp_surname,
                                 emp.sEmp_phone,emp.sEmp_phone2,emp.sEmp_cell_phone,emp.sEmp_cell_phone,emp.sEmp_addres,
                                 emp.sEmp_mail,emp.sEmp_mail2,emp.sEmp_password,emp.bemp_state,emp.sEmp_permission,emp.sEmp_photo
                                 );
                            int result =Int32.Parse(query.ToString());
                            bResult =true;
                        }
                        catch (Exception e)
                        {


                        }
                    }
                  return bResult;
                }
                public bool DeleteEmployee(DtoEmployee emp)
                {
                    Entities_Visit ctx = new Entities_Visit();
                    bool bResult = false;
                    using (ctx = new Entities_Visit())
                    {

                        try
                        {
                            var query = ctx.PR_DELETE_EMPLOYEE
                                (
                                 emp.iEmp_id,  emp.sEmp_document 
                                 );
                            int result = Int32.Parse(query.ToString());
                            bResult = true;
                        }
                        catch (Exception e)
                        {


                        }
                    }
                    return bResult;

                } 

                public List<DtoEmployee> ListEmployee(DtoEmployee emp) {
                    Entities_Visit ctx;
                    using (ctx = new Entities_Visit()) {
                        List<DtoEmployee> list = new List<DtoEmployee>();
                        DtoEmployee objEmployee;
                        try
                        {
                            var query = ctx.PR_SEARCH_EMPLOYEE(emp.bemp_state, emp.iBra_buis_id);
                            foreach (var employee in query) {
                                objEmployee = new DtoEmployee();
                                objEmployee.iEmp_id = (int)employee.EMP_ID;
                                objEmployee.iRol_id = (int)employee.ROL_ID;
                                objEmployee.sRol_name = employee.ROL_NAME;
                                objEmployee.sEmp_document = employee.EMP_DOCUMENT;
                                objEmployee.sEmp_name = employee.EMP_NAME;
                                objEmployee.sEmp_surname = employee.EMP_SURNAME;
                                objEmployee.sEmp_phone = employee.EMP_PHONE;
                                objEmployee.sEmp_phone2 = employee.EMP_PHONE;
                                objEmployee.sEmp_cell_phone = employee.EMP_CELL_PHONE;
                                objEmployee.sEmp_cell_phone2 = employee.EMP_CELL_PHONE2;
                                objEmployee.sEmp_addres = employee.EMP_ADDRES;
                                objEmployee.sEmp_mail = employee.EMP_MAIL;
                                objEmployee.sEmp_mail2 = employee.EMP_MAIL2;
                                list.Add(objEmployee);
                            }
                            list.ToList();    
                        }
                        catch (Exception e) {      
                        }
                        return list;
                    }
                }
                public List<DtoEmployee> ListEmployeeSelect(DtoEmployee emp)
                {
                    Entities_Visit ctx;
                    using (ctx = new Entities_Visit())
                    {
                        List<DtoEmployee> list = new List<DtoEmployee>();
                        DtoEmployee objEmployee;
                        try
                        {
                             var query = ctx.PR_SEARCH_EMPLOYEE_SELECTION(emp.bemp_state, emp.iBra_buis_id,emp.sEmp_name,emp.sEmp_surname,emp.sEmp_document,emp.sEmp_mail,emp.sRol_name);
                            foreach (var employee in query)
                            {
                                objEmployee = new DtoEmployee();
                                objEmployee.iEmp_id = (int)employee.EMP_ID;
                                objEmployee.iRol_id = (int)employee.ROL_ID;
                                objEmployee.sRol_name = employee.ROL_NAME;
                                objEmployee.sEmp_document = employee.EMP_DOCUMENT;
                                objEmployee.sEmp_name = employee.EMP_NAME;
                                objEmployee.sEmp_surname = employee.EMP_SURNAME;
                                objEmployee.sEmp_phone = employee.EMP_PHONE;
                                objEmployee.sEmp_phone2 = employee.EMP_PHONE;
                                objEmployee.sEmp_cell_phone = employee.EMP_CELL_PHONE;
                                objEmployee.sEmp_cell_phone2 = employee.EMP_CELL_PHONE2;
                                objEmployee.sEmp_addres = employee.EMP_ADDRES;
                                objEmployee.sEmp_mail = employee.EMP_MAIL;
                                objEmployee.sEmp_mail2 = employee.EMP_MAIL2;
                                list.Add(objEmployee);
                            }
                            list.ToList();
                        }
                        catch (Exception e)
                        {
                        }
                        return list;
                    }
                }

                public List<DtoEmployee> ListRole()
                {
                    Entities_Visit ctx;
                    using (ctx = new Entities_Visit())
                    {

                        var listRole= (from rol in ctx.ROLE

                                            select new DtoEmployee()
                                            {


                                                iRol_id = rol.ROL_ID,
                                                sRol_name = rol.ROL_NAME

                                            }
                                            ).ToList();

                        return listRole;
                    }

                }*/
        public bool DeleteBusiness(DtoBusiness bus)
        {
            throw new NotImplementedException();
        }

        public bool InsertUpdateBusiness(DtoBusiness bus)
        {
            throw new NotImplementedException();
        }

        public List<DtoBusiness> ListBraBusiness(DtoBusiness bus)
        {
            Entities_Visit ctx;
            List<DtoBusiness> listBranchOffice=null;
            try
            {
                using (ctx = new Entities_Visit())
            {


                    listBranchOffice = (from bra in ctx.BRANCH_COMPANY
                                            where bra.BUS_ID == bus.iBus_id
                                            select new DtoBusiness()
                                            {
                                                iBra_buis_id = bra.BRA_BUIS_ID,
                                                sBra_buis_name=bra.BRA_BUIS_NAME
                                            }
                                          ).ToList();
                    return listBranchOffice;
                }
                 }
            catch (Exception e)
            {
            }
            return listBranchOffice;

        }

        public List<DtoBusiness> ListBusinessSelect(DtoBusiness bus)
        {
            throw new NotImplementedException();
        }
    }
}