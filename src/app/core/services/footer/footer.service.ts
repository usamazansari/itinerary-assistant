import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '@app/app.constants';

import { ClipboardService } from '@core/services/common/clipboard/clipboard.service';
import { FooterAssetsModel, FOOTER_ASSETS_STUB } from '@core/models/footer/footer.model';
import { SnackbarService } from '@core/services/common/snackbar/snackbar.service';

// TODO: Make services free of loose strings - use constants file for each module

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class FooterService
 */
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
   * @type {FooterAssetsModel}
   * @memberof FooterService
   */
  private _assets: FooterAssetsModel = { ...FOOTER_ASSETS_STUB };

  /**
   * Creates an instance of FooterService.
   * 
   * @memberof FooterService
   */
  constructor(
    private _clipboard: ClipboardService,
    private _snackbar: SnackbarService
  ) { }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  fetchAssets(): void {
    this._assets = {
      ...FOOTER_ASSETS_STUB,

      madeWith: 'Made with',

      heart: {
        name: '', url: '',
        icon: { style: 'fas', name: 'heart' } // fetch icon names and styles from constants
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
    this._snackbar.openSnackbar({ message: 'Discord ID Copied!', action: 'OK', config: { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 2500 } });
  }

  /**
   * TODO: 🧐 Documentation Required
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    this._clipboard.copy(AUTHOR.EMAIL);
    this._snackbar.openSnackbar({ message: 'Email ID Copied!', action: 'OK', config: { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 2500 } });
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
