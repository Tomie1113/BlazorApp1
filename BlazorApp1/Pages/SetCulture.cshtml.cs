using Microsoft.AspNetCore.Localization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BlazorApp1.Pages
{
    public class SetCultureModel : PageModel
    {
        public IActionResult OnGet(string culture, string returnUrl = "/")
        {
            var cookieValue = CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture));
            Response.Cookies.Append(
                CookieRequestCultureProvider.DefaultCookieName,
                cookieValue,
                new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
            );

            // Если URL не локальный, пытаемся его преобразовать
            string localUrl = returnUrl;
            if (!Url.IsLocalUrl(returnUrl))
            {
                try
                {
                    var uri = new Uri(returnUrl);
                    localUrl = uri.PathAndQuery;
                }
                catch
                {
                    localUrl = "/";
                }
            }

            return LocalRedirect(localUrl);
        }
    }
}
