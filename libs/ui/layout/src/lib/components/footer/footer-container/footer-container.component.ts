import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-layout-footer-container',
  template: `<ia-layout-footer></ia-layout-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
