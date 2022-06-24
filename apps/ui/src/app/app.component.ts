import { Component, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { catchError, from, map, Observable, of } from 'rxjs';

import { SanityModel } from './imports/models';
import {
  ClassSanityGQL,
  StringSanityGQL,
  GetPeopleGQL,
  GetPersonGQL
} from './imports/services';
import { StringSanityQuery, Exact } from './imports/types';

@Component({
  selector: 'ia-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  #stringSanityQuery$!: QueryRef<
    StringSanityQuery,
    Exact<{ [key: string]: never }>
  >;

  showData = false;

  person$!: Observable<unknown>;

  people$!: Observable<unknown[]>;

  stringSanity$!: Observable<string>;

  classSanity$!: Observable<SanityModel>;

  constructor(
    private _getPerson: GetPersonGQL,
    private _getPeople: GetPeopleGQL,
    private _stringSanity: StringSanityGQL,
    private _classSanity: ClassSanityGQL
  ) {}

  ngOnInit(): void {
    this.showData = false;
    this.#stringSanityQuery$ = this._stringSanity.watch();
  }

  fetchData(): void {
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
    //     })
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
    this.stringSanity$ = this.#stringSanityQuery$.valueChanges.pipe(
      map(({ data: { stringSanity }, error, errors }) => {
        if (!!error) {
          console.log({ error });
        }
        if (!!errors) {
          console.log({ errors });
        }
        return stringSanity;
      }),
      catchError(err => {
        console.log({ err });
        return of(`${err.message}`);
      })
    );
  }

  refetchData(): void {
    this.stringSanity$ = from(this.#stringSanityQuery$.refetch()).pipe(
      map(({ data: { stringSanity }, error, errors }) => {
        if (!!error) {
          console.log({ error });
        }
        if (!!errors) {
          console.log({ errors });
        }
        return stringSanity;
      }),
      catchError(err => {
        console.log({ err });
        return of(`${err.message}`);
      })
    );
  }
}
