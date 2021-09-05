import { Component, Input } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { LoaderConfigStub } from '../../../../constants';
import { LoaderConfigModel } from '../../../../models';

@Component({
  selector: 'ia-elements-inline-loader',
  templateUrl: './inline-loader.component.html',
  styleUrls: ['./inline-loader.component.scss']
})
export class InlineLoaderComponent {
  #config$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);

  @Input()
  set config(value: LoaderConfigModel) { this.#config$.next(value); }
  get config(): LoaderConfigModel { return this.#config$.getValue(); }
}
