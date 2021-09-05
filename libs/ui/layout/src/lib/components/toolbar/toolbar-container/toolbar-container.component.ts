import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { ToolbarDataModel, ToolbarVMModel } from '../../../models';
import { ToolbarService } from '../../../services';
import { ToolbarDataStub } from '../../../constants';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `<ia-layout-toolbar [vm]             = "(vm$ | async)!"
                                (toggleSidenav$) = "toggleSidenav()"
                                (gotoHome$)      = "gotoHome()"></ia-layout-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  #data$ = new BehaviorSubject<ToolbarDataModel>(ToolbarDataStub);

  @Input()
  set data(value: ToolbarDataModel) { this.#data$.next(value ?? ToolbarDataStub); }
  get data(): ToolbarDataModel { return this.#data$.getValue(); }

  vm$!: Observable<ToolbarVMModel>;

  @Output() navigate$ = new EventEmitter<void>();
  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(private _service: ToolbarService) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.vm$ = this._service.watchVM$();

    this.#data$.subscribe(
      data => {
        this._service.setData(data);
      });
  }

  /**
   * Trigger the navigation by the `EventEmitter`: `navigate$`
   *
   * @memberof ToolbarContainerComponent
   */
  gotoHome(): void {
    this.navigate$.emit();
  }

  /**
   * Trigger toggle of sidenav by the `EventEmitter`: `toggleSidenav$`
   *
   * @memberof ToolbarComponent
   */
  toggleSidenav(): void {
    this.toggleSidenav$.emit();
  }
}
