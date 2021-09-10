import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import { TripListService } from '../../../services';
import { TripListAssetsModel, TripListDataModel, TripListErrorModel } from '../../../models';

@Component({
  selector: 'ia-trip-list-container',
  template: `
    <ia-trip-list
      [assets] = "(assets$ | async)!"
      [data]   = "(data$   | async)!"
      [error]  = "(error$  | async)!"
    ></ia-trip-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListContainerComponent implements OnInit {
  assets$!: Observable<TripListAssetsModel>;
  data$!: Observable<TripListDataModel>;
  error$!: Observable<TripListErrorModel>;

  constructor(private _service: TripListService) { }

  ngOnInit(): void {
    this._service.fetchAssets();
    this._service.fetchData();
    this.assets$ = this._service.watchAssets$();
    this.data$ = this._service.watchData$();
    this.error$ = this._service.watchError$();

  }
}
