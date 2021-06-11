import { NgModule } from '@angular/core';

const DECLARATIONS = [];

const IMPORTS = [];

/**
 * @redundant - will be used when shared components and/or ngrx/ngxs state are in action
 *
 * @export
 * @class AppSharedModule
 */
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  exports: [...IMPORTS]
})
export class AppSharedModule { }
