using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyProjectApi.Dtos;

namespace MyProjectApi.Controllers
{
    [Route("api/authorize")]
    [ApiController]
    public class AuthorizeController : ControllerBase
    {
        [HttpPost("token")]
        public TokenResponse Token([FromBody]LoginRequest loginDto)
        {
            if (!string.IsNullOrWhiteSpace(loginDto.UserName) && !string.IsNullOrWhiteSpace(loginDto.Password))
            {
                var data = $"{loginDto.UserName}-{loginDto.Password}";
                var bytes = Encoding.UTF8.GetBytes(data);
                return new TokenResponse { AccessToken = Convert.ToBase64String(bytes), ExpiresIn = 7200 };
            }
            return null;
        }
    }
}