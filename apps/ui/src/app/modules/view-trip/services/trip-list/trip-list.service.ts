import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { APIResponseModel, TripListItemModel } from '../../imports/models';
import { CoreService, EndpointService } from '../../imports/services';

import type { TripListErrorModel } from '../../models';
import { TripListErrorStub } from '../../constants';
import { HttpErrorResponse } from '@angular/common/http';

// TODO: Refactor to make it free of loose strings
/**
 * TODO: Refactor to make it free of loose strings
 *
 * @export
 * @class TripListService
 */
@Injectable({
  providedIn: 'root'
})
export class TripListService {
  #tripList$ = new BehaviorSubject<TripListItemModel[]>([]);
  #tripList: TripListItemModel[] = [];

  #error$ = new BehaviorSubject<TripListErrorModel>(TripListErrorStub);
  #error: TripListErrorModel = { ...TripListErrorStub };

  /**
   * Creates an instance of TripListService.
   * @param {EndpointService} _endpointService
   * @memberof TripListService
   */
  constructor(
    private _endpointService: EndpointService,
    private _coreService: CoreService
  ) { }

  fetchTripList(): void {
    this._endpointService
      .get<TripListItemModel[]>(`http://localhost:3333/api/trip/view-trip`)
      .pipe()
      .subscribe(
        (response: APIResponseModel<TripListItemModel[]>) => {
          this._setTrips(response);
        },
        (error: APIResponseModel<unknown>) => {
          this.handleError(error);
        }
      );
  }

  private _setTrips(response: APIResponseModel<TripListItemModel[]>): void {
    this.#tripList = [...response.data ?? []];
    this.#tripList$.next(this.#tripList);
  }

  watchTripList$(): Observable<TripListItemModel[]> {
    return this.#tripList$.asObservable();
  }

  private handleError(error: APIResponseModel<unknown>): void {
    const isServiceAvailable = this._coreService.checkError(<HttpErrorResponse>error.error);
    if (!isServiceAvailable) {
      this.setError({
        message: this._coreService.getConstant(error.error?.status ?? 0)
      });
    } else {
      this.setError({
        message: 'Generic Error'
      });
    }
  }
  private setError(error: TripListErrorModel): void {
    this.#error = { ...error ?? TripListErrorStub };
    this.#error$.next(this.#error);
  }

  watchError$(): Observable<TripListErrorModel> {
    return this.#error$.asObservable();
  }
}
