import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'ia-layout-sidenav-container',
  template: `<ia-layout-sidenav></ia-layout-sidenav>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavContainerComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}
