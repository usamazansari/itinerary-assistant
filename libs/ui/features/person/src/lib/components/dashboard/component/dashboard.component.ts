import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map, Observable, of, tap } from 'rxjs';

import { Person } from '../../../models';
import { GetPeopleGQL, GetPersonGQL } from '../imports/services';

@Component({
  selector: 'itinerary-assistant-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showData = false;
  showPing = false;
  showPerson = false;

  ping$!: Observable<unknown>;
  person$!: Observable<Person>;
  people$!: Observable<Person[]>;

  constructor(
    private _http: HttpClient,
    private _getPerson: GetPersonGQL,
    private _getPeople: GetPeopleGQL
  ) {}

  ngOnInit() {
    this.showPing = false;
    this.showPerson = false;
    this.showData = false;
  }

  pingServer() {
    this.showPing = true;
    this.ping$ = this._http
      .get<{ message: string }>('http://localhost:3333/api/greeting')
      .pipe(
        map(_ => _),
        tap(res => {
          console.log({ res });
        })
      );
  }

  fetchPerson() {
    this.showPerson = true;
    this.person$ = this._http.get<Person>('/api/person').pipe(
      map(_ => _),
      tap(res => {
        console.log({ res });
      })
    );
  }

  fetchData() {
    this.showData = true;
    this.person$ = this._getPerson
      .fetch({ personId: '149b729f-a0a8-4025-9d3a-a25ff6a9e28a' })
      .pipe(
        map(({ data: { getPerson }, loading, error, errors }) => {
          console.log({ loading });
          if (error) throw error;
          if (errors) throw error;
          return getPerson;
        }),
        map(({ __typename, ...person }) => person as Person)
      );
    this.people$ = this._getPeople.fetch().pipe(
      map(({ data: { getPeople }, loading, error, errors }) => {
        console.log({ loading });
        if (error) throw error;
        if (errors) throw errors;
        return getPeople;
      }),
      map(people => people.map(({ __typename, ...person }) => person as Person))
    );
  }

  resetFlags() {
    this.showData = false;
    this.showPerson = false;
    this.showPing = false;
  }

  clearData() {
    this.person$ = of({} as Person);
    this.people$ = of([]);
    this.ping$ = of('');
  }
}
