import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import type { HomeAssets } from '../..';
import { HomeService } from '../..';


@Component({
  selector: 'ia-trip-home-container',
  template: `
    <ia-trip-home
      [assets]        = "(assets$ | async)!"
      (gotoViewTrip$) = "gotoViewTrip()"
    ></ia-trip-home>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  assets$!: Observable<HomeAssets>;

  constructor(private _service: HomeService) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }

  gotoViewTrip(): void {
    this._service.gotoViewTrip();
  }
}
