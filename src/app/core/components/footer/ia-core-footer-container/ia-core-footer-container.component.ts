import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreFooterAssetsModel } from '@ia-core/models/footer/ia-core-footer.model';
import { IaCoreFooterService } from '@ia-core/services/footer/ia-core-footer/ia-core-footer.service';

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
                                 (copyDiscordID$) = "copyDiscordID"
                                 (copyEmailID$)   = "copyEmailID"></app-ia-core-footer>`,
  providers: [IaCoreFooterService]
})
export class IaCoreFooterContainerComponent implements OnInit {

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {Observable<IaCoreFooterAssetsModel>}
   * @memberof IaCoreFooterContainerComponent
   */
  assets$: Observable<IaCoreFooterAssetsModel>;

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

    this.assets$ = this._service.watchAssets$();
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
