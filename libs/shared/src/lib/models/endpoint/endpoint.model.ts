import type { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import type { HttpStatus } from '../../constants';

export interface APIResponseModel<DataType> {
  status: HttpStatus;
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
