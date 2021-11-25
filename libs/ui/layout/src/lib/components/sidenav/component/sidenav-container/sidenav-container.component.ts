import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'ia-layout-sidenav-container',
  template: `<ia-layout-sidenav></ia-layout-sidenav>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent { }
