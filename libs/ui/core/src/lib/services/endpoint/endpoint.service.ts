import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { delay } from 'rxjs/operators';

import type { Observable } from 'rxjs';

// TODO: 🧐 Documentation Required
// TODO: Implement other methods - post, put, delete
// TODO: Implement Centralized models for request and response
/**
 *
 *
 * @export
 * @class EndpointService
 */
@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  /**
   * Creates an instance of EndpointService.
   * @param {HttpClient} _http
   * @memberof EndpointService
   */
  constructor(private _http: HttpClient) {}

  /**
   *
   *
   * @template ResponseType
   * @param {string} url
   * @return {*}  {Observable<ResponseType>}
   * @memberof EndpointService
   */
  get<ResponseType>(url: string): Observable<ResponseType> {
    return this._http.get<ResponseType>(url).pipe(delay(3000));
  }
}
