import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { FooterService } from '../../../services/footer/footer.service';

import type { FooterVMModel, FooterDataModel } from '../../../models';
import { FooterDataStub } from '../../../constants';

/**
 * Container for the `FooterComponent`
 *
 * @export
 * @class FooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-layout-footer-container',
  template: `<ia-layout-footer [vm]             = "(vm$ | async)!"
                               (copyDiscordID$) = "copyDiscordID()"
                               (copyEmailID$)   = "copyEmailID()"></ia-layout-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  #data$ = new BehaviorSubject<FooterDataModel>(FooterDataStub);

  @Input() set data(value: FooterDataModel) {
    this.#data$.next(value);
  }
  get data(): FooterDataModel {
    return this.#data$.getValue();
  }

  vm$!: Observable<FooterVMModel>;

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
    this.vm$ = this._service.watchVM$();

    this.#data$.subscribe((data) => {
      this._service.setData(data);
    });
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
