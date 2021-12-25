import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import type { Icon, Image } from '../../../imports';
import { FooterAssets, FooterData, FooterIconType } from '../../..';

@Component({
  selector: 'ia-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  #assets$ = new BehaviorSubject<FooterAssets>(new FooterAssets());

  @Input()
  set assets(value: FooterAssets) { this.#assets$.next(value); }
  get assets(): FooterAssets { return this.#assets$.getValue(); }

  #data$ = new BehaviorSubject<FooterData>(new FooterData());

  @Input()
  set data(value: FooterData) { this.#data$.next(value); }
  get data(): FooterData { return this.#data$.getValue(); }

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
    return !!icon ? 'name' in icon : false;
  }

  /**
   * Determine whether the footer icon is an image
   *
   * @param {FooterIconType} icon
   * @return {*}  {icon is AppImageModel}
   * @memberof FooterComponent
   */
  isImage(icon: FooterIconType): icon is Image {
    return !!icon ? 'src' in icon : false;
  }
}
