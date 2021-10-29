using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DutchTreat.ViewModels
{
  public class ReserveViewModel
  {
        [Required]
        
        public string City { get; set; }

        [Required]
        public string Restaurant { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Surname { get; set; }

        [Required]
        public string Date { get; set; }

        [Required]
        [Timestamp]
        public string Time { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string Phone { get; set; }

    }
}
