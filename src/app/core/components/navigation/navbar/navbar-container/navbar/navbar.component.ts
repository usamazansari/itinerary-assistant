import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { DEFAULT_IA_NAVBAR_ASSETS } from '@core/models/navigation/navbar/navbar.model';

import type { NavbarRouterPayloadModel } from '@core/models/navigation/navigation-model';
import type { NavbarAssetsModel } from '@core/models/navigation/navbar/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _assets$ = new BehaviorSubject<NavbarAssetsModel>(DEFAULT_IA_NAVBAR_ASSETS);

  @Input()
  set assets(value: NavbarAssetsModel) { this._assets$.next(value); }
  get assets(): NavbarAssetsModel { return this._assets$.getValue(); }

  @Output() navigate$ = new EventEmitter<NavbarRouterPayloadModel>();
  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  navigate(_: string[]): void {
    const __: NavbarRouterPayloadModel = { routes: [..._], extras: {} };
    this.navigate$.emit(__);
  }

  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }

}
