import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import { TripListService } from '../..';
import type {
  TripListAssets,
  TripListData,
  TripListError,
  TripListFlags
} from '../..';

@Component({
  selector: 'ia-trip-list-container',
  template: `
    <ia-trip-list
      [assets]="(assets$ | async)!"
      [data]="(data$ | async)!"
      [flags]="(flags$ | async)!"
      [error]="(error$ | async)!"></ia-trip-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListContainerComponent implements OnInit {
  assets$!: Observable<TripListAssets>;
  data$!: Observable<TripListData>;
  flags$!: Observable<TripListFlags>;
  error$!: Observable<TripListError>;

  constructor(private service: TripListService) {}

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
