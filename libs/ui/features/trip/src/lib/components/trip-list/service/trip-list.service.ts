import { Injectable } from '@angular/core';
import type { HttpErrorResponse } from '@angular/common/http';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { APIResponse, TripListItem } from '../imports';
import { EndpointService } from '../imports';

import {
  TripListAssets,
  TripListData,
  TripListError,
  TripListFlags,
  _TripListAssets
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
  #assets$ = new BehaviorSubject<TripListAssets>(new TripListAssets());
  #assets = new TripListAssets();

  #data$ = new BehaviorSubject<TripListData>(new TripListData());
  data = new TripListData();

  #flags$ = new BehaviorSubject<TripListFlags>(new TripListFlags());
  #flags = new TripListFlags();

  #error$ = new BehaviorSubject<TripListError>(new TripListError());
  #error = new TripListError();

  /**
   * Creates an instance of TripListService.
   * @param {EndpointService} _endpointService
   * @memberof TripListService
   */
  constructor(private _endpointService: EndpointService) {}

  fetchAssets(): void {
    this.setAssets({ ..._TripListAssets });
  }

  private setAssets(trips: TripListAssets): void {
    this.#assets = { ...(trips ?? new TripListAssets()) };
    this.#assets$.next(this.#assets);
  }

  watchAssets$(): Observable<TripListAssets> {
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
      .get<TripListItem[]>(`http://localhost:3333/api/trip/view-trip`)
      .pipe()
      .subscribe(
        (response: APIResponse<TripListItem[]>) => {
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

  private setData(response: APIResponse<TripListItem[]>): void {
    this.data = {
      trips:
        [...(<TripListItem[]>response.data ?? [])] ?? new TripListData()
    };
    this.#data$.next(this.data);
  }

  watchData$(): Observable<TripListData> {
    return this.#data$.asObservable();
  }

  private setFlags(flags: TripListFlags): void {
    this.#flags = { ...(flags ?? new TripListFlags()) };
    this.#flags$.next(this.#flags);
  }

  resetFlags(): void {
    this.setFlags(new TripListFlags());
  }

  watchFlags$(): Observable<TripListFlags> {
    return this.#flags$.asObservable();
  }

  private handleError(error: APIResponse<unknown>): void {
    // const isServiceAvailable = this._coreService.isServiceAvailable(error);
    // if (!isServiceAvailable) {
    this.setError({
      message: this._endpointService.getServerResponseMessage(
        (<HttpErrorResponse>error.error)?.status ?? 0
      )
    });
    // } else {
    // this.setError(_TripListError);
    // }
  }
  private setError(error: TripListError): void {
    this.#error = { ...(error ?? new TripListError()) };
    this.#error$.next(this.#error);
  }

  watchError$(): Observable<TripListError> {
    return this.#error$.asObservable();
  }
}
