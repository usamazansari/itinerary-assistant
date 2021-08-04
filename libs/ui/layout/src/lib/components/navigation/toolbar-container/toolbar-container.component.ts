import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import { ToolbarService } from '../../../services/navigation/toolbar/toolbar.service';

import type { Observable } from 'rxjs';
import type { ToolbarVMModel } from '../../../models/navigation/toolbar/toolbar.model';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `<ia-layout-toolbar *ngIf            = "vm$ | async as vm"
                                [vm]             = "vm"
                                (toggleSidenav$) = "toggleSidenav()"></ia-layout-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  vm$!: Observable<ToolbarVMModel | null>;

  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(private _service: ToolbarService) {}

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVm$();
  }

  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }
}
