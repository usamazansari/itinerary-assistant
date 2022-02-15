import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { LoaderConfig, LoaderSize, LoaderSizeMap } from '..';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  #config$ = new BehaviorSubject<LoaderConfig>(new LoaderConfig({}));
  #config = new LoaderConfig({});

  #diameter$ = new BehaviorSubject<number>(0);
  #diameter = 0;

  updateConfig(config: LoaderConfig): void {
    this.setConfig(config);
  }

  private setConfig(config: LoaderConfig): void {
    this.#config = { ...(config ?? new LoaderConfig({})) };
    this.setDiameter(this.#config.size);
    this.#config$.next(this.#config);
  }

  watchConfig$(): Observable<LoaderConfig> {
    return this.#config$.asObservable();
  }

  private setDiameter(size: LoaderSize): void {
    this.#diameter =
      LoaderSizeMap.get(size) ??
      LoaderSizeMap.get(LoaderSize.Medium) ??
      this.#diameter;
    this.#diameter$.next(this.#diameter);
  }

  watchDiameter$(): Observable<number> {
    return this.#diameter$.asObservable();
  }
}
