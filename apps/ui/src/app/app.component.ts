import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { GetPeopleGQL, GetPersonGQL } from './imports/services';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showData = false;

  person$!: Observable<unknown>;

  people$!: Observable<unknown[]>;

  constructor(
    private _getPerson: GetPersonGQL,
    private _getPeople: GetPeopleGQL
  ) {}

  ngOnInit(): void {
    this.showData = false;
  }

  fetchData(): void {
    this.showData = true;
    this.person$ = this._getPerson
      .fetch({ personId: '149b729f-a0a8-4025-9d3a-a25ff6a9e28a' })
      .pipe(
        map(({ data: { getPerson }, loading, error, errors }) => {
          console.log({ loading });
          if (error) {
            throw error;
          }
          if (errors) {
            throw error;
          }
          return getPerson;
        })
      );
    this.people$ = this._getPeople.fetch().pipe(
      map(({ data: { getPeople }, loading, error, errors }) => {
        console.log({ loading });
        if (error) {
          throw error;
        }
        if (errors) {
          throw errors;
        }
        return getPeople;
      })
    );
  }
}
