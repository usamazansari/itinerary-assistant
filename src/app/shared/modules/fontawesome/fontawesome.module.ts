import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule]
})
export class AppFontAwesomeModule {
  // constructor(lib: FaIconLibrary) {
  //   lib.addIconPacks(fas, far, fab)
  // }
}
