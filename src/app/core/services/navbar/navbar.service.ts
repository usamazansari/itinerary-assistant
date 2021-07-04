import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { APPLICATION_NAME } from '@core/constants/app.constants';

import { CoreRouterService } from '@core/services/common/router/core-router.service';
import { DEFAULT_IA_ICON } from '@core/models/core.model';

import { IaNavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import { DEFAULT_IA_NAVBAR_ASSETS, IaNavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _assets$: BehaviorSubject<IaNavbarAssetsModel> = new BehaviorSubject<IaNavbarAssetsModel>(DEFAULT_IA_NAVBAR_ASSETS);

  private _assets: IaNavbarAssetsModel;

  constructor(
    private _routerService: CoreRouterService
  ) { }

  fetchAssets(): void {
    this._assets = {
      logo: {
        label: APPLICATION_NAME,
        icon: { ...DEFAULT_IA_ICON },
        routes: [],
        children: []
      },
      trigger: {
        label: null,
        icon: { name: 'bars', style: 'fas' },
        children: [],
        routes: []
      }
    };
    this.setAssets(this._assets);
  }

  setAssets(_: IaNavbarAssetsModel): void {
    this._assets = { ..._ };
    this._assets$.next(this._assets);
  }

  watchAssets$(): Observable<IaNavbarAssetsModel> {
    return this._assets$.asObservable();
  }

  navigate(_: IaNavbarRouterPayloadModel): void {
    this._routerService.navigate(_);
  }
}
