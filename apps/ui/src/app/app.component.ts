import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map, Observable, of, tap } from 'rxjs';

// import { Gender } from './imports/constants';
import { Person } from './imports/models';
// import { GetPeopleGQL, GetPersonGQL } from './imports/services';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showData = false;
  showPing = false;
  showPerson = false;

  ping$!: Observable<unknown>;
  person$!: Observable<Person>;
  people$!: Observable<unknown[]>;

  constructor(
    private _http: HttpClient // private _getPerson: GetPersonGQL, // private _getPeople: GetPeopleGQL
  ) {}

  ngOnInit() {
    this.showPing = false;
    this.showPerson = false;
    this.showData = false;
  }

  pingServer() {
    this.showPing = true;
    this.ping$ = this._http.get<{ message: string }>('/api/greeting').pipe(
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
    // this.person$ = this._getPerson
    //   .fetch({ personId: '149b729f-a0a8-4025-9d3a-a25ff6a9e28a' })
    //   .pipe(
    //     map(({ data: { getPerson }, loading, error, errors }) => {
    //       console.log({ loading });
    //       if (error) {
    //         throw error;
    //       }
    //       if (errors) {
    //         throw error;
    //       }
    //       return getPerson;
    //     }),
    //     map(
    //       ({ dateOfBirth, email, fullName, gender, id, phone, website }) =>
    //         new Person({
    //           dateOfBirth,
    //           email,
    //           fullName,
    //           gender: (<unknown>gender) as Gender,
    //           id,
    //           phone,
    //           website
    //         })
    //     )
    //   );
    // this.people$ = this._getPeople.fetch().pipe(
    //   map(({ data: { getPeople }, loading, error, errors }) => {
    //     console.log({ loading });
    //     if (error) {
    //       throw error;
    //     }
    //     if (errors) {
    //       throw errors;
    //     }
    //     return getPeople;
    //   })
    // );
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
