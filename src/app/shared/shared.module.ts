import { NgModule } from '@angular/core';

const declarations = [];

const imports = [];

/**
 * @redundant - will be used when shared components and/or ngrx/ngxs state are in action
 *
 * @export
 * @class AppSharedModule
 */
@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports]
})
export class AppSharedModule { }
