import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '@shared/constants/app.constants';

import { CoreClipboardService } from '@core/services/common/clipboard/core-clipboard.service';
import {
  FooterAssetsModel, DEFAULT_FOOTER_ASSETS,
  FooterFlagsModel, DEFAULT_FOOTER_FLAGS
} from '@core/models/footer/footer.model';
import { CoreSnackbarService } from '@core/services/common/snackbar/core-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<FooterAssetsModel>}
   * @memberof FooterService
   */
  private _assets$: BehaviorSubject<FooterAssetsModel> = new BehaviorSubject<FooterAssetsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {BehaviorSubject<FooterFlagsModel>}
   * @memberof FooterService
   */
  private _flags$: BehaviorSubject<FooterFlagsModel> = new BehaviorSubject<FooterFlagsModel>(null);

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {FooterAssetsModel}
   * @memberof FooterService
   */
  private _assets: FooterAssetsModel = { ...DEFAULT_FOOTER_ASSETS };

  /**
   * TODO: 🧐 Documentation Required
   *
   * @private
   * @type {FooterFlagsModel}
   * @memberof FooterService
   */
  private _flags: FooterFlagsModel = { ...DEFAULT_FOOTER_FLAGS };

  /**
   * Creates an instance of FooterService.
   * 
   * @memberof FooterService
   */
  constructor(
    private _clipboard: CoreClipboardService,
    private _snackbar: CoreSnackbarService
  ) { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  fetchAssets(): void {
    this._assets = {
      ...DEFAULT_FOOTER_ASSETS,

      madeWith: 'Made with',

      heart: {
        name: '', url: '',
        icon: { style: 'fas', name: 'heart' }
      },
      using: 'using',

      angular: {
        name: 'Angular', url: 'https://angular.io/',
        icon: { style: 'fab', name: 'angular' }
      },
      tailwind: {
        name: 'Tailwind', url: 'https://tailwindcss.com/',
        icon: { src: 'assets/media/images/tailwindcss.svg', alt: 'Tailwind' }
      },
      fontawesome: {
        name: 'Font Awesome', url: 'https://fontawesome.com/',
        icon: { style: 'fab', name: 'fort-awesome-alt' }
      },
      firebase: {
        name: 'Firebase', url: 'https://firebase.google.com/',
        icon: { src: 'assets/media/images/firebase.svg', alt: 'Firebase' }
      },

      by: 'by',
      author: AUTHOR.FULLNAME,

      github: {
        name: 'GitHub', url: `https://github.com/${AUTHOR.GITHUB}`,
        icon: { style: 'fab', name: 'github' }
      },
      linkedin: {
        name: 'LinkedIn', url: `https://www.linkedin.com/in/${AUTHOR.LINKEDIN}`,
        icon: { style: 'fab', name: 'linkedin' }
      },
      discord: {
        name: 'Discord', url: AUTHOR.DISCORD,
        icon: { style: 'fab', name: 'discord' }
      },
      email: {
        name: 'E-mail', url: AUTHOR.EMAIL,
        icon: { style: 'fas', name: 'envelope-open-text' }
      }
    };

    this._assets$.next(this._assets);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @return {*}  {Observable<IaCoreFooterAssetsModel>}
   * @memberof FooterService
   */
  watchAssets$(): Observable<FooterAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  copyDiscordID(): void {
    this._clipboard.copy(AUTHOR.DISCORD);

    /**
     * Optimize for scalable usage
     */
    this._snackbar.openSnackbar({ message: 'Discord ID Copied!', action: 'OK', config: { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 2500 } });

    // this.setFlags({ ...this._flags, discord: { ...DEFAULT_IA_CORE_FLAG } });
    // const isCopied: boolean = this._clipboard.copy(AUTHOR.DISCORD);    
    // this.setFlags({ ...this._flags, discord: { ...DEFAULT_IA_CORE_FLAG, success: isCopied, fail: !isCopied } });
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    this._clipboard.copy(AUTHOR.EMAIL);

    /**
     * Optimize for scalable usage
     */
    this._snackbar.openSnackbar({ message: 'Email ID Copied!', action: 'OK', config: { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 2500 } });

    // this.setFlags({ ...this._flags, email: { ...DEFAULT_IA_CORE_FLAG } });
    // const isCopied: boolean = this._clipboard.copy(AUTHOR.EMAIL);
    // this.setFlags({ ...this._flags, email: { ...DEFAULT_IA_CORE_FLAG, success: isCopied, fail: !isCopied } });
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @param {FooterFlagsModel} flags
   * @memberof FooterService
   */
  setFlags(flags: FooterFlagsModel): void {
    this._flags = { ...flags ?? DEFAULT_FOOTER_FLAGS };
    this._flags$.next(this._flags);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  resetFlags(): void {
    this.setFlags(DEFAULT_FOOTER_FLAGS);
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @return {*}  {Observable<IaCoreFooterFlagsModel>}
   * @memberof FooterService
   */
  watchFlags$(): Observable<FooterFlagsModel> {
    return this._flags$.asObservable();
  }

  /**
   * TODO: Use Lumberjack
   *
   * @memberof FooterService
   */
  log(): void {
    console.groupCollapsed(`[ ${this.constructor.name} ] - [ ${this.log.name} ]`);
    console.log('Test Logging Message');
    console.groupEnd();
  }
}
