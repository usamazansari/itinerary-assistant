import { Injectable } from '@angular/core';
import { AppClipboardService } from '@shared/services/clipboard/app-clipboard/app-clipboard.service';

@Injectable({
  providedIn: 'root'
})
export class IaCoreClipboardService {

  constructor(
    private _clipboard: AppClipboardService
  ) { }

  copy(text: string): boolean {
    return this._clipboard.copy(text);
  }
}
