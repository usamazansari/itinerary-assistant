import { Injectable } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

/**
 * @deprecated Use from `@core/services/common`
 *
 * @export
 * @class AppClipboardService
 */
@Injectable({
  providedIn: 'root'
})
export class AppClipboardService {

  constructor(
    private _clipboard: Clipboard
  ) { }

  copy(text: string): boolean {
    return this._clipboard.copy(text);
  }
}
