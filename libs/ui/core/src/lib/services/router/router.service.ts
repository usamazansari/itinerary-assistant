import { Injectable } from '@angular/core';

import type { RouterPayloadModel } from '../../models';

// TODO: Implement Navigation
/**
 * Router Service for Navigation
 *
 * @export
 * @class RouterService
 */
@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor() {}

  navigate(payload: RouterPayloadModel): void {}
}
