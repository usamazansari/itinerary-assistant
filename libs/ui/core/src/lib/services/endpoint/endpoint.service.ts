import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import type { APIResponseModel } from '../../imports/models';

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
  constructor(private _http: HttpClient) { }

  /**
   * Trigger a `get` request to the server
   *
   * @template ResponseType
   * @param {string} url - server ednpoint
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   *
   * @memberof EndpointService
   */
  get<ResponseType>(url: string): Observable<APIResponseModel<ResponseType>> {
    return this._http.get<APIResponseModel<ResponseType>>(url)
      .pipe(
        delay(3000)
      );
  }

  /**
   * Trigger a `post` request to the server
   *
   * @template RequestBody Type of payload to be passed to the request
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @param {RequestBody} body request body
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  post<RequestBody, ResponseType>(url: string, body: RequestBody): Observable<APIResponseModel<ResponseType>> {
    return this._http.post<APIResponseModel<ResponseType>>(url, body)
      .pipe(
        delay(3000)
      );
  }

  /**
   * Trigger a `post` request to the server
   *
   * @template RequestBody Type of payload to be passed to the request
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @param {RequestBody} body request body
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  put<RequestBody, ResponseType>(url: string, body: RequestBody): Observable<APIResponseModel<ResponseType>> {
    return this._http.put<APIResponseModel<ResponseType>>(url, body)
      .pipe(
        delay(3000)
      );
  }

  /**
   * Trigger a `delete` request to the server
   *
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  delete<ResponseType>(url: string): Observable<APIResponseModel<ResponseType>> {
    return this._http.delete<APIResponseModel<ResponseType>>(url)
      .pipe(
        delay(3000)
      );
  }
}
