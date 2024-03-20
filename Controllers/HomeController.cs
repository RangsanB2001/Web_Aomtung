using Aomtung.Web.Models;
using Aomtung.Web.Services;
using Helpers.CallHttpClientHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace Aomtung.Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ServicesSettings serviceSettings;
        private readonly ICallHttpClientHelper httpClientHelper;

        public HomeController(ILogger<HomeController> logger, IOptions<ServicesSettings> serviceSettings, ICallHttpClientHelper httpClientHelper)
        {
            _logger = logger;
            this.serviceSettings = serviceSettings.Value;
            this.httpClientHelper = httpClientHelper;
        }


        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> GanerateOTP(AuthenModels authen)
        {
            var fullUrl = $"{serviceSettings.AomtungApi}/OTP/GenerateOTP";
            var requestContent = JsonSerializer.Serialize(authen);

            var result = await httpClientHelper.SendJson(fullUrl, HttpMethod.Post, requestContent);

            if (!result.success || result.body == null)
            {
                return RedirectToAction("ErrorPage", "Home");
            }

            var jsonData = JsonSerializer.Deserialize<MassageAPI>(result.body);

            if (jsonData == null || jsonData.status != 200)
            {
                return View("ErrorPage", "Home");
            }

            var otpResponse = new DataOTP
            {
                SendTO = jsonData.data.sendTO,
                RefCode = jsonData.data.refCode,
                Codeotp = jsonData.data.codeotp,
                Expired = jsonData.data.expired,
                ValidateLegthPhone = jsonData.data.validateLegthPhone,
                Is_Duplicate = jsonData.data.is_Duplicate
            };

            string serializedOtpResponse = JsonSerializer.Serialize(otpResponse);
            TempData["DataOTP"] = serializedOtpResponse;

            return RedirectToAction("ConfirmOTP", "Home");
        }

        public IActionResult ConfirmOTP()
        {
            /* string? serializedOtpResponse = TempData["DataOTP"] as string;

             if (string.IsNullOrEmpty(serializedOtpResponse))
             {
                 return RedirectToAction("ConfirmOTP", "Home");
             }
             var otpResponse = JsonSerializer.Deserialize<DataOTP>(serializedOtpResponse);

             return View(otpResponse);*/
            return View();
        }

        public IActionResult ViewHome()
        {
            return View();
        }


        public IActionResult ProfileUser()
        {
            return View();
        }

        public IActionResult Insert()
        {
            return View();
        }

        public IActionResult ErrorPage()
        {
            return View();
        }
    }
}
