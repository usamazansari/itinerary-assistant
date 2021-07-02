import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { FooterService } from '@core/services/footer/footer.service';
import { FooterAssetsModel, FooterFlagsModel } from '@core/models/footer/footer.model';

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class IaCoreFooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer-container',
  template: `<app-footer [assets]         = "assets$ | async"
                         [flags]          = "flags$  | async"
                         (copyDiscordID$) = "copyDiscordID()"
                         (copyEmailID$)   = "copyEmailID()"></app-footer>`
})
export class FooterContainerComponent implements OnInit {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {Observable<FooterAssetsModel>}
   * @memberof IaCoreFooterContainerComponent
   */
  assets$: Observable<FooterAssetsModel>;

  flags$: Observable<FooterFlagsModel>;

  /**
   * Creates an instance of IaCoreFooterContainerComponent.
   * 
   * @param {FooterService} _service Service associated with `IaCoreFooterContainerComponent`
   * @memberof IaCoreFooterContainerComponent
   */
  constructor(private _service: FooterService) { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterContainerComponent
   */
  ngOnInit(): void {
    this._service.fetchAssets();
    this._service.resetFlags();

    this.assets$ = this._service.watchAssets$();
    this.flags$ = this._service.watchFlags$();
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterContainerComponent
   */
  copyDiscordID(): void {
    this._service.copyDiscordID();
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterContainerComponent
   */
  copyEmailID(): void {
    this._service.copyEmailID();
  }

}
