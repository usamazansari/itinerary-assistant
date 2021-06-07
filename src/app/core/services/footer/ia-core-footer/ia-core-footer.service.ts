import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '@shared/constants/app.constants';

import { DEFAULT_IA_CORE_FOOTER_ASSETS, IaCoreFooterAssetsModel } from '@ia-core/models/footer/ia-core-footer.model';

@Injectable()
export class IaCoreFooterService {

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {BehaviorSubject<IaCoreFooterAssetsModel>}
   * @memberof IaCoreFooterService
   */
  private _assets$: BehaviorSubject<IaCoreFooterAssetsModel> = new BehaviorSubject<IaCoreFooterAssetsModel>(null);

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {IaCoreFooterAssetsModel}
   * @memberof IaCoreFooterService
   */
  private _assets: IaCoreFooterAssetsModel = { ...DEFAULT_IA_CORE_FOOTER_ASSETS };

  /**
   * Creates an instance of IaCoreFooterService.
   * 
   * @memberof IaCoreFooterService
   */
  constructor() { }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterService
   */
  fetchAssets(): void {
    this._assets = {
      ...DEFAULT_IA_CORE_FOOTER_ASSETS,

      madeWith: 'Made with',

      heart: {
        name: '',
        url: '',
        icon: { style: 'fas', name: 'heart' }
      },
      using: 'using',

      angular: {
        name: 'Angular',
        url: 'https://angular.io/',
        icon: { style: 'fab', name: 'angular' }
      },
      tailwind: {
        name: 'Tailwind',
        url: 'https://tailwindcss.com/',
        icon: { src: 'assets/media/images/tailwindcss.svg', alt: 'Tailwind' }
      },
      fontawesome: {
        name: 'Font Awesome',
        url: 'https://fontawesome.com/',
        icon: { style: 'fab', name: 'fort-awesome-alt' }
      },
      firebase: {
        name: 'Firebase',
        url: 'https://firebase.google.com/',
        icon: { src: 'assets/media/images/firebase.svg', alt: 'Firebase' }
      },

      by: 'by',
      author: AUTHOR.FULLNAME,

      github: {
        name: 'GitHub',
        url: `https://github.com/${AUTHOR.GITHUB}`,
        icon: { style: 'fab', name: 'github' }
      },
      linkedin: {
        name: 'LinkedIn',
        url: `https://www.linkedin.com/in/${AUTHOR.LINKEDIN}`,
        icon: { style: 'fab', name: 'linkedin' }
      },
      discord: {
        name: 'Discord',
        url: AUTHOR.DISCORD,
        icon: { style: 'fab', name: 'discord' }
      },
      email: {
        name: 'E-mail',
        url: AUTHOR.EMAIL,
        icon: { style: 'fas', name: 'envelope-open-text' }
      }
    };

    this._assets$.next(this._assets);
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @return {*}  {Observable<IaCoreFooterAssetsModel>}
   * @memberof IaCoreFooterService
   */
  watchAssets$(): Observable<IaCoreFooterAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterService
   */
  copyDiscordID(): void {

  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterService
   */
  copyEmailID(): void {

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
