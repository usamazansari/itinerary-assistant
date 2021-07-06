import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

/**
 * TODO: 🧐 Documentation Required
 *
 * @export
 * @class ClipboardService
 */
@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  /**
   * Creates an instance of ClipboardService.
   * 
   * @param {Clipboard} _clipboard Instance of `Clipboard` from `@angular/cdk/clipboard`
   * @memberof ClipboardService
   */
  constructor(
    private _clipboard: Clipboard
  ) { }

  /**
   * Prepares a string to be copied later.
   *
   * @param text The string to copy.
   * @returns {*} Whether the operation was successful.
   * @memberof ClipboardService
   */
  copy(text: string): boolean {
    return this._clipboard.copy(text);
  }
}
