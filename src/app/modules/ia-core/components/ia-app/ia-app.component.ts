import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State } from '@ia-core/state';
import * as fromActions from '@ia-core/state/ia-action/ia-core.action';
// import { selectCore } from '@ia-core/state/ia-selector/ia-core.selector';

@Component({
  selector: 'app-ia-app',
  templateUrl: './ia-app.component.html',
  styleUrls: ['./ia-app.component.scss']
})
export class IaAppComponent implements OnInit {

  constructor(private _store$: Store<State>) { }

  ngOnInit(): void {
    // let selectedState = this._store$.pipe(select(selectCore));
    this._store$.dispatch(new fromActions.IaCoreAction({ id: 'core-id' }));
    // selectedState.subscribe(data => console.log(data));
  }

}
