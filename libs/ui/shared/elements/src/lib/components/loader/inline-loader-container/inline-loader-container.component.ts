import { Component, OnInit } from '@angular/core';

import type { Observable } from 'rxjs';

import type { LoaderConfigModel } from '../../../models';
import { InlineLoaderService } from '../../../services';

@Component({
  selector: 'ia-elements-inline-loader-container',
  template: `
  <ia-elements-inline-loader
    [config] = "(config$ | async)!"
    ></ia-elements-inline-loader>
  `
})
export class InlineLoaderContainerComponent implements OnInit {
  config$!: Observable<LoaderConfigModel>;

  constructor(private _service: InlineLoaderService) { }

  ngOnInit(): void {
    this._service.updateConfig({ visible: true });
    this.config$ = this._service.watchConfig$();
  }
}
