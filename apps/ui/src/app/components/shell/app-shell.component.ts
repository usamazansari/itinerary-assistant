import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

@Component({
  selector: 'ia-app-shell',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppShellComponent { }
