import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'itinerary-assistant-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
