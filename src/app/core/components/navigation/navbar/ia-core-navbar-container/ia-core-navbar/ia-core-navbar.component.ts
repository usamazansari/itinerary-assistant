import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IaNavbarRouterPayloadModel } from '@ia-core/models/navigation/ia-navigation-model';
import { IaNavbarAssetsModel, DEFAULT_IA_NAVBAR_ASSETS } from '@ia-core/models/navigation/navbar/ia-navbar.model';

@Component({
  selector: 'app-ia-core-navbar',
  templateUrl: './ia-core-navbar.component.html',
  styleUrls: ['./ia-core-navbar.component.scss']
})
export class IaCoreNavbarComponent implements OnInit {

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
