import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IaNavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import { IaNavbarAssetsModel, DEFAULT_IA_NAVBAR_ASSETS } from '@core/models/navigation/navbar/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _assets$ = new BehaviorSubject<IaNavbarAssetsModel>(DEFAULT_IA_NAVBAR_ASSETS);

  @Input()
  set assets(value: IaNavbarAssetsModel) { this._assets$.next(value); }
  get assets(): IaNavbarAssetsModel { return this._assets$.getValue(); }

  @Output() navigate$ = new EventEmitter<IaNavbarRouterPayloadModel>();
  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  navigate(_: string[]): void {
    const __: IaNavbarRouterPayloadModel = { routes: [..._], extras: {} };
    this.navigate$.emit(__);
  }

  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }

}
