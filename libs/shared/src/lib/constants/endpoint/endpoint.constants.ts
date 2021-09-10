import { HttpStatusCode } from '@angular/common/http';

export const ServerResponse: Map<HttpStatusCode, string> = new Map<HttpStatusCode, string>([
  [0, 'Server Down']
]);
