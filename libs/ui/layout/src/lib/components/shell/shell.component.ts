import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { BehaviorSubject } from 'rxjs';

import type { LayoutDataModel } from '../../models';
import { LayoutDataStub } from '../../constants';

// TODO: 🧐 Documentation Required
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
export class ShellComponent {
  #data$ = new BehaviorSubject<LayoutDataModel>(LayoutDataStub);

  @Input()
  set data(value: LayoutDataModel) { this.#data$.next(value ?? LayoutDataStub); }
  get data(): LayoutDataModel { return this.#data$.getValue(); }

  @Output() navigate$ = new EventEmitter<void>();

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  openSidenav(): void {
    this.sidenav.open();
  }

  closeSidenav(): void {
    this.sidenav.close();
  }

  gotoHome(): void {
    this.navigate$.emit();
  }
}
