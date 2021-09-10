import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { ApplicationName, Author, LayoutDataStub } from './imports/constants';
import { RouterService } from './imports/services';

import type { LayoutDataModel } from './imports/models';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layoutData$ = new BehaviorSubject<LayoutDataModel>(LayoutDataStub);
  #layoutData: LayoutDataModel = { ...LayoutDataStub };

  constructor(private _router: RouterService) { }

  ngOnInit(): void {
    this._setLayoutData();
  }

  private _setLayoutData() {
    this.#layoutData = {
      footer: {
        fullname: Author.FullName,
        github: Author.GitHub,
        linkedin: Author.LinkedIn,
        discord: Author.Discord,
        email: Author.Email,
        location: Author.Location
      },
      toolbar: {
        logo: ApplicationName
      }
    };
    this.layoutData$.next(this.#layoutData);
  }

  navigate(): void {
    this._router.navigate({
      routes: [],
      extras: {}
    });
  }
}
