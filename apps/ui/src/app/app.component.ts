import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LayoutDataStub } from './imports/models';
import { AUTHOR, APPLICATION_NAME } from './constants';

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
    this.#layoutData = {
      footer: {
        fullname: AUTHOR.FULLNAME,
        github: AUTHOR.GITHUB,
        linkedin: AUTHOR.LINKEDIN,
        discord: AUTHOR.DISCORD,
        email: AUTHOR.EMAIL,
        location: AUTHOR.LOCATION
      },
      toolbar: {
        logo: APPLICATION_NAME
      }
    };
    this.layoutData$.next(this.#layoutData);
  }
}
