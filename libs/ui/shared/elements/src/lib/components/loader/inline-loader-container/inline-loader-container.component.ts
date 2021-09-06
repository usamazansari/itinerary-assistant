import { Component, Input, OnInit } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { LoaderConfigStub } from '../../../constants';
import type { LoaderConfigModel } from '../../../models';
import { InlineLoaderService } from '../../../services';

@Component({
  selector: 'ia-elements-inline-loader-container',
  template: `
  <ia-elements-inline-loader
    [config]   = "(config$   | async)!"
    [diameter] = "(diameter$ | async)!"
    ></ia-elements-inline-loader>
  `
})
export class InlineLoaderContainerComponent implements OnInit {

  #config$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);

  @Input()
  set config(value: LoaderConfigModel) { this.#config$.next(value); }
  get config(): LoaderConfigModel { return this.#config$.getValue(); }

  config$!: Observable<LoaderConfigModel>;
  diameter$!: Observable<number>;

  constructor(private _service: InlineLoaderService) { }

  ngOnInit(): void {
    this.#config$.subscribe(config => {
      this._service.updateConfig(config);
    });
    this.config$ = this._service.watchConfig$();
    this.diameter$ = this._service.watchDiameter$();
  }
}
