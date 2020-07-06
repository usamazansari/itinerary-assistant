import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { IaCoreService } from '@ia-core/services/ia-core.service';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Component({
  selector: 'app-ia-navbar-container',
  templateUrl: './ia-navbar-container.component.html',
  styleUrls: ['./ia-navbar-container.component.scss']
})
export class IaNavbarContainerComponent implements OnInit {

  @Output()
  toggleNavbarState$: EventEmitter<IaNavbarModel>;


  navbar$: Observable<Dictionary<IaNavbarModel>>;
  navbarID$: Observable<string>;

  constructor(
    private coreService: IaCoreService
  ) {
    this.toggleNavbarState$ = new EventEmitter<IaNavbarModel>();
  }

  ngOnInit(): void {
    const { assets, entityID } = this.coreService.getNavbarAssets();
    this.navbar$ = assets;
    this.navbarID$ = entityID;
  }

  toggleNavbarState(navbar: IaNavbarModel) {
    this.navbar$ = this.coreService.toggleNavbar(navbar);
  }

}
