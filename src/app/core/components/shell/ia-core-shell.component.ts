import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { CORE_ROUTES } from '@ia-core/core.routes';
import { IaCoreRouterService } from '@ia-core/services/common/router/ia-core-router/ia-core-router.service';

@Component({
  selector: 'app-ia-core-shell',
  templateUrl: './ia-core-shell.component.html',
  styleUrls: ['./ia-core-shell.component.scss']
})
export class IaCoreShellComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(
    private _service: IaCoreRouterService // <- :recycle: Optimization Required
  ) { }

  ngOnInit(): void { }

  openSidenav(): void {
    this.sidenav.open();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }

  gotoMock(): void {
    this._service.navigate({ routes: [CORE_ROUTES.MOCK], extras: {} }); // <- will go soon
  }

}
