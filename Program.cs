using Aomtung.Web.Services;

namespace Aomtung.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddHttpClient();
            builder.Services.AddHttpContextAccessor();
            builder.Services.AddControllersWithViews();
            builder.Services.AddScoped<IAomtungAPIRequest, AomtungAPIRequest>();
            builder.Services.Configure<AomtungAPISetting>(builder.Configuration.GetSection("AomtungAPI"));

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            /*    app.MapControllerRoute(
                 name: "default",
                 pattern: "{controller=Home}/{action=ConfirmOTP}/{id?}");*/

            app.Run();
        }
    }
}
