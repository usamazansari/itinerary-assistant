import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import {
  ToolbarVMModel,
  TOOLBAR_VM_STUB
} from '../../../../models/navigation/toolbar/toolbar.model';

@Component({
  selector: 'ia-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  /**
   * `BehaviorSubject` to hold `asset`s of Toolbar
   *
   * @private
   * @memberof ToolbarComponent
   */
  private _vm$ = new BehaviorSubject<ToolbarVMModel>(TOOLBAR_VM_STUB);

  /**
   * Assets used by `ToolbarComponent`
   *
   * @memberof ToolbarComponent
   */
  @Input()
  set vm(value: ToolbarVMModel) {
    this._vm$.next(value);
  }
  get vm(): ToolbarVMModel {
    return this._vm$.getValue();
  }

  /**
   * `EventEmitter` to navigate through the application
   *
   * @memberof ToolbarComponent
   */
  // @Output() navigate$ = new EventEmitter<NavigationRouterPayloadModel>();

  /**
   * `EventEmitter` to notify the `app-component` about sidenav toggle
   *
   * @memberof ToolbarComponent
   */
  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  /**
   * Trigger the navigation by the `EventEmitter`: `navigate$`
   *
   * @param {string[]} routes
   * @memberof ToolbarComponent
   */
  navigate(routes: string[]): void {
    // const payload: ToolbarRouterPayloadModel = { routes: [...routes], extras: {} };
    // this.navigate$.emit(payload);
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
