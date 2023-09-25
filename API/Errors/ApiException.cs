namespace API.Errors
{
    public class ApiException
    {
        public ApiException(int code, string msg, string details)
        {
            StatusCode = code;
            Message = msg;
            Details = details;
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}