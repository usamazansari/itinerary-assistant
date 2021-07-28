import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * @export
 * @class NavbarComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleSidenav(): void {}

  navigate(routes: string[]): void {}
}
