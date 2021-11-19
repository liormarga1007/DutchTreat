using DutchTreat.Services;
using DutchTreat.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading;
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
                string dateOffset;
                    System.DateTimeOffset d2 = DateTimeOffset.Parse(model.Time, null);
                    System.DateTimeOffset d1 = DateTimeOffset.Parse(model.Date, null);
                    if (d1.Date.DayOfYear - DateTimeOffset.Now.Date.DayOfYear >= 0)
                        dateOffset = (d1.Date.DayOfYear - DateTimeOffset.Now.Date.DayOfYear).ToString();
                    else
                        dateOffset = (d1.Date.DayOfYear - DateTimeOffset.Now.Date.DayOfYear + 365).ToString();
                
                
                var client = new HttpClient();
                var guid = Guid.NewGuid().ToString();
                var httpRequestMessage = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri("https://mysterious-hollows-90255.herokuapp.com/?restaurant=" + $"{model.Restaurant}&persons={model.Diners}&time={model.Time.Split(":")[0]}&date={dateOffset}&name={model.Name}&family={model.Surname}&phone={model.Phone}&email=liormarga1007@gmail.com&session={guid}")
                };

                var response = client.SendAsync(httpRequestMessage).Result;
                string source = response.Content.ReadAsStringAsync().Result;
                string title = Regex.Match(source, @"\<title\b[^>]*\>\s*(?<Title>[\s\S]*?)\</title\>", RegexOptions.IgnoreCase).Groups["Title"].Value;
                int i = 0;
                var thread = new Thread(
                   () =>
                   {

                       while (title.Contains("Confirmation") && i < 4)
                       {
                           i++;
                           Thread.Sleep(7000);
                           httpRequestMessage = new HttpRequestMessage
                           {
                               Method = HttpMethod.Get,
                               RequestUri = new Uri("https://mysterious-hollows-90255.herokuapp.com/?session=" + $"{guid}")
                           };
                           response = client.SendAsync(httpRequestMessage).Result;
                           source = response.Content.ReadAsStringAsync().Result;
                           title = Regex.Match(source, @"\<title\b[^>]*\>\s*(?<Title>[\s\S]*?)\</title\>", RegexOptions.IgnoreCase).Groups["Title"].Value;

                       }
                   });
                thread.Start();
                thread.Join(30000);

                ViewBag.UserMessage = $"{title}";
                                                                              
                _mailService.SendMessage(model.Email, model.Name, model.Restaurant);
                
                ModelState.Clear();
            }          
                     
            return View("About");
        }

        public IActionResult About()
        {
            ViewBag.Title = "About us";
            return View();
        }
    }
}
