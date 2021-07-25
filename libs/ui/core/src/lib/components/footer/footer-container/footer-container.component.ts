import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'itinerary-assistant-footer-container',
  templateUrl: './footer-container.component.html',
  styleUrls: ['./footer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
