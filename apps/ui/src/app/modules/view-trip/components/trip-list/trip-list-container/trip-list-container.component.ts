import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import type { TripListDataModel } from '../../../imports/models';

import { TripListService } from '../../../services';
import type {
  TripListAssetsModel,
  TripListErrorModel,
  TripListFlagModel
} from '../../../models';

@Component({
  selector: 'ia-trip-list-container',
  template: `
    <ia-trip-list
      [assets] = "(assets$ | async)!"
      [data]   = "(data$   | async)!"
      [flags]  = "(flags$  | async)!"
      [error]  = "(error$  | async)!"
    ></ia-trip-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListContainerComponent implements OnInit {
  assets$!: Observable<TripListAssetsModel>;
  data$!: Observable<TripListDataModel>;
  flags$!: Observable<TripListFlagModel>;
  error$!: Observable<TripListErrorModel>;

  constructor(private service: TripListService) { }

  ngOnInit(): void {
    this.service.resetFlags();
    this.service.fetchAssets();
    this.service.fetchData();
    this.flags$ = this.service.watchFlags$();
    this.assets$ = this.service.watchAssets$();
    this.data$ = this.service.watchData$();
    this.error$ = this.service.watchError$();
  }
}
