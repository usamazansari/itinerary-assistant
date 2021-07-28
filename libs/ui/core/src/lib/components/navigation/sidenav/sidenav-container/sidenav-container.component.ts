import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ia-core-sidenav-container',
  template: `<ia-core-sidenav></ia-core-sidenav>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
