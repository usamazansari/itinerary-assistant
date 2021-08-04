import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { ToolbarVMModel, ToolbarVMStub } from '../../../../models';

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
  private _vm$ = new BehaviorSubject<ToolbarVMModel>(ToolbarVMStub);

  /**
   * Assets used by `ToolbarComponent`
   *
   * @memberof ToolbarComponent
   */
  @Input()
  set vm(value: ToolbarVMModel) {
    this._vm$.next(value ?? ToolbarVMStub);
  }
  get vm(): ToolbarVMModel {
    return this._vm$.getValue();
  }

  /**
   * `EventEmitter` to navigate to the home page
   *
   * @memberof ToolbarComponent
   */
  @Output() gotoHome$ = new EventEmitter<void>();

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
   * @memberof ToolbarComponent
   */
  gotoHome(): void {
    this.gotoHome$.emit();
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
