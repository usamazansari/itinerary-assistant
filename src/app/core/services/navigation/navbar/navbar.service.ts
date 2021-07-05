import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ICON_STUB } from '@shared/models/icon/icon.model';

import { APPLICATION_NAME } from 'src/app/app.constants';
import { RouterService } from '@core/services/common/router/router.service';
import { NavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import { DEFAULT_IA_NAVBAR_ASSETS, NavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private _assets$: BehaviorSubject<NavbarAssetsModel> = new BehaviorSubject<NavbarAssetsModel>(DEFAULT_IA_NAVBAR_ASSETS);

  private _assets: NavbarAssetsModel;

  constructor(
    private _routerService: RouterService
  ) { }

  fetchAssets(): void {
    this._assets = {
      logo: {
        label: APPLICATION_NAME,
        icon: { ...ICON_STUB },
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

  setAssets(_: NavbarAssetsModel): void {
    this._assets = { ..._ };
    this._assets$.next(this._assets);
  }

  watchAssets$(): Observable<NavbarAssetsModel> {
    return this._assets$.asObservable();
  }

  navigate(_: NavbarRouterPayloadModel): void {
    this._routerService.navigate(_);
  }
}
