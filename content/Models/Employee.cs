using System;

namespace VueJs.DotCore.Models
{
  public class Employee: IPerson {
    public int Id { get; set; }
    public Role Role { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
    public IAddress Address { get; set; }
  }
}