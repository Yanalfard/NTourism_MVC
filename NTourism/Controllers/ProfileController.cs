using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NTourism.Controllers
{
    [Authorize]
    public class ProfileController : Controller
    {
        // GET: Profile

        [Route("ProfileOurServices")]
        public ActionResult ProfileOurServices()
        {
            return View();
        }
        [Route("ProfileRimatours")]
        public ActionResult ProfileRimatours()
        {
            return View();
        }
        [Route("ProfileTourist")]
        public ActionResult ProfileTourist()
        {
            return View();
        }
    }
}