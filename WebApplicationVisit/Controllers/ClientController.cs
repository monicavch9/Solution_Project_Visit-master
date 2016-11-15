using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplicationVisit.Models;

namespace Aplication_Visit.Controllers
{
    public class ClientController : Controller
    {
        CtrlClient ObjClient = new CtrlClient();
        // GET: Client
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Client() {
            return View();
        }
        //Method for  insert employee
        public JsonResult InsertUpdateClit(DtoClient clit) {
            return Json(ObjClient.InsertUpdateClit(clit), JsonRequestBehavior.AllowGet);

        }
        //Method for  delete employee
        public JsonResult DeleteClit(DtoClient clit)
        {

            return Json(ObjClient.DeleteClit(clit), JsonRequestBehavior.AllowGet);
        }
        //Method for  list employee
        public JsonResult ListClit(DtoClient clit)
        {
            return Json(ObjClient.ListClit(clit), JsonRequestBehavior.AllowGet);
        }
        public   JsonResult  ListClitSelect(DtoClient clit)
        {

            return Json(ObjClient.ListClitSelect(clit),JsonRequestBehavior.AllowGet);
        }
        /*public JsonResult ListClitSelect(DtoClient clit)
        {

            return Json(ObjClient.ListClitSelect(clit), JsonRequestBehavior.AllowGet);
        }*/
    }
}