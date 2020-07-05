import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { NAVBAR_ID } from '@ia-core/state/ia-type/ia-navbar.type';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Component({
  selector: 'app-ia-navbar-container',
  templateUrl: './ia-navbar-container.component.html',
  styleUrls: ['./ia-navbar-container.component.scss']
})
export class IaNavbarContainerComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<IaNavbarModel>>;
  navbar_ID: string;

  @Input()
  set navbarData(updatedValue: Dictionary<IaNavbarModel>) { this.data$.next(updatedValue); };
  get navbarData(): Dictionary<IaNavbarModel> { return this.data$.getValue(); };

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<IaNavbarModel>>(null);
  }

  ngOnInit(): void {
    this.navbar_ID = NAVBAR_ID;
  }

}
