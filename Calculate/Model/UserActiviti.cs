using Calculate.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Calculate.Model
{
    [DateValidate]
    public class UserActiviti
    {
        public int Id { get; set; }

        [Required()]
        [DisplayFormat(DataFormatString = "{{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]

        public DateTime DateRegistration { get; set; }

        [Required()]
        [DisplayFormat(DataFormatString = "{{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]
        public DateTime DateLastActivity { get; set; }
    }
}
