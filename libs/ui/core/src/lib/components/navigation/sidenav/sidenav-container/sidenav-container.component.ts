import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * @deprecated - Use from Layouts Library
 *
 * @export
 * @class SidenavContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-core-sidenav-container',
  template: `<ia-core-sidenav></ia-core-sidenav>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
