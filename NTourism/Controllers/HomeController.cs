using NTourism.Areas.Admin.Controllers;
using NTourism.Models;
using NTourism.Models.Regular;
using NTourism.Repositories.Impl;
using NTourism.Services.Impl;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace NTourism.Controllers
{
    public class HomeController : Controller
    {
        private ClientRepo clientRepo;
        private TourGuideRepo tourGuideRepo;
        public HomeController()
        {
            clientRepo = new ClientRepo();
            tourGuideRepo = new TourGuideRepo();
        }
        // GET: Home
        [Route("Index")]
        public ActionResult Index()
        {
            return View();
        }
        [Route("AboutUs")]
        public ActionResult AboutUs()
        {
            return View();
        }
        [Route("City")]
        public ActionResult City()
        {
            return View();
        }
        [Route("Collaborate")]
        public ActionResult Collaborate()
        {
            return View();
        }
        [Route("Destinations")]
        public ActionResult Destinations()
        {
            return View();
        }
        [Route("DestinationsMain")]
        public ActionResult DestinationsMain()
        {
            return View();
        }
        [Route("Event")]
        public ActionResult Event()
        {
            return View();
        }
        [Route("EventMain")]
        public ActionResult EventMain()
        {
            return View();
        }
        [Route("OurServices")]
        public ActionResult OurServices()
        {
            return View();
        }
        [Route("Residence")]
        public ActionResult Residence()
        {
            return View();
        }
        [Route("Rimatours")]
        public ActionResult Rimatours()
        {
            return View();
        }
        [Route("Services")]
        public ActionResult Services()
        {
            return View();
        }
        [Route("Service")]
        public ActionResult Service()
        {
            return View();
        }
        [Route("Gallery")]
        public ActionResult Gallery()
        {
            return View();
        }
        [Route("News")]
        public ActionResult News()
        {
            return View();
        }
        [Route("NewsMain")]
        public ActionResult NewsMain()
        {
            return View();
        }
        [Route("RimaTrip")]
        public ActionResult RimaTrip()
        {
            return View();
        }
        [Route("RimaTripAboutUs")]
        public ActionResult RimaTripAboutUs()
        {
            return View();
        }

        [Route("RimaTripHospitals")]
        public ActionResult RimaTripHospitals()
        {
            return View();
        }
        [Route("RimaTripHospitalValiasr")]
        public ActionResult RimaTripHospitalValiasr()
        {
            return View();
        }
        [Route("RimaTripHospitalShams")]
        public ActionResult RimaTripHospitalShams()
        {
            return View();
        }
        [Route("RimaTripHospitalAmialmomenin")]
        public ActionResult RimaTripHospitalAmialmomenin()
        {
            return View();
        }
        [Route("RimaTripPopular")]
        public ActionResult RimaTripPopular()
        {
            return View();
        }
        [Route("RimaTripMedical")]
        public ActionResult RimaTripMedical()
        {
            return View();
        }

        [Route("SingUpOurServices")]
        public ActionResult SingUpOurServices()
        {
            return View();
        }
        [Route("SingUpRimatours")]
        public ActionResult SingUpRimatours()
        {
            return View();
        }
        [Route("SingUpTourist")]
        public ActionResult SingUpTourist()
        {
            return View();
        }
        [Route("Ticket")]
        public ActionResult Ticket()
        {
            return View();
        }
        [Route("Signin")]
        public ActionResult Signin()
        {
            return View();
        }
        public ActionResult LoginUser()
        {
            return View();
        }
        [Route("Signin")]
        [HttpPost]
        public ActionResult Signin(LoginUser login)
        {
            if (ModelState.IsValid)
            {
                string ClicntName = Request.Form["HideStatusId"].ToString();
                ClicntName = ClicntName.Remove(ClicntName.Length - 1);
                TblClient tblClient = clientRepo.SelectClientByUsernamePassword(login.UserName, login.Password);
                TblTourGuide tblTourGuide = tourGuideRepo.SelectTourGuideByUsername(login.UserName);

                int dropdownId = 0;
                if (ClicntName == "OurServices")
                {
                    dropdownId = 6;
                }
                else if (ClicntName == "Tourist")
                {
                    dropdownId = 0;
                }
                else if (ClicntName == "Rimatours")
                {
                    dropdownId = 2;
                }
                if (tblClient.id != -1 && dropdownId != 2)
                {
                    //OK
                    if (tblClient.Status == dropdownId)
                    {
                        if (dropdownId == 0)
                        {
                            ///clicnt
                            FormsAuthentication.SetAuthCookie(login.UserName, login.Remember,"1");
                            return Redirect("/ProfileTourist");
                        }
                        else if (dropdownId == 6)
                        {
                            ///ourservices
                            FormsAuthentication.SetAuthCookie(login.UserName, login.Remember, "1");
                            return Redirect("/ProfileOurServices");
                        }
                        //pass
                    }
                    else
                    {
                        //type error
                        ModelState.AddModelError("UserName", "Error Username Or Password");
                    }
                }
                else if (tblTourGuide.id != -1 && dropdownId == 2)
                {
                    if (tblTourGuide.Password == login.Password)
                    {
                        //ok
                        FormsAuthentication.SetAuthCookie(login.UserName, login.Remember, "1");
                        return Redirect("/ProfileRimatours");
                    }
                    else
                    {
                        ModelState.AddModelError("UserName", "Error Username Or Password");

                    }
                }
                else
                {
                    ModelState.AddModelError("UserName", "Error Username Or Password");
                }



            }
            return View(login);

        }

        public ActionResult SignOut()
        {
            FormsAuthentication.SignOut();
            return Redirect("/Index");
        }
        public ActionResult test()
        {

            return View();
        }
    }
}