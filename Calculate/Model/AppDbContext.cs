using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculate.Model
{
    public class AppDbContext : DbContext
    {
        public DbSet<UserActiviti> Users { get; set; }

        public AppDbContext(DbContextOptions options):base(options)
        {
            Database.EnsureCreated();
        }



    }
}
