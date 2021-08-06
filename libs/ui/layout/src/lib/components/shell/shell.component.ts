import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { BehaviorSubject } from 'rxjs';

import { LayoutDataStub } from '../../models';

import type { LayoutDataModel } from '../../models';

// TODO: 🧐 Documentation Required
// TODO: Use Data in child components
/**
 *
 *
 * @export
 * @class ShellComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-layout-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  #data$ = new BehaviorSubject<LayoutDataModel>(LayoutDataStub);

  @Input() set data(value: LayoutDataModel) {
    this.#data$.next(value);
  }
  get data(): LayoutDataModel {
    return this.#data$.getValue();
  }

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}

  openSidenav(): void {
    this.sidenav.open();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }
}
