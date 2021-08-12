import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LayoutDataStub } from './imports/models';
import { ApplicationName, Author } from './imports/constants';

import type { LayoutDataModel } from './imports/models';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layoutData$ = new BehaviorSubject<LayoutDataModel>(LayoutDataStub);
  #layoutData: LayoutDataModel = { ...LayoutDataStub };

  constructor() {}

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
}
