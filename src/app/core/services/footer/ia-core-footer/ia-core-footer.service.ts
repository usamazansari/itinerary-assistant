import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { AUTHOR } from '@shared/constants/app.constants';

import { IaCoreClipboardService } from '@ia-core/services/common/clipboard/ia-core-clipboard/ia-core-clipboard.service';
// import { DEFAULT_IA_CORE_FLAG } from '@ia-core/models/ia-core.model';
import {
  IaCoreFooterAssetsModel, DEFAULT_IA_CORE_FOOTER_ASSETS,
  IaCoreFooterFlagsModel, DEFAULT_IA_CORE_FOOTER_FLAGS
} from '@ia-core/models/footer/ia-core-footer.model';
import { IaCoreSnackbarService } from '@ia-core/services/common/snackbar/ia-core-snackbar/ia-core-snackbar.service';

@Injectable({
  providedIn: 'root'
})
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
   * @type {BehaviorSubject<IaCoreFooterFlagsModel>}
   * @memberof IaCoreFooterService
   */
  private _flags$: BehaviorSubject<IaCoreFooterFlagsModel> = new BehaviorSubject<IaCoreFooterFlagsModel>(null);

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {IaCoreFooterAssetsModel}
   * @memberof IaCoreFooterService
   */
  private _assets: IaCoreFooterAssetsModel = { ...DEFAULT_IA_CORE_FOOTER_ASSETS };

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @private
   * @type {IaCoreFooterFlagsModel}
   * @memberof IaCoreFooterService
   */
  private _flags: IaCoreFooterFlagsModel = { ...DEFAULT_IA_CORE_FOOTER_FLAGS };

  /**
   * Creates an instance of IaCoreFooterService.
   * 
   * @memberof IaCoreFooterService
   */
  constructor(
    private _clipboard: IaCoreClipboardService,
    private _snackbar: IaCoreSnackbarService
  ) { }

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
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterService
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
   * TODO: :monocle_face: Documentation Required
   *
   * @param {IaCoreFooterFlagsModel} flags
   * @memberof IaCoreFooterService
   */
  setFlags(flags: IaCoreFooterFlagsModel): void {
    this._flags = { ...flags ?? DEFAULT_IA_CORE_FOOTER_FLAGS };
    this._flags$.next(this._flags);
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @memberof IaCoreFooterService
   */
  resetFlags(): void {
    this.setFlags(DEFAULT_IA_CORE_FOOTER_FLAGS);
  }

  /**
   * TODO: :monocle_face: Documentation Required
   *
   * @return {*}  {Observable<IaCoreFooterFlagsModel>}
   * @memberof IaCoreFooterService
   */
  watchFlags$(): Observable<IaCoreFooterFlagsModel> {
    return this._flags$.asObservable();
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
