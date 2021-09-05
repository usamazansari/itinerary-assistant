import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { LoaderConfigStub } from '../../../constants';
import { LoaderConfigModel } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class InlineLoaderService {
  #config$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);
  #config = { ...LoaderConfigStub };

  updateConfig(config: LoaderConfigModel): void {
    this.setConfig(config);
  }

  private setConfig(config: LoaderConfigModel): void {
    this.#config = { ...config ?? LoaderConfigStub };
    this.#config$.next(this.#config);
  }

  watchConfig$(): Observable<LoaderConfigModel> {
    return this.#config$.asObservable();
  }
}
