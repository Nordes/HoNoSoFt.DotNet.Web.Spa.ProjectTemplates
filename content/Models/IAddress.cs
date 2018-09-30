using System;

namespace VueJs.DotCore.Models
{
  public interface IAddress {
    string Name { get; set; }
    string Address { get; set; }
    string PostalCode { get; set; }
    string Country { get; set; }
  }
}