import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * @deprecated - Use from Layouts Library
 *
 * @export
 * @class FooterContainerComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-core-footer-container',
  template: `<ia-core-footer></ia-core-footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
