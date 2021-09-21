import { Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { APIResponseModel, TripListDataModel } from '../../imports/models';
import { CoreService, EndpointService } from '../../imports/services';

import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '../../models';
import {
  TripListAssetsStub,
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub,
  TripListConstants as Constants
} from '../../constants';

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
  #assets$ = new BehaviorSubject<TripListAssetsModel>(TripListAssetsStub);
  #assets: TripListAssetsModel = { ...TripListAssetsStub };

  #data$ = new BehaviorSubject<TripListDataModel>(TripListDataStub);
  #data: TripListDataModel = { ...TripListDataStub };

  #flags$ = new BehaviorSubject<TripListFlagModel>(TripListFlagStub);
  #flags = { ...TripListFlagStub };

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

  fetchAssets(): void {
    this.setAssets({
      ...Constants.assets
    });
  }

  private setAssets(trips: TripListAssetsModel): void {
    this.#assets = { ...trips ?? TripListAssetsStub };
    this.#assets$.next(this.#assets);
  }

  watchAssets$(): Observable<TripListAssetsModel> {
    return this.#assets$.asObservable();
  }

  fetchData(): void {
    this.setFlags({
      ...this.#flags,
      shell: {
        ...this.#flags.shell,
        progress: true,
        dirty: true
      }
    });
    this._endpointService
      .get<TripListDataModel>(`http://localhost:3333/api/trip/view-trip`)
      .pipe()
      .subscribe(
        (response: APIResponseModel<TripListDataModel>) => {
          this.setFlags({
            ...this.#flags,
            shell: {
              ...this.#flags.shell,
              progress: false,
              success: true
            }
          });
          this.setData(response);
        },
        (error: APIResponseModel<unknown>) => {
          this.setFlags({
            ...this.#flags,
            shell: {
              ...this.#flags.shell,
              progress: false,
              fail: true
            }
          });
          this.handleError(error);
        }
      );
  }

  private setData(response: APIResponseModel<TripListDataModel>): void {
    this.#data = { ...response.data ?? TripListDataStub };
    this.#data$.next(this.#data);
  }

  watchData$(): Observable<TripListDataModel> {
    return this.#data$.asObservable();
  }

  private setFlags(flags: TripListFlagModel): void {
    this.#flags = { ...flags ?? TripListFlagStub };
    this.#flags$.next(this.#flags);
  }

  resetFlags(): void {
    this.setFlags(TripListFlagStub);
  }

  watchFlags$(): Observable<TripListFlagModel> {
    return this.#flags$.asObservable();
  }

  private handleError(error: APIResponseModel<unknown>): void {
    const isServiceAvailable = this._coreService.checkError(<HttpErrorResponse>error.error);
    if (!isServiceAvailable) {
      this.setError({
        message: this._coreService.getServerResponseMessage(error.error?.status ?? 0)
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