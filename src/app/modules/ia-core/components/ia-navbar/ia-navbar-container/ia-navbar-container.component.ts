import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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

  @Output()
  toggleNavbarState$: EventEmitter<IaNavbarModel>;

  @Input()
  set navbarDictionary(updatedValue: Dictionary<IaNavbarModel>) { this.data$.next(updatedValue); };
  get navbarDictionary(): Dictionary<IaNavbarModel> { return this.data$.getValue(); };

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<IaNavbarModel>>(null);
    this.toggleNavbarState$ = new EventEmitter<IaNavbarModel>();
  }

  ngOnInit(): void {
    this.navbar_ID = NAVBAR_ID;
  }

  toggleNavbarState(navbar: IaNavbarModel) {
    console.log('emitting', navbar);
    this.toggleNavbarState$.emit(navbar);
  }

}
