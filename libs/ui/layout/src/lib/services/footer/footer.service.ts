import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '../../constants';

import {
  FooterAssetsModel,
  FOOTER_ASSETS_STUB
} from '../../models/footer/footer.model';
import { ClipboardService, SnackbarService } from '../';

// TODO: Make services free of loose strings - use constants file for each module
// TODO: Use Virtual Memory for handling changes

/**
 * Service for use in `FooterComponent`
 *
 * @export
 * @class FooterService
 */
@Injectable({
  providedIn: 'root'
})
export class FooterService {
  /**
   * `BehaviorSubject` to hold the assets for the `FooterComponent`
   * @private
   * @type {BehaviorSubject<FooterAssetsModel>}
   * @memberof FooterService
   */
  private _assets$: BehaviorSubject<FooterAssetsModel> =
    new BehaviorSubject<FooterAssetsModel>(FOOTER_ASSETS_STUB);

  /**
   * Holds the assets for the `FooterComponent`
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
  ) {}

  /**
   * Fetch assets for the `FooterComponent`
   * @memberof FooterService
   */
  fetchAssets(): void {
    this._assets = {
      ...FOOTER_ASSETS_STUB,

      madeWith: 'Made with',

      heart: {
        name: '',
        url: '',
        icon: { style: 'fas', name: 'heart' } // fetch icon names and styles from constants
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
   * Observe changes in assets for the `FooterComponent`
   *
   * @return {*}  {Observable<IaCoreFooterAssetsModel>}
   * @memberof FooterService
   */
  watchAssets$(): Observable<FooterAssetsModel> {
    return this._assets$.asObservable();
  }

  /**
   * Copy the Discord ID: `usama251993#5438` to the clipboard
   *
   * @memberof FooterService
   */
  copyDiscordID(): void {
    const isTextCopied: boolean = this._clipboard.copy(AUTHOR.DISCORD);
    if (isTextCopied) {
      this._snackbar.openSnackbar({
        message: 'Discord ID Copied!',
        action: 'OK',
        config: {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2500
        }
      });
    } else {
      this._snackbar.openSnackbar({
        message: 'Some problem accessing the Clipboard',
        action: 'OK',
        config: {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2500
        }
      });
    }
  }

  /**
   * Copy the email ID: `usama251993@gmail.com` to the clipboard
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    const isTextCopied: boolean = this._clipboard.copy(AUTHOR.EMAIL);
    if (isTextCopied) {
      this._snackbar.openSnackbar({
        message: 'Email ID Copied!',
        action: 'OK',
        config: {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2500
        }
      });
    } else {
      this._snackbar.openSnackbar({
        message: 'Some problem accessing the Clipboard',
        action: 'OK',
        config: {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 2500
        }
      });
    }
  }

  // TODO: Use Lumberjack
  /**
   *
   * @memberof FooterService
   */
  log(): void {
    console.groupCollapsed(
      `[ ${this.constructor.name} ] - [ ${this.log.name} ]`
    );
    console.log('Test Logging Message');
    console.groupEnd();
  }
}
