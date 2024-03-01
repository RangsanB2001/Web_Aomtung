using Microsoft.AspNetCore.Mvc;

namespace Aomtung.Web.Controllers
{
    public class AuthenController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
