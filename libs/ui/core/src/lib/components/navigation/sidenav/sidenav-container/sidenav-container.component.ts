import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'itinerary-assistant-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
