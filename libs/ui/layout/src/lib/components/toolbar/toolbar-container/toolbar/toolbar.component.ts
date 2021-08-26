import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { ToolbarVMModel } from '../../../../models';
import { ToolbarVMStub } from '../../../../constants';

@Component({
  selector: 'ia-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  #vm$ = new BehaviorSubject<ToolbarVMModel>(ToolbarVMStub);

  @Input()
  set vm(value: ToolbarVMModel) {
    this.#vm$.next(value ?? ToolbarVMStub);
  }
  get vm(): ToolbarVMModel {
    return this.#vm$.getValue();
  }

  @Output() gotoHome$ = new EventEmitter<void>();
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
