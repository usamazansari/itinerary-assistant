import { NgModule } from '@angular/core';

import { AppFontAwesomeModule } from './modules/fontawesome/fontawesome.module';
import { AppMaterialModule } from './modules/material/material.module';

const DECLARATIONS = [];

const IMPORTS = [
  AppMaterialModule,
  AppFontAwesomeModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  exports: [...IMPORTS]
})
export class AppSharedModule { }
