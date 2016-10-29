using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Aplication_Visit.Models;

namespace Aplication_Visit.Controllers
{
    public class HomeController : Controller
    {
        CtrlEmployee contEmployee = new CtrlEmployee();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
        // GET: List Employee
        public JsonResult ListEmployee()
        {

            return Json(contEmployee.listEmployee(), JsonRequestBehavior.AllowGet);
        }
        
    }
}