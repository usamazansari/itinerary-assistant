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
  #diameter$ = new BehaviorSubject<number>(0);

  @Input()
  set config(value: LoaderConfigModel) { this.#config$.next(value); }
  get config(): LoaderConfigModel { return this.#config$.getValue(); }

  @Input()
  set diameter(value: number) { this.#diameter$.next(value); }
  get diameter(): number { return this.#diameter$.getValue(); }
}
