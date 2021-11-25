import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { ToolbarAssetsModel, ToolbarDataModel } from '../../..';
import { ToolbarAssetsStub, ToolbarDataStub } from '../../..';

@Component({
  selector: 'ia-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  #assets$ = new BehaviorSubject<ToolbarAssetsModel>(ToolbarAssetsStub);

  @Input()
  set assets(value: ToolbarAssetsModel) { this.#assets$.next(value); }
  get assets(): ToolbarAssetsModel { return this.#assets$.getValue(); }

  #data$ = new BehaviorSubject<ToolbarDataModel>(ToolbarDataStub);
  @Input()
  set data(value: ToolbarDataModel) { this.#data$.next(value); }
  get data(): ToolbarDataModel { return this.#data$.getValue(); }

  @Output() gotoHome$ = new EventEmitter<void>();
  @Output() toggleSidenav$ = new EventEmitter<void>();

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
