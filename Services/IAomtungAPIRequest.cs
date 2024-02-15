using Microsoft.Extensions.Options;
using System.Text;

namespace Aomtung.Web.Services
{
    public interface IAomtungAPIRequest
    {
        Task<string> SendApi(string path, HttpMethod httpMethod, string content, string query);
    }

    public class AomtungAPIRequest : IAomtungAPIRequest
    {
        private readonly HttpClient _httpClient;
        private readonly AomtungAPISetting aomtung;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public AomtungAPIRequest(IOptions<AomtungAPISetting> aomtungSettings, IHttpContextAccessor httpContextAccessor, HttpClient httpClient)
        {
            aomtung = aomtungSettings.Value;
            _httpContextAccessor = httpContextAccessor;
            _httpClient = httpClient;
        }

        public async Task<string> SendApi(string path, HttpMethod httpMethod, string content, string query)
        {

            var uri = $"{aomtung.URL}{path}";
            var builder = new UriBuilder(uri);
            if (!string.IsNullOrWhiteSpace(query))
            {
                builder.Query = query;
            }

            var url = builder.ToString();

            var httpRequest = new HttpRequestMessage(httpMethod, url);
            if (!string.IsNullOrWhiteSpace(content))
            {
                httpRequest.Content = new StringContent(content, Encoding.UTF8, "application/json");
            }

            using (var httpResponse = await _httpClient.SendAsync(httpRequest))
            {
                var body = await httpResponse.Content.ReadAsStringAsync();

                if (!httpResponse.IsSuccessStatusCode)
                {
                    Console.WriteLine(body);
                }

                return await Task.FromResult(body);
            }
        }
    }
}
