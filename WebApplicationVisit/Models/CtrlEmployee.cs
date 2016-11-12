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
                   // int result =Int32.Parse(query.ToString());
                    bResult =true;
                }
                catch (Exception e)
                {

                    bResult = false;
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
                  
                    var query = ctx.PR_UPADTE_STATE_EMPLOYEE
                        (
                         emp.iEmp_id,  emp.sEmp_document 
                         );
                    string result = query.ToString();
                 
                        bResult = true;
               
                }
                catch (Exception e)
                {

                    bResult = false;
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
                        objEmployee.sEmp_password = employee.EMP_PASSWORD;
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
                        objEmployee.sEmp_password = employee.EMP_PASSWORD;
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
        public List<DtoEmployee> ListEmployeeUpdate(DtoEmployee emp)
        {
            Entities_Visit ctx;
            List<DtoEmployee> list=null;
            using (ctx = new Entities_Visit())
            { 
                try
                {
                   list = (from empl in ctx.EMPLOYEE
                                join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
                                where empl.EMP_DOCUMENT == emp.sEmp_document || empl.EMP_MAIL == emp.sEmp_mail
                                select new DtoEmployee()
                                {
                                iEmp_id = empl.EMP_ID,
                                iRol_id = empl.ROL_ID,
                                sRol_name = rol.ROL_NAME,
                                sEmp_document = empl.EMP_DOCUMENT,
                                sEmp_name = empl.EMP_NAME,
                                sEmp_surname = empl.EMP_SURNAME,
                                sEmp_phone = empl.EMP_PHONE,
                                sEmp_phone2 = empl.EMP_PHONE2,
                                sEmp_cell_phone = empl.EMP_CELL_PHONE,
                                sEmp_cell_phone2 = empl.EMP_CELL_PHONE2,
                                sEmp_addres = empl.EMP_ADDRES,
                                sEmp_mail = empl.EMP_MAIL,
                                sEmp_mail2 = empl.EMP_MAIL2,
                                sEmp_password = empl.EMP_PASSWORD
                }).ToList();
                    return list;
                }
                catch (Exception e)
                {

                }
                return list;
            }
        }
        public List<DtoEmployee> UpdateEmployeePassword(DtoEmployee emp)
        {

            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var objEmployee = (from empl in ctx.EMPLOYEE
                                   where empl.EMP_ID == emp.iEmp_id
                                   select empl).FirstOrDefault();
                objEmployee.EMP_PASSWORD = emp.sEmp_password;
                ctx.SaveChanges();

                var ListEmployee = (from empl in ctx.EMPLOYEE
                                    where empl.EMP_PASSWORD == emp.sEmp_password
                                    orderby empl.EMP_NAME
                                    select new DtoEmployee()
                                    {

                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,

                                    }).ToList();
                return ListEmployee;

            }


        }
        public List<DtoEmployee> loginEmployee(DtoEmployee emp)
        {
            Entities_Visit ctx;
            using (ctx = new Entities_Visit())
            {

                var listEmployee = (from empl in ctx.EMPLOYEE
                                    join rol in ctx.ROLE on empl.ROL_ID equals rol.ROL_ID
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_PASSWORD == emp.sEmp_password && empl.EMP_STATE == true
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
                                    where empl.EMP_MAIL == emp.sEmp_mail && empl.EMP_STATE == true
                                    select new DtoEmployee()
                                    {


                                        iEmp_id = empl.EMP_ID,
                                        bemp_state = empl.EMP_STATE,
                                        sEmp_name = empl.EMP_NAME,
                                        sEmp_surname = empl.EMP_SURNAME,
                                        sEmp_mail = empl.EMP_MAIL

                                    }
                                    ).ToList();

                return listEmployee;
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

        }

    }
}