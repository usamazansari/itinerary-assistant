/**
 * ### HTTP Status Codes
 *
 * An enumberble of HTTP Status codes per the W3C standards ranging from `0` to `511` containing all the valid values.
 *
 * @export
 * @enum {number}
 */
export enum HttpStatus {
  ServerDown = 0,
  Continue = 100,
  SwitchingProtocols = 101,
  Processing = 102,
  EarlyHints = 103,
  Ok = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207,
  AlreadyReported = 208,
  ImUsed = 226,
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  UseProxy = 305,
  Unused = 306,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  UriTooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  MisdirectedRequest = 421,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511
}

/**
 * ### Server Response Map
 *
 * Map the HTTP Status Code with the string message which is represented by it.
 */
export const ServerResponse: Map<HttpStatus, string> = new Map<
  HttpStatus,
  string
>([
  [HttpStatus.ServerDown, 'Server Down'],
  [HttpStatus.Continue, 'Continue'],
  [HttpStatus.SwitchingProtocols, 'Switching Protocols'],
  [HttpStatus.Processing, 'Processing'],
  [HttpStatus.EarlyHints, 'Early Hints'],
  [HttpStatus.Ok, 'Ok'],
  [HttpStatus.Created, 'Created'],
  [HttpStatus.Accepted, 'Accepted'],
  [
    HttpStatus.NonAuthoritativeInformation,
    'Non-Authoritative Information'
  ],
  [HttpStatus.NoContent, 'No Content'],
  [HttpStatus.ResetContent, 'Reset Content'],
  [HttpStatus.PartialContent, 'Partial Content'],
  [HttpStatus.MultiStatus, 'Multi Status'],
  [HttpStatus.AlreadyReported, 'Already Reported'],
  [HttpStatus.ImUsed, "I'm Used"],
  [HttpStatus.MultipleChoices, 'Multiple Choices'],
  [HttpStatus.MovedPermanently, 'Moved Permanently'],
  [HttpStatus.Found, 'Found'],
  [HttpStatus.SeeOther, 'See Other'],
  [HttpStatus.NotModified, 'Not Modified'],
  [HttpStatus.UseProxy, 'Use Proxy'],
  [HttpStatus.Unused, 'Unused'],
  [HttpStatus.TemporaryRedirect, 'Temporary Redirect'],
  [HttpStatus.PermanentRedirect, 'Permanent Redirect'],
  [HttpStatus.BadRequest, 'Bad Request'],
  [HttpStatus.Unauthorized, 'Unauthorized'],
  [HttpStatus.PaymentRequired, 'Payment Required'],
  [HttpStatus.Forbidden, 'Forbidden'],
  [HttpStatus.NotFound, 'Not Found'],
  [HttpStatus.MethodNotAllowed, 'Method Not Allowed'],
  [HttpStatus.NotAcceptable, 'Not Acceptable'],
  [
    HttpStatus.ProxyAuthenticationRequired,
    'Proxy Authentication Required'
  ],
  [HttpStatus.RequestTimeout, 'Request Timeout'],
  [HttpStatus.Conflict, 'Conflict'],
  [HttpStatus.Gone, 'Gone'],
  [HttpStatus.LengthRequired, 'Length Required'],
  [HttpStatus.PreconditionFailed, 'Precondition Failed'],
  [HttpStatus.PayloadTooLarge, 'Payload Too Large'],
  [HttpStatus.UriTooLong, 'Uri Too Long'],
  [HttpStatus.UnsupportedMediaType, 'Unsupported Media Type'],
  [HttpStatus.RangeNotSatisfiable, 'Range Not Satisfiable'],
  [HttpStatus.ExpectationFailed, 'Expectation Failed'],
  [HttpStatus.ImATeapot, "I'm A Teapot"],
  [HttpStatus.MisdirectedRequest, 'Misdirected Request'],
  [HttpStatus.UnprocessableEntity, 'Unprocessable Entity'],
  [HttpStatus.Locked, 'Locked'],
  [HttpStatus.FailedDependency, 'Failed Dependency'],
  [HttpStatus.TooEarly, 'Too Early'],
  [HttpStatus.UpgradeRequired, 'Upgrade Required'],
  [HttpStatus.PreconditionRequired, 'Precondition Required'],
  [HttpStatus.TooManyRequests, 'Too Many Requests'],
  [
    HttpStatus.RequestHeaderFieldsTooLarge,
    'Request Header Fields Too Large'
  ],
  [
    HttpStatus.UnavailableForLegalReasons,
    'Unavailable For Legal Reasons'
  ],
  [HttpStatus.InternalServerError, 'Internal Server Error'],
  [HttpStatus.NotImplemented, 'Not Implemented'],
  [HttpStatus.BadGateway, 'Bad Gateway'],
  [HttpStatus.ServiceUnavailable, 'Service Unavailable'],
  [HttpStatus.GatewayTimeout, 'Gateway Timeout'],
  [HttpStatus.HttpVersionNotSupported, 'Http Version Not Supported'],
  [HttpStatus.VariantAlsoNegotiates, 'Variant Also Negotiates'],
  [HttpStatus.InsufficientStorage, 'Insufficient Storage'],
  [HttpStatus.LoopDetected, 'Loop Detected'],
  [HttpStatus.NotExtended, 'Not Extended'],
  [
    HttpStatus.NetworkAuthenticationRequired,
    'Network Authentication Required'
  ]
]);
