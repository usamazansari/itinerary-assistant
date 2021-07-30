import { NgModule } from '@angular/core';

import { MaterialModules } from '.';

const imports = [...MaterialModules];
const exports = [...MaterialModules];

@NgModule({ imports, exports })
export class MaterialModule {}
