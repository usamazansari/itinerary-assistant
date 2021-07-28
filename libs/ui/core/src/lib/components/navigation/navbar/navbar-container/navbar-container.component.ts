import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ia-core-navbar-container',
  template: `<ia-core-navbar></ia-core-navbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
