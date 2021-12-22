import { Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { APIResponse, TripListDataModel, TripListItemModel } from '../imports';
import { CoreService, EndpointService } from '../imports';

import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '..';
import {
  TripListAssetsStub,
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub,
  Constants
} from '..';

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
  data: TripListDataModel = { ...TripListDataStub };

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
      .get<TripListItemModel[]>(`http://localhost:3333/api/trip/view-trip`)
      .pipe()
      .subscribe(
        (response: APIResponse<TripListItemModel[]>) => {
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
        (error: APIResponse<unknown>) => {
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

  private setData(response: APIResponse<TripListItemModel[]>): void {
    this.data = {
      trips: [...response.data ?? []] ?? TripListDataStub
    };
    this.#data$.next(this.data);
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

  private handleError(error: APIResponse<unknown>): void {
    const isServiceAvailable = this._coreService.checkError(<HttpErrorResponse>error.error);
    if (!isServiceAvailable) {
      this.setError({
        message: this._coreService.getServerResponseMessage((<HttpErrorResponse>error.error)?.status ?? 0)
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
