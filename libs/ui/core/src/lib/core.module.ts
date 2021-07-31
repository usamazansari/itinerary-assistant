import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LumberjackModule } from '@ngworker/lumberjack';
import { LumberjackConsoleDriverModule } from '@ngworker/lumberjack/console-driver';

const declarations: never[] = [];

const imports = [
  CommonModule,
  LumberjackModule.forRoot(),
  LumberjackConsoleDriverModule.forRoot()
];
const exports = [LumberjackModule, LumberjackConsoleDriverModule];

@NgModule({ imports, declarations, exports })
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
