using System;

namespace VueJs.DotCore.Models
{
  public interface IPerson {
    string FirstName { get; set; }
    string LastName { get; set; }
    string PhoneNumber { get; set; }
    IAddress Address { get; set; }
  }
}
