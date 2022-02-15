import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ToolbarAssets, ToolbarData } from '../../..';

@Component({
  selector: 'ia-layout-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  #assets$ = new BehaviorSubject<ToolbarAssets>(new ToolbarAssets());

  @Input()
  set assets(value: ToolbarAssets) {
    this.#assets$.next(value);
  }
  get assets(): ToolbarAssets {
    return this.#assets$.getValue();
  }

  #data$ = new BehaviorSubject<ToolbarData>(new ToolbarData());
  @Input()
  set data(value: ToolbarData) {
    this.#data$.next(value);
  }
  get data(): ToolbarData {
    return this.#data$.getValue();
  }

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
