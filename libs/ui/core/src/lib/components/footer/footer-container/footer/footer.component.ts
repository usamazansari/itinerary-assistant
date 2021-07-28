import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

/**
 * TODO: Cleanup
 *
 * @deprecated - Use from Layouts Library
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'ia-core-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
