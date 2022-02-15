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

import { ToolbarAssets, ToolbarData, ToolbarService } from '../..';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `
    <ia-layout-toolbar
      [assets]="(assets$ | async)!"
      [data]="(data$ | async)!"
      (toggleSidenav$)="toggleSidenav()"
      (gotoHome$)="gotoHome()"></ia-layout-toolbar>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  #data$ = new BehaviorSubject<ToolbarData>(new ToolbarData());

  @Input()
  set data(value: ToolbarData) {
    this.#data$.next(value);
  }
  get data(): ToolbarData {
    return this.#data$.getValue();
  }

  assets$!: Observable<ToolbarAssets>;
  data$!: Observable<ToolbarData>;

  @Output() navigate$ = new EventEmitter<void>();
  @Output() toggleSidenav$ = new EventEmitter<void>();

  constructor(private _service: ToolbarService) {}

  ngOnInit(): void {
    this._service.fetchAssets();

    this.#data$.subscribe(data => {
      this._service.setData(data);
    });
    this.assets$ = this._service.watchAssets$();
    this.data$ = this._service.watchData$();
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
