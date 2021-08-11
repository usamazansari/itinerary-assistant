import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FooterService } from '../../../services/footer/footer.service';

import type { Observable } from 'rxjs';
import type { FooterVMModel } from '../../../models';

// TODO: Implement use of data as from toolbar

/**
 * Container for the `FooterComponent`
 *
 * @export
 * @class FooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-layout-footer-container',
  template: `<ia-layout-footer *ngIf            = "vm$ | async as vm"
                               [vm]             = "vm"
                               (copyDiscordID$) = "copyDiscordID()"
                               (copyEmailID$)   = "copyEmailID()"></ia-layout-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  /**
   * Holds the Footer VM as `Observable`.
   *
   * @type {Observable<FooterVMModel>}
   * @memberof FooterContainerComponent
   */
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
