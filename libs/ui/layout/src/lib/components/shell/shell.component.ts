import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { BehaviorSubject } from 'rxjs';

import { LayoutData } from '../../models';

@Component({
  selector: 'ia-layout-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  #data$ = new BehaviorSubject<LayoutData>(new LayoutData());

  @Input()
  set data(value: LayoutData) {
    this.#data$.next(value);
  }
  get data(): LayoutData {
    return this.#data$.getValue();
  }

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
