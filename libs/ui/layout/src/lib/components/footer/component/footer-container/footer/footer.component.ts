import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { Icon, Image } from '../../../imports';
import type { FooterAssetsModel, FooterDataModel, FooterIconType } from '../../..';
import { FooterAssetsStub, FooterDataStub } from '../../..';

@Component({
  selector: 'ia-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  #assets$ = new BehaviorSubject<FooterAssetsModel>(FooterAssetsStub);

  @Input()
  set assets(value: FooterAssetsModel) { this.#assets$.next(value); }
  get assets(): FooterAssetsModel { return this.#assets$.getValue(); }

  #data$ = new BehaviorSubject<FooterDataModel>(FooterDataStub);

  @Input()
  set data(value: FooterDataModel) { this.#data$.next(value); }
  get data(): FooterDataModel { return this.#data$.getValue(); }

  @Output() copyDiscordID$: EventEmitter<void> = new EventEmitter<void>();
  @Output() copyEmailID$: EventEmitter<void> = new EventEmitter<void>();

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
  isIcon(icon: FooterIconType): icon is Icon {
    return 'name' in icon;
  }

  /**
   * Determine whether the footer icon is an image
   *
   * @param {FooterIconType} icon
   * @return {*}  {icon is AppImageModel}
   * @memberof FooterComponent
   */
  isImage(icon: FooterIconType): icon is Image {
    return 'src' in icon;
  }
}
