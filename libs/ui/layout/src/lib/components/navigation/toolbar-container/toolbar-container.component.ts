import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ToolbarService } from '../../../services/navigation/toolbar/toolbar.service';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../../models/navigation/toolbar/toolbar.model';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `<ia-layout-toolbar [vm]="vm$ | async"></ia-layout-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  vm$!: Observable<ToolbarVMModel>;

  constructor(private _service: ToolbarService) {}

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVm$();
  }
}
