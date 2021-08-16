import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject, forkJoin } from 'rxjs';

import type { ToolbarDataModel, ToolbarVMModel } from '../../../models';
import { ToolbarService } from '../../../services';
import { ToolbarDataStub } from '../../../constants';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `<ia-layout-toolbar *ngIf            = "vm$ | async as vm"
                                [vm]             = "vm"
                                (toggleSidenav$) = "toggleSidenav()"
                                (gotoHome$)      = "gotoHome()"></ia-layout-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  #data$ = new BehaviorSubject<ToolbarDataModel>(ToolbarDataStub);

  @Input() set data(value: ToolbarDataModel) {
    this.#data$.next(value);
  }
  get data(): ToolbarDataModel {
    return this.#data$.getValue();
  }

  vm$!: Observable<ToolbarVMModel>;

  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(private _service: ToolbarService) {}

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVM$();

    // TODO: Make this work
    // forkJoin([this.#data$, this.vm$]).subscribe(([data, vm]) => {
    //   this._service.setVM({ ...vm, data: { ...vm.data, ...data } });
    // });
  }

  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }

  gotoHome(): void {
    this._service.gotoHome();
  }
}
