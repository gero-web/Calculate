using Calculate.Model;
using Calculate.Service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Calculate.Controllers
{
    public class HomeController : Controller
    {
        private  readonly AppDbContext _context;
        private  readonly Rolling _calculate;
        public HomeController(AppDbContext context, Rolling calculate)
        {
            _context = context;
            _calculate = calculate;
        }

       
        
        [HttpGet]
        public IEnumerable<Chart> RollingRetention7day()
        {
           
            return _calculate.RollingRetention();
        }

        [HttpPost]
       
        public IActionResult Create([FromBody] IEnumerable<Model.UserActiviti> users)
        {
          

            if (ModelState.IsValid)
            {
                _context.Users.AddRange(users);
                _context.SaveChanges();
                return Ok();
            }

            return BadRequest(ModelState.Values.Select(v => v.Errors));
          
        }


    }

   

}
