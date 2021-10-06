using Calculate.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculate.Service
{
    public class Rolling
    {
        private readonly AppDbContext _context;
        public Rolling(AppDbContext context)
        {
            _context = context; 
        }
        public IEnumerable<Chart> RollingRetention()
        {
            var filter = _context.Users;
            var range = new List<int>() { 1, 10, 20, 30, 40, 60, 90 };
            var rollingRetention = new List<Chart>();
            var dateNow = DateTime.Now;
            foreach (var day in range)
            {
                double x = filter.Where(latActive => (dateNow - latActive.DateLastActivity).Days >= day).Count();
                double y = filter.Where(regData => (dateNow - regData.DateRegistration).Days <= day).Count();
         
                rollingRetention.Add(new Chart()
                {
                    day = day,
                    value = (x / y) * 100
                });
            }

            return rollingRetention;
        }
    }
}
