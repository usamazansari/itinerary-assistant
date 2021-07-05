import { Component, OnInit } from '@angular/core';

import { FooterService } from '@core/services/footer/footer.service';

import type { Observable } from 'rxjs';
import type { FooterAssetsModel } from '@core/models/footer/footer.model';

/**
 * Container component for `FooterComponent`
 *
 * @export
 * @class FooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer-container',
  template: `<app-footer [assets]         = "assets$ | async"
                         (copyDiscordID$) = "copyDiscordID()"
                         (copyEmailID$)   = "copyEmailID()"></app-footer>`
})
export class FooterContainerComponent implements OnInit {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {Observable<FooterAssetsModel>}
   * @memberof FooterContainerComponent
   */
  assets$: Observable<FooterAssetsModel>;

  /**
   * Creates an instance of `FooterContainerComponent`.
   * 
   * @param {FooterService} _service Service associated with `FooterContainerComponent`
   * @memberof FooterContainerComponent
   */
  constructor(
    private _service: FooterService
  ) { }

  /**
   * Fetch the initial state of the component
   *
   * @memberof FooterContainerComponent
   */
  ngOnInit(): void {
    this._service.fetchAssets();

    this.assets$ = this._service.watchAssets$();
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
