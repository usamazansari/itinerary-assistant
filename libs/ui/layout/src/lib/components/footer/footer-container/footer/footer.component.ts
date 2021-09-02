import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { IconModel, ImageModel } from '../../../../imports/models';

import type { FooterVMModel, FooterIconType } from '../../../../models';
import { FooterVMStub } from '../../../../constants';

@Component({
  selector: 'ia-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  #vm$ = new BehaviorSubject<FooterVMModel>(FooterVMStub);

  @Input()
  set vm(value: FooterVMModel) { this.#vm$.next(value ?? FooterVMStub); }
  get vm(): FooterVMModel { return this.#vm$.getValue(); }

  @Output() copyDiscordID$: EventEmitter<void> = new EventEmitter<void>();
  @Output() copyEmailID$: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Creates an instance of FooterComponent.
   *
   * @memberof FooterComponent
   */
  constructor() { }

  /**
   * On Initialization of `FooterComponent`
   *
   * @memberof FooterComponent
   */
  ngOnInit(): void { }

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
