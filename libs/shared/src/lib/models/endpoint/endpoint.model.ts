import type { HttpErrorResponse, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';

export interface APIResponseModel<DataType> {
  status: HttpStatusCode;
  data: DataType | null;
  error: HttpErrorResponse | null;
}

export interface APIRequestModel {
  headers?: HttpHeaders;
  params?: HttpParams;
  body?: unknown;
  auth: {
    username: string;
    password: string;
  };
}
