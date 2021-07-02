import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import {
  FooterAssetsModel, FooterFlagsModel,
  FooterIcon
} from '@core/models/footer/footer.model';

// TODO: Hierarachical Modularization
import { AppFaIconModel } from '@shared/models/icon/app-icon.model';
import { AppImageModel } from '@shared/models/image/app-image.model';

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class IaCoreFooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<FooterAssetsModel>}
   * @memberof IaCoreFooterComponent
   */
  private _assets$: BehaviorSubject<FooterAssetsModel> = new BehaviorSubject<FooterAssetsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<FooterFlagsModel>}
   * @memberof IaCoreFooterComponent
   */
  private _flags$: BehaviorSubject<FooterFlagsModel> = new BehaviorSubject<FooterFlagsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  @Input()
  set assets(value: FooterAssetsModel) { this._assets$.next(value); }
  get assets(): FooterAssetsModel { return this._assets$.getValue(); }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  @Input()
  set flags(value: FooterFlagsModel) { this._flags$.next(value); }
  get flags(): FooterFlagsModel { return this._flags$.getValue(); }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {EventEmitter<void>}
   * @memberof IaCoreFooterComponent
   */
  @Output() copyDiscordID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * TODO: 🧐 Documentation Required
   *
   * @type {EventEmitter<void>}
   * @memberof IaCoreFooterComponent
   */
  @Output() copyEmailID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Creates an instance of IaCoreFooterComponent.
   * 
   * @memberof IaCoreFooterComponent
   */
  constructor() { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  ngOnInit(): void { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  copyDiscordID(): void {
    this.copyDiscordID$.emit();
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  copyEmailID(): void {
    this.copyEmailID$.emit();
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @param {FooterIcon} icon
   * @return {*}  {icon is AppFaIconModel}
   * @memberof IaCoreFooterComponent
   */
  isIcon(icon: FooterIcon): icon is AppFaIconModel {
    return 'name' in icon;
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @param {FooterIcon} icon
   * @return {*}  {icon is AppImageModel}
   * @memberof IaCoreFooterComponent
   */
  isImage(icon: FooterIcon): icon is AppImageModel {
    return 'src' in icon;
  }

}
