using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
        private readonly IMailService _mailService;
        public AppController(IMailService mailService)
        {
            _mailService = mailService;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            //throw new InvalidOperationException("Fuck it Error");            
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            //throw new InvalidOperationException("Fuck it Error");            
            return View();
        }

        [HttpGet("reserve")]
        public IActionResult Reserve()
        {
            //throw new InvalidOperationException("Fuck it Error");            
            return View();
        }

        [HttpPost("reserve")]
        public IActionResult Reserve(ReserveViewModel model)
        {
            if (ModelState.IsValid)
            {
                _mailService.SendMessage(model.Email, model.Name, model.Restaurant);
                ViewBag.UserMessage = " Reserved";
                ModelState.Clear();
            }          
            //throw new InvalidOperationException("Fuck it Error");            
            return View();
        }

        public IActionResult About()
        {
            ViewBag.Title = "About us";
            return View();
        }
    }
}
