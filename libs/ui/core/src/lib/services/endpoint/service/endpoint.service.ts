import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import type { Observable } from 'rxjs';

import type { APIResponse, HttpStatus } from '../imports';
import { getServerResponseMessage } from '../imports';

/**
 * Endpoint Service for hitting external API calls.
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
   * ### Trigger a `get` request to the server
   *
   * @template ResponseType
   * @param {string} url - server endpoint
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   *
   * @memberof EndpointService
   */
  get<ResponseType>(
    url: string
  ): Observable<APIResponse<ResponseType>> {
    return this._http.get<APIResponse<ResponseType>>(url);
  }

  /**
   * ### Trigger a `post` request to the server
   *
   * @template RequestBody Type of payload to be passed to the request
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @param {RequestBody} body request body
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  post<RequestBody, ResponseType>(
    url: string,
    body: RequestBody
  ): Observable<APIResponse<ResponseType>> {
    return this._http.post<APIResponse<ResponseType>>(url, body);
  }

  /**
   * ### Trigger a `post` request to the server
   *
   * @template RequestBody Type of payload to be passed to the request
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @param {RequestBody} body request body
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  put<RequestBody, ResponseType>(
    url: string,
    body: RequestBody
  ): Observable<APIResponse<ResponseType>> {
    return this._http.put<APIResponse<ResponseType>>(url, body);
  }

  /**
   * ### Trigger a `delete` request to the server
   *
   * @template ResponseType Type of expected response
   * @param {string} url server endpoint
   * @return {*}  {Observable<APIResponseModel<ResponseType>>}
   *   Observable of response in a custom wrapper of type `APIResponseModel`
   * @memberof EndpointService
   */
  delete<ResponseType>(
    url: string
  ): Observable<APIResponse<ResponseType>> {
    return this._http.delete<APIResponse<ResponseType>>(url);
  }

  /**
   * ### Return the message corresponding to the given status code.
   *
   * @param {HttpStatus} status - The status code.
   * @return {*}  {string} - The message corresponding to the given status code.
   * @memberof CoreService
   */
  getServerResponseMessage(status: HttpStatus): string {
    return getServerResponseMessage(status);
  }
}
