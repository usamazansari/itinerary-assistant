import { NgModule } from '@angular/core';

import { AppFireModule } from './modules/fire/fire.module';
import { AppFontAwesomeModule } from './modules/fontawesome/fontawesome.module';
import { AppMaterialModule } from './modules/material/material.module';

const DECLARATIONS: never[] | any[] = [];

const IMPORTS = [
  AppFireModule,
  AppMaterialModule,
  AppFontAwesomeModule
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...IMPORTS],
  exports: [...IMPORTS]
})
export class AppSharedModule { }
