import { Component, OnInit } from '@angular/core';

import { HomeService } from '../../../services';
import { HomeVMModel } from '../../../models';

import type { Observable } from 'rxjs';

@Component({
  selector: 'ia-home-container',
  template: `<ia-home *ngIf = "vm$ | async as vm"
                      [vm]  = "vm"></ia-home>`
})
export class HomeContainerComponent implements OnInit {
  vm$!: Observable<HomeVMModel>;

  constructor(private _service: HomeService) {}

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVm$();
  }
}
