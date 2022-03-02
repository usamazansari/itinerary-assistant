import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ia-trip-list-skeleton',
  templateUrl: './trip-list-skeleton.component.html',
  styleUrls: ['./trip-list-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TripListSkeletonComponent {}
