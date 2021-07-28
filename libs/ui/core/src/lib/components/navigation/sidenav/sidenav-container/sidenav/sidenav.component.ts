import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * @export
 * @class SidenavComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-core-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
