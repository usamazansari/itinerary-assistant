import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { FooterAssets, FooterData, FooterService } from '../..';

/**
 * Container for the `FooterComponent`
 *
 * @export
 * @class FooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-layout-footer-container',
  template: `
    <ia-layout-footer
      [assets]="(assets$ | async)!"
      [data]="(data$ | async)!"
      (copyDiscordID$)="copyDiscordID()"
      (copyEmailID$)="copyEmailID()"></ia-layout-footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  #data$ = new BehaviorSubject<FooterData>(new FooterData());

  @Input()
  set data(value: FooterData) {
    this.#data$.next(value);
  }
  get data(): FooterData {
    return this.#data$.getValue();
  }

  assets$!: Observable<FooterAssets>;
  data$!: Observable<FooterData>;

  /**
   * Creates an instance of `FooterContainerComponent`.
   *
   * @param {FooterService} _service Service associated with `FooterContainerComponent`
   * @memberof FooterContainerComponent
   */
  constructor(private _service: FooterService) {}

  /**
   * Fetch the initial state of the component
   *
   * @memberof FooterContainerComponent
   */
  ngOnInit(): void {
    this._service.fetchAssets();
    this.#data$.subscribe(data => {
      this._service.setData(data);
    });

    this.assets$ = this._service.watchAssets$();
    this.data$ = this._service.watchData$();
  }

  /**
   * Trigger copying Discord ID to the clipboard
   *
   * @memberof FooterContainerComponent
   */
  copyDiscordID(): void {
    this._service.copyDiscordID();
  }

  /**
   * Trigger copying Email ID to the clipboard
   *
   * @memberof FooterContainerComponent
   */
  copyEmailID(): void {
    this._service.copyEmailID();
  }
}
