﻿using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DutchTreat.Controllers
{
    public class AppController : Controller
    {
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

        [HttpGet("reserve")]
        public IActionResult Reserve()
        {
            //throw new InvalidOperationException("Fuck it Error");            
            return View();
        }

        [HttpPost("reserve")]
        public IActionResult Reserve(ReserveViewModel model)
        {
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
