import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

import type { Observable } from 'rxjs';

import { TripListService } from '../../../services';
import { TripListItemModel } from '../../../imports/models';
import { TripListErrorModel } from '../../../models';

@Component({
  selector: 'ia-trip-list-container',
  template: `
    <ia-trip-list
      [tripList] = "(tripList$ | async)!"
      [error]    = "(error$    | async)!"
    ></ia-trip-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListContainerComponent implements OnInit {
  tripList$!: Observable<TripListItemModel[]>;
  error$!: Observable<TripListErrorModel>;

  constructor(private _service: TripListService) { }

  ngOnInit(): void {
    this._service.fetchTripList();
    this.tripList$ = this._service.watchTripList$();
    this.error$ = this._service.watchError$();
  }
}
