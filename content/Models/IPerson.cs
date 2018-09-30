using System;

namespace VueJs.Picnic.CSharp.Models
{
  public interface IPerson {
    Role Role { get; set; }
    string FirstName { get; set; }
    string LastName { get; set; }
    string PhoneNumber { get; set; }
    IAddress Address { get; set; }
  }
}
