    using Aplication_Visit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplication_Visit.Controllers
{
    public class LoginController : Controller
    {
        CtrlEmployee contEmployee = new CtrlEmployee();
        CtrlNotification contNotification = null;
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        // GET: Login  Employee
        public JsonResult LoginEmployee(DtoEmployee emp)
        {
                
            return Json(contEmployee.loginEmployee(emp), JsonRequestBehavior.AllowGet);
        }
        public JsonResult ResetPasswordEmployee(DtoEmployee emp)
        {
            List<String> listResult = new List<String>();
            String sResult = "";
            
            if (contEmployee.ResetPasswordEmployee(emp).Count > 0)
            {
                DtoEmployee objEmp = contEmployee.ResetPasswordEmployee(emp)[0];
                contNotification = new CtrlNotification(objEmp,"Sinapsis", "Restore Password");
                if (contNotification.SendMail())
                {
                    sResult = "Verifique su bandeja de correo ";
                }
                else {
                    sResult = "Error: Al enviar el correo ";
                }
            }
            else {

                sResult = "Error: Cuenta de correo no encontrada";
            }
            listResult.Add(sResult);
            return Json(listResult, JsonRequestBehavior.AllowGet);
        }
       
    }
}