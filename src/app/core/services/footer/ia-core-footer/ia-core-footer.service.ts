import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '@shared/constants/app.constants';

import { DEFAULT_IA_CORE_FOOTER_ASSETS, IaCoreFooterAssetsModel } from '@ia-core/models/footer/ia-core-footer.model';

@Injectable()
export class IaCoreFooterService {

  private _assets$: BehaviorSubject<IaCoreFooterAssetsModel> = new BehaviorSubject<IaCoreFooterAssetsModel>(null);

  private _assets: IaCoreFooterAssetsModel = { ...DEFAULT_IA_CORE_FOOTER_ASSETS };

  constructor() { }

  fetchAssets(): void {
    this._assets = {
      ...DEFAULT_IA_CORE_FOOTER_ASSETS,

      madeWith: 'Made with',
      heart: { name: '', url: '', icon: { style: 'fas', name: 'heart' } },
      using: 'using',

      angular: { name: '', url: '', icon: { style: 'fab', name: 'angular' } },
      tailwind: { name: '', url: '', icon: { src: 'assets/media/images/tailwindcss.svg', alt: 'Tailwind' } },
      fontawesome: { name: '', url: '', icon: { style: 'fab', name: 'fort-awesome-alt' } },
      firebase: { name: '', url: '', icon: { src: 'assets/media/images/firebase.svg', alt: 'Firebase' } },

      by: 'by',
      author: AUTHOR,

      github: { name: '', url: '', icon: { style: 'fab', name: 'github' } },
      linkedin: { name: '', url: '', icon: { style: 'fab', name: 'linkedin' } },
      discord: { name: '', url: '', icon: { style: 'fab', name: 'discord' } },
      email: { name: '', url: '', icon: { style: 'fas', name: 'envelope-open-text' } }
    };

    this._assets$.next(this._assets);
  }

  watchAssets$(): Observable<IaCoreFooterAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * TODO: Use Lumberjack
   *
   * @memberof IaCoreFooterService
   */
  log(): void {
    console.groupCollapsed(`[ ${this.constructor.name} ] - [ ${this.log.name} ]`);
    console.log('Test Logging Message');
    console.groupEnd();
  }
}
