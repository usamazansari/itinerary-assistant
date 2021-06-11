import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreFooterService } from '@ia-core/services/footer/ia-core-footer/ia-core-footer.service';
import { IaCoreFooterAssetsModel, IaCoreFooterFlagsModel } from '@ia-core/models/footer/ia-core-footer.model';

/**
 * TODO: :monocle_face: Documentation Required
 *
 * @export
 * @class IaCoreFooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-ia-core-footer-container',
  template: `<app-ia-core-footer [assets]         = "assets$ | async"
                                 [flags]          = "flags$  | async"
                                 (copyDiscordID$) = "copyDiscordID()"
                                 (copyEmailID$)   = "copyEmailID()"></app-ia-core-footer>`
})
export class IaCoreFooterContainerComponent implements OnInit {

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {Observable<IaCoreFooterAssetsModel>}
   * @memberof IaCoreFooterContainerComponent
   */
  assets$: Observable<IaCoreFooterAssetsModel>;

  flags$: Observable<IaCoreFooterFlagsModel>;

  /**
   * Creates an instance of IaCoreFooterContainerComponent.
   * 
   * @param {IaCoreFooterService} _service Service associated with `IaCoreFooterContainerComponent`
   * @memberof IaCoreFooterContainerComponent
   */
  constructor(private _service: IaCoreFooterService) { }

  /**
   * TODO: :monocle_face: Documentation Required
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
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterContainerComponent
   */
  copyDiscordID(): void {
    this._service.copyDiscordID();
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterContainerComponent
   */
  copyEmailID(): void {
    this._service.copyEmailID();
  }

}
