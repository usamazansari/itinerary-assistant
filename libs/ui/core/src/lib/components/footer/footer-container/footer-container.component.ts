import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ia-core-footer-container',
  template: `<ia-core-footer></ia-core-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
