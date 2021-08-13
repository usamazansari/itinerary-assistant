import { Injectable } from '@angular/core';

import type { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Author } from '../../imports/constants';
import { ClipboardService, SnackbarService } from '../../imports/services';

import type { FooterVMModel } from '../../models';
import { FooterVMStub } from '../../models';

// TODO: Make services free of loose strings - use constants file for each module

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
  #vm$ = new BehaviorSubject<FooterVMModel>(FooterVMStub);
  #vm: FooterVMModel = { ...FooterVMStub };

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
    this.#vm = {
      ...this.#vm,
      assets: {
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
        author: Author.FullName,

        github: {
          name: 'GitHub',
          url: `https://github.com/${Author.GitHub}`,
          icon: { style: 'fab', name: 'github' }
        },
        linkedin: {
          name: 'LinkedIn',
          url: `https://www.linkedin.com/in/${Author.LinkedIn}`,
          icon: { style: 'fab', name: 'linkedin' }
        },
        discord: {
          name: 'Discord',
          url: Author.Discord,
          icon: { style: 'fab', name: 'discord' }
        },
        email: {
          name: 'E-mail',
          url: Author.Email,
          icon: { style: 'fas', name: 'envelope-open-text' }
        }
      }
    };
    this.setVM(this.#vm);
  }

  private setVM(vm: FooterVMModel): void {
    this.#vm = { ...vm };
    this.#vm$.next(this.#vm);
  }

  /**
   * Observe changes in VM for the `FooterComponent`
   *
   * @return {*}  {Observable<FooterVMModel>}
   * @memberof FooterService
   */
  watchVM$(): Observable<FooterVMModel> {
    return this.#vm$.asObservable();
  }

  /**
   * Copy the Discord ID: `usama251993#5438` to the clipboard
   *
   * @memberof FooterService
   */
  copyDiscordID(): void {
    const isTextCopied: boolean = this._clipboard.copy(Author.Discord);
    if (isTextCopied) {
      this._snackbar.openSnackbar('Discord ID Copied!', 'OK');
    } else {
      this._snackbar.openSnackbar('Some problem accessing the Clipboard', 'OK');
    }
  }

  /**
   * Copy the email ID: `usama251993@gmail.com` to the clipboard
   *
   * @memberof FooterService
   */
  copyEmailID(): void {
    const isTextCopied: boolean = this._clipboard.copy(Author.Email);
    if (isTextCopied) {
      this._snackbar.openSnackbar('Email ID Copied!', 'OK');
    } else {
      this._snackbar.openSnackbar('Some problem accessing the Clipboard', 'OK');
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
