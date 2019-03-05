using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace VueJs.PicnicTable.CSharp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        /// <summary>
        /// GET api/values
        /// </summary>
        /// <returns>Returns an enumerable of value</returns>
        [ProducesResponseType((int)System.Net.HttpStatusCode.OK)]
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value22" };
        }

        /// <summary>
        /// Get a value.
        /// </summary>
        /// <returns>Returns an enumerable of value</returns>
        /// <remarks>For example, if you do GET api/values/5, you will get the "value".</remarks>
        [ProducesResponseType((int)System.Net.HttpStatusCode.OK)]
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [ProducesResponseType((int)System.Net.HttpStatusCode.Created)]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [ProducesResponseType((int)System.Net.HttpStatusCode.NoContent)]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [ProducesResponseType((int)System.Net.HttpStatusCode.NoContent)]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
