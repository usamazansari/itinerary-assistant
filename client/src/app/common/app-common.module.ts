import { NgModule } from '@angular/core'

import { AppMaterialModule } from '@common/library/app-material/app-material.module'
import { AppFireModule } from '@common/library/app-fire/app-fire.module'
import { AppFontAwesomeModule } from '@common/library/app-fontawesome/app-fontawesome.module'
import { AppStateModule } from '@common/store/app-state.module'

const IMPORTS = [
  AppFireModule,
  AppMaterialModule,
  AppFontAwesomeModule,
  AppStateModule
]

const EXPORTS = [
  AppFireModule,
  AppMaterialModule,
  AppFontAwesomeModule,
  AppStateModule
]

@NgModule({
  imports: [...IMPORTS],
  exports: [...EXPORTS]
})
export class AppCommonModule { }
