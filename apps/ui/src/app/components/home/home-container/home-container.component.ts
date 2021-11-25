import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import { HomeAssetsModel } from '../../../models';
import { HomeService } from '../../../services';


@Component({
  selector: 'ia-home-container',
  template: `<ia-home [assets]        = "(assets$ | async)!"
                      (gotoViewTrip$) = "gotoViewTrip()"></ia-home>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeContainerComponent implements OnInit {
  assets$!: Observable<HomeAssetsModel>;

  constructor(private _service: HomeService) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this.assets$ = this._service.watchAssets$();
  }

  gotoViewTrip(): void {
    this._service.gotoViewTrip();
  }
}
