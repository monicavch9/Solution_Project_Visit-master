using Aplication_Visit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Aplication_Visit.Controllers
{
    public class BusinessController : Controller
    {
        CtrlBusiness ctrlBusiness= new CtrlBusiness();

        // GET: Businness
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Business()
        {
            return View();
        }
        public JsonResult ListBraBusiness(DtoBusiness bus)
        {

            return Json(ctrlBusiness.ListBraBusiness(bus), JsonRequestBehavior.AllowGet);
        }
    }
}