import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';

/**
 * @redundant Remove this module
 *
 * @export
 * @class AppFontAwesomeModule
 */
@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class AppFontAwesomeModule {
}
