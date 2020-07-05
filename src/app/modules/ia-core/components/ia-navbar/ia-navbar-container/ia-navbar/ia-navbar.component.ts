import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Component({
  selector: 'app-ia-navbar',
  templateUrl: './ia-navbar.component.html',
  styleUrls: ['./ia-navbar.component.scss']
})
export class IaNavbarComponent implements OnInit {

  data$: BehaviorSubject<IaNavbarModel>;

  @Input()
  set navbar(updatedValue: IaNavbarModel) { this.data$.next(updatedValue); };
  get navbar(): IaNavbarModel { return this.data$.getValue(); };

  constructor() {
    this.data$ = new BehaviorSubject<IaNavbarModel>(null);
  }

  ngOnInit(): void { }

}
