import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FooterService } from '../../../services/footer/footer.service';

import type { Observable } from 'rxjs';
import type { FooterAssetsModel } from '../../../models/footer/footer.model';

@Component({
  selector: 'ia-layout-footer-container',
  template: `<ia-layout-footer *ngIf            = "assets$ | async as assets"
                               [assets]         = "assets"
                               (copyDiscordID$) = "copyDiscordID()"
                               (copyEmailID$)   = "copyEmailID()"></ia-layout-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  /**
   * Holds the Footer Assets as `Observable`.
   *
   * @type {Observable<FooterAssetsModel>}
   * @memberof FooterContainerComponent
   */
  assets$!: Observable<FooterAssetsModel>;

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
