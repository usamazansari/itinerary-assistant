import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ApplicationName, Author } from '../../imports/constants';
import { FooterData, LayoutData, ToolbarData } from '../../imports/models';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  #layoutData$ = new BehaviorSubject<LayoutData>(new LayoutData());
  #layoutData = new LayoutData();

  /**
   * Fetch the Layout Data
   *
   * @memberof CoreService
   */
  fetchLayoutData(): void {
    const layoutData: LayoutData = new LayoutData({
      footer: new FooterData({
        fullname: Author.FullName,
        github: Author.GitHub,
        linkedin: Author.LinkedIn,
        discord: Author.Discord,
        email: Author.Email,
        location: Author.Location
      }),
      toolbar: new ToolbarData({
        logo: ApplicationName
      })
    });
    this._setLayoutData(layoutData);
  }

  private _setLayoutData(layoutData: LayoutData): void {
    this.#layoutData = { ...layoutData ?? new LayoutData() };
    this.#layoutData$.next(this.#layoutData);
  }

  /**
   * Return the Layout Data as an `Observable`
   *
   * @return {*}  {Observable<LayoutData>}
   * @memberof CoreService
   */
  watchLayoutData$(): Observable<LayoutData> {
    return this.#layoutData$.asObservable();
  }
}
