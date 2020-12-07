using NTourism.Models.Regular;
using NTourism.Repositories.Impl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NTourism.Areas.Tourist.Controllers
{
    public class HomeController : Controller
    {
        // GET: Tourist/Home
        private ClientRepo clientRepo;
        private TourGuideRepo tourGuideRepo;
        public HomeController()
        {
            clientRepo = new ClientRepo();
            tourGuideRepo = new TourGuideRepo();
        }
        // GET: OurServices/Home
        public ActionResult Index()
        {
            return View();
        }
        TblClient Information()
        {
            TblClient tblClient = clientRepo.SelectClientByUsername(User.Identity.Name.Split('|')[0]);
            return tblClient;
        }
        public ActionResult Info()
        {
            return PartialView(Information());
        }
        public ActionResult EditInfo()
        {
            return PartialView(Information());
        }
    }
}