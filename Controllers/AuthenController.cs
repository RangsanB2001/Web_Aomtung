using Microsoft.AspNetCore.Mvc;

namespace Aomtung.Web.Controllers
{
    public class AuthenController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }


        public IActionResult Register()
        {
            return View();
        }


        public IActionResult ErrorPage()
        {
            return View();
        }


        public IActionResult CreatePassword()
        {
            return View();
        }
    }
}
