import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { IaCoreFooterAssetsModel } from '@ia-core/models/footer/ia-core-footer.model';

@Component({
  selector: 'app-ia-core-footer',
  templateUrl: './ia-core-footer.component.html',
  styleUrls: ['./ia-core-footer.component.scss']
})
export class IaCoreFooterComponent implements OnInit {

  private _assets$: BehaviorSubject<IaCoreFooterAssetsModel> = new BehaviorSubject<IaCoreFooterAssetsModel>(null);

  @Input()
  set assets(value: IaCoreFooterAssetsModel) { this._assets$.next(value); }
  get assets(): IaCoreFooterAssetsModel { return this._assets$.getValue(); }

  constructor() { }

  ngOnInit(): void {
  }

}
