import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ToolbarService } from '../../../services/navigation/toolbar/toolbar.service';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../../models/navigation/toolbar/toolbar.model';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ia-layout-toolbar [vm]="vm"></ia-layout-toolbar>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  vm$!: Observable<ToolbarVMModel | null>;

  constructor(private _service: ToolbarService) {}

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVm$();
  }
}
