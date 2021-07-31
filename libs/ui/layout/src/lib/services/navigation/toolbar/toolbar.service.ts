import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ICON_STUB } from '../../../models';

import { TOOLBAR_VM_STUB } from '../../../models/navigation/toolbar/toolbar.model';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../../models/navigation/toolbar/toolbar.model';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private _vm$ = new BehaviorSubject<ToolbarVMModel>(TOOLBAR_VM_STUB);

  private _vm!: ToolbarVMModel;

  constructor() {} // private _routerService: RouterService

  fetchAssets(): void {
    this._vm = {
      assets: {
        logo: {
          // label: APPLICATION_NAME,
          label: 'IA',
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
      }
    };
    this.setVm(this._vm);
  }

  setVm(_: ToolbarVMModel): void {
    this._vm = { ..._ };
    this._vm$.next(this._vm);
  }

  watchVm$(): Observable<ToolbarVMModel> {
    return this._vm$.asObservable();
  }
}
