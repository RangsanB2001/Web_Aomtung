namespace Aomtung.Web.Models
{
    public class AuthenModels
    {
        public string Phone { get; set; } = string.Empty;
    }

    public class MassageAPI
    {
        public string message { get; set; } = string.Empty;
        public bool success { get; set; }
        public int status { get; set; }
        public DataApi data { get; set; } = new DataApi();
    }

    public class DataApi
    {
        public string sendTO { get; set; } = string.Empty;
        public string refCode { get; set; } = string.Empty;
        public string codeotp { get; set; } = string.Empty;
        public long expired { get; set; }
        public bool validateLegthPhone { get; set; }
        public bool is_Duplicate { get; set; }
    }

    public class DataOTP
    {
        public string SendTO { get; set; } = string.Empty;
        public string RefCode { get; set; } = string.Empty;
        public string Codeotp { get; set; } = string.Empty;
        public long Expired { get; set; }
        public bool ValidateLegthPhone { get; set; }
        public bool Is_Duplicate { get; set; }
    }
}
