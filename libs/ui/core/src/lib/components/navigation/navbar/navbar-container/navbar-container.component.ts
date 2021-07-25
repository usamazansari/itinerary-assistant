import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'itinerary-assistant-navbar-container',
  template: `<itinerary-assistant-navbar></itinerary-assistant-navbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
