using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace NTourism.Models
{
    public class LoginUser
    {
        [Display(Name = "UserName")]
        [Required(ErrorMessage = "Please Enter {0} ")]
        [MaxLength(100)]
        public string UserName { get; set; }
        [Display(Name = "Password")]
        [Required(ErrorMessage = "Please Enter {0} ")]
        [MaxLength(100)]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Display(Name = "Remember Me")]
        public bool Remember { get; set; }
        public string SelectedRadio { get; set; }
    }

}