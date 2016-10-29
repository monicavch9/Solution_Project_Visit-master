using Aplication_Visit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplication_Visit.Controllers
{
    public class NewPasswordController : Controller
    {
        CtrlEmployee contEmployee = new CtrlEmployee();
        // GET: NewPassword
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ChangePassword()
        {
            return View();
        }
        public JsonResult UpdatePasswordUser(DtoEmployee emp)
        {

            return Json(contEmployee.UpdateEmployeePassword(emp), JsonRequestBehavior.AllowGet);
        }
    }
}