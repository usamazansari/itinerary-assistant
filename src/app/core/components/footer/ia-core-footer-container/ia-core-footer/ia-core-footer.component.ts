import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import {
  IaCoreFooterAssetsModel, IaCoreFooterFlagsModel,
  IaCoreFooterIcon
} from '@ia-core/models/footer/ia-core-footer.model';

// TODO: Hierarachical Modularization
import { AppFaIconModel } from '@shared/models/icon/app-icon.model';
import { AppImageModel } from '@shared/models/image/app-image.model';

/**
 * TODO: :monocle_face: Documentation Required
 *
 * @export
 * @class IaCoreFooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-ia-core-footer',
  templateUrl: './ia-core-footer.component.html',
  styleUrls: ['./ia-core-footer.component.scss']
})
export class IaCoreFooterComponent implements OnInit {

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {BehaviorSubject<IaCoreFooterAssetsModel>}
   * @memberof IaCoreFooterComponent
   */
  private _assets$: BehaviorSubject<IaCoreFooterAssetsModel> = new BehaviorSubject<IaCoreFooterAssetsModel>(null);

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {BehaviorSubject<IaCoreFooterFlagsModel>}
   * @memberof IaCoreFooterComponent
   */
  private _flags$: BehaviorSubject<IaCoreFooterFlagsModel> = new BehaviorSubject<IaCoreFooterFlagsModel>(null);

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  @Input()
  set assets(value: IaCoreFooterAssetsModel) { this._assets$.next(value); }
  get assets(): IaCoreFooterAssetsModel { return this._assets$.getValue(); }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  @Input()
  set flags(value: IaCoreFooterFlagsModel) { this._flags$.next(value); }
  get flags(): IaCoreFooterFlagsModel { return this._flags$.getValue(); }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @type {EventEmitter<void>}
   * @memberof IaCoreFooterComponent
   */
  @Output() copyDiscordID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * TODO: :monocle_face: Documentation Required
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
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  ngOnInit(): void { }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  copyDiscordID(): void {
    this.copyDiscordID$.emit();
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterComponent
   */
  copyEmailID(): void {
    this.copyEmailID$.emit();
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @param {IaCoreFooterIcon} icon
   * @return {*}  {icon is AppFaIconModel}
   * @memberof IaCoreFooterComponent
   */
  isIcon(icon: IaCoreFooterIcon): icon is AppFaIconModel {
    return 'name' in icon;
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @param {IaCoreFooterIcon} icon
   * @return {*}  {icon is AppImageModel}
   * @memberof IaCoreFooterComponent
   */
  isImage(icon: IaCoreFooterIcon): icon is AppImageModel {
    return 'src' in icon;
  }

}
