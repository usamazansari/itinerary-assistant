import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import type { LoaderConfigModel } from '..';
import { LoaderConfigStub, LoaderSize, LoaderSizeMap } from '..';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  #config$ = new BehaviorSubject<LoaderConfigModel>(LoaderConfigStub);
  #config: LoaderConfigModel = { ...LoaderConfigStub };

  #diameter$ = new BehaviorSubject<number>(0);
  #diameter = 0;

  updateConfig(config: LoaderConfigModel): void {
    this.setConfig(config);
  }

  private setConfig(config: LoaderConfigModel): void {
    this.#config = { ...config ?? LoaderConfigStub };
    this.setDiameter(this.#config.size);
    this.#config$.next(this.#config);
  }

  watchConfig$(): Observable<LoaderConfigModel> {
    return this.#config$.asObservable();
  }

  private setDiameter(size: LoaderSize): void {
    this.#diameter = LoaderSizeMap.get(size) ?? LoaderSizeMap.get(LoaderSize.Medium) ?? this.#diameter;
    this.#diameter$.next(this.#diameter);
  }

  watchDiameter$(): Observable<number> {
    return this.#diameter$.asObservable();
  }
}
