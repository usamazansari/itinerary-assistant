import { NgModule } from '@angular/core';

import { MaterialModules } from '.';

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})
export class MaterialModule {}
