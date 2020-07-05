import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';

import { IaCoreService } from '@ia-core/services/ia-core.service';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Component({
  selector: 'app-ia-app',
  templateUrl: './ia-app.component.html',
  styleUrls: ['./ia-app.component.scss']
})
export class IaAppComponent implements OnInit {

  navbar$: Observable<Dictionary<IaNavbarModel>>;

  constructor(
    private coreService: IaCoreService
  ) { }

  ngOnInit(): void {
    this.navbar$ = this.coreService.getNavbarAssets();
  }

  toggleNavbarState(navbar: IaNavbarModel) {
    console.log('toggling');
    this.navbar$ = this.coreService.toggleNavbar(navbar);
  }

}
