import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-ia-core-shell',
  templateUrl: './ia-core-shell.component.html',
  styleUrls: ['./ia-core-shell.component.scss']
})
export class IaCoreShellComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void { }

  openSidenav(): void {
    this.sidenav.open();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }
}
