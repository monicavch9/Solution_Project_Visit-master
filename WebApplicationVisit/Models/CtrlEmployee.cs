using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Aplication_Visit.Controllers;
using DAL;

namespace Aplication_Visit.Models
{
    public class CtrlEmployee : IntEmployee
    {


        public bool insertEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;

            throw new NotImplementedException();
        }
        public bool updateEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            throw new NotImplementedException();
        }
        public bool deleteEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            throw new NotImplementedException();
        }

        public List<DtoEmployee> listEmployee()
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit()) {
                var ListEmployee = (from empl in ctx.EMPLOYEE
                                    orderby empl.EMP_NAME
                                    select new DtoEmployee()
                                    {
                                        iRol_id = (int)empl.ROL_ID,
                                        iBra_buis_id = (int)empl.BRA_BUIS_ID,
                                        sEmp_document = empl.EMP_DOCUMENT,
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        sEmp_phone = empl.EMP_PHONE,
                                        sEmp_phone2 = empl.EMP_PHONE,
                                        sEmp_cell_phone = empl.EMP_CELL_PHONE,
                                        sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
                                        sEmp_addres = empl.EMP_ADDRES,
                                        sEmp_mail = empl.EMP_MAIL,
                                        sEmp_mail2 = empl.EMP_MAIL2
                                    }).ToList();
                return ListEmployee;
            }
                
        }

        public List<DtoEmployee> listEmployeeSelect(string selection)
        {
            Entities_Visit ctx;

            throw new NotImplementedException();
        }

        public List<DtoEmployee> loginEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listEmployee = (from empl in ctx.EMPLOYEE
                                    join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_PASSWORD == emp.sEmp_password && empl.EMP_STATE==true
                                    select new DtoEmployee()
                                    {
                                        iRol_id = (int)empl.ROL_ID,
                                        sRol_name = rol.ROL_NAME,
                                        iBra_buis_id = (int)empl.BRA_BUIS_ID,
                                        sEmp_document = empl.EMP_DOCUMENT,
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        sEmp_phone = empl.EMP_PHONE,
                                        sEmp_phone2 = empl.EMP_PHONE,
                                        sEmp_cell_phone = empl.EMP_CELL_PHONE,
                                        sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
                                        sEmp_addres = empl.EMP_ADDRES,
                                        sEmp_mail = empl.EMP_MAIL,
                                        sEmp_mail2 = empl.EMP_MAIL2

                                    }
                                    ).ToList();
                return listEmployee;
            }

        }

        public List<DtoEmployee> ResetPasswordEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listEmployee = (from empl in ctx.EMPLOYEE
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_STATE==true
                                    select new DtoEmployee()
                                    {


                                        iEmp_id=empl.EMP_ID,
                                        bemp_state = empl.EMP_STATE,
                                        sEmp_name=empl.EMP_NAME,
                                        sEmp_surname=empl.EMP_SURNAME,
                                        sEmp_mail=empl.EMP_MAIL

                                    }
                                    ).ToList();

                return listEmployee;
            }

        }

        public List<DtoEmployee> UpdateEmployeePassword(DtoEmployee emp) {

            Entities_Visit ctx;
            using (ctx = new Entities_Visit()) {

                var objEmployee = (from empl in ctx.EMPLOYEE
                                   where empl.EMP_ID== emp.iEmp_id
                                   select empl).FirstOrDefault();
                objEmployee.EMP_PASSWORD = emp.sEmp_password;
                ctx.SaveChanges();

                var ListEmployee = (from empl in ctx.EMPLOYEE
                                    where empl.EMP_PASSWORD==emp.sEmp_password
                                    orderby empl.EMP_NAME
                                    select new DtoEmployee()
                                    {
                                        
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        
                                    }).ToList();
                return ListEmployee;

            }

               
        }


    }
}