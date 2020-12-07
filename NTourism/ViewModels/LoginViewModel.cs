using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NTourism
{
    public class LoginViewModel
    {
        [Display(Name = "UserName")]
        [Required(ErrorMessage = "please type {0}")]
        [MaxLength(25)]
        public string UserName { get; set; }
        [Display(Name = "Password")]
        [Required(ErrorMessage = "please type {0}")]
        [MaxLength(25)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Display(Name = "Remember")]
        public bool Remember { get; set; }
    }
}