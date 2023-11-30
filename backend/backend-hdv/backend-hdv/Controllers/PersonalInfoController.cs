using backend_hdv.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend_hdv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonalInfoController : ControllerBase
    {
        private readonly AplicationDBContext _context;

        public PersonalInfoController(AplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listPersonalInfo = await _context.PersonalInfo.ToListAsync(); //petición para todos los elementos
                return Ok (listPersonalInfo);    

            } catch (Exception ex)
            {
                return BadRequest(ex.Message); 
            }
        }
    }
}
