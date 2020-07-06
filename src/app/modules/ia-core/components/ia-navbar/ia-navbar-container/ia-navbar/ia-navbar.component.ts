import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Component({
  selector: 'app-ia-navbar',
  templateUrl: './ia-navbar.component.html',
  styleUrls: ['./ia-navbar.component.scss']
})
export class IaNavbarComponent implements OnInit {

  data$: BehaviorSubject<Dictionary<IaNavbarModel>>;

  @Output()
  toggleNavbarState$: EventEmitter<IaNavbarModel>;

  @Input()
  set navbar(updatedValue: Dictionary<IaNavbarModel>) { this.data$.next(updatedValue); };
  get navbar(): Dictionary<IaNavbarModel> { return this.data$.getValue(); };

  @Input()
  entityID: string;

  constructor() {
    this.data$ = new BehaviorSubject<Dictionary<IaNavbarModel>>(null);
    this.toggleNavbarState$ = new EventEmitter<IaNavbarModel>();
  }

  ngOnInit(): void { }

  toggleNavbarState(navbar: IaNavbarModel): void {
    this.toggleNavbarState$.emit(navbar);
  }

}
