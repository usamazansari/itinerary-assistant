import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { LoaderConfigStub, LoaderSize } from '../../../constants';
import { LoaderConfigModel } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class InlineLoaderService {
  #config$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);
  #config = { ...LoaderConfigStub };

  #diameter$ = new BehaviorSubject<number>(0);
  #diameter = 0;

  #sizeMap = new Map<LoaderSize, number>([
    [LoaderSize.Small, 16],
    [LoaderSize.Medium, 32],
    [LoaderSize.Large, 64]
  ]);

  updateConfig(config: LoaderConfigModel): void {
    this.setConfig(config);
  }

  private setConfig(config: LoaderConfigModel): void {
    this.#config = { ...config ?? LoaderConfigStub };
    this.setDiameter(config.size);
    this.#config$.next(this.#config);
  }

  watchConfig$(): Observable<LoaderConfigModel> {
    return this.#config$.asObservable();
  }

  private setDiameter(size: LoaderSize): void {
    // TODO: ⚡ Optimize this type conversion
    this.#diameter = this.#sizeMap.get(size) ?? <number>(<unknown>LoaderSize.Medium);
    this.#diameter$.next(this.#diameter);
  }

  watchDiameter$(): Observable<number> {
    return this.#diameter$.asObservable();
  }
}
