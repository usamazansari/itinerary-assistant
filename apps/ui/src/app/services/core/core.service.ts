import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ApplicationName, Author, LayoutDataStub } from '../../imports/constants';
import type { LayoutDataModel } from '../../imports/models';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  #layoutData$ = new BehaviorSubject<LayoutDataModel>(LayoutDataStub);
  #layoutData: LayoutDataModel = { ...LayoutDataStub };

  /**
   * Fetch the Layout Data
   *
   * @memberof CoreService
   */
  fetchLayoutData(): void {
    const layoutData: LayoutDataModel = {
      footer: {
        fullname: Author.FullName,
        github: Author.GitHub,
        linkedin: Author.LinkedIn,
        discord: Author.Discord,
        email: Author.Email,
        location: Author.Location
      },
      toolbar: {
        logo: ApplicationName
      }
    };
    this._setLayoutData(layoutData);
  }

  private _setLayoutData(layoutData: LayoutDataModel): void {
    this.#layoutData = { ...layoutData ?? LayoutDataStub };
    this.#layoutData$.next(this.#layoutData);
  }

  /**
   * Return the Layout Data as an `Observable`
   *
   * @return {*}  {Observable<LayoutDataModel>}
   * @memberof CoreService
   */
  watchLayoutData$(): Observable<LayoutDataModel> {
    return this.#layoutData$.asObservable();
  }
}
