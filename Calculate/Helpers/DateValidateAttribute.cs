using Calculate.Model;
using System;
using System.ComponentModel.DataAnnotations;


namespace Calculate.Helpers
{
    public class DateValidateAttribute: ValidationAttribute
    {
        public override bool IsValid(object value)
        {
             var userActiviti =   value as UserActiviti;
            if(value != null)
            {

                if (userActiviti.DateRegistration.CompareTo(userActiviti.DateLastActivity) == 1
                                     || userActiviti.DateRegistration.CompareTo(DateTime.Now) == 1
                                     || userActiviti.DateLastActivity.CompareTo(DateTime.Now) == 1
                                     || userActiviti.DateLastActivity.CompareTo(userActiviti.DateRegistration) == -1)
                {
                    this.ErrorMessage = "Не правильная дата!";
                    return false;
                }
            }
            return true;
        }
    }
}
