import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { IconModel, ImageModel } from '../../../../imports/models';

import type { FooterVMModel, FooterIconType } from '../../../../models';
import { FooterVMStub } from '../../../../models';

@Component({
  selector: 'ia-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /**
   * `BehaviorSubject` to hold `asset`s of footer
   *
   * @private
   * @type {BehaviorSubject<FooterVMModel>}
   * @memberof FooterComponent
   */
  #vm$: BehaviorSubject<FooterVMModel> = new BehaviorSubject<FooterVMModel>(
    FooterVMStub
  );

  /**
   * Assets used by `FooterComponent`
   *
   * Refer documentation of `FooterVMModel` for details
   *
   * @memberof FooterComponent
   */
  @Input()
  set vm(value: FooterVMModel) {
    this.#vm$.next(value);
  }
  get vm(): FooterVMModel {
    return this.#vm$.getValue();
  }

  /**
   * `EventEmitter` to signal copying the Discord ID `usama251993#5438` to the clipboard
   *
   * @type {EventEmitter<void>}
   * @memberof FooterComponent
   */
  @Output() copyDiscordID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * `EventEmitter` to signal copying the Email ID `usama251993@gmail.com` to the clipboard
   *
   * @type {EventEmitter<void>}
   * @memberof FooterComponent
   */
  @Output() copyEmailID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Creates an instance of FooterComponent.
   *
   * @memberof FooterComponent
   */
  constructor() {}

  /**
   * On Initialization of `FooterComponent`
   *
   * @memberof FooterComponent
   */
  ngOnInit(): void {}

  /**
   * Method to emit the `EventEmitter`: `copyDiscordID$`
   *
   * @memberof FooterComponent
   */
  copyDiscordID(): void {
    this.copyDiscordID$.emit();
  }

  /**
   * Method to emit the `EventEmitter`: `copyEmailID$`
   *
   * @memberof FooterComponent
   */
  copyEmailID(): void {
    this.copyEmailID$.emit();
  }

  /**
   * Determine whether the footer icon is a fortawesome icon
   *
   * @param {FooterIconType} icon
   * @return {*}  {icon is AppFaIconModel}
   * @memberof FooterComponent
   */
  isIcon(icon: FooterIconType): icon is IconModel {
    return 'name' in icon;
  }

  /**
   * Determine whether the footer icon is an image
   *
   * @param {FooterIconType} icon
   * @return {*}  {icon is AppImageModel}
   * @memberof FooterComponent
   */
  isImage(icon: FooterIconType): icon is ImageModel {
    return 'src' in icon;
  }
}
