import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ia-elements-button-container',
  template: `
    <ia-elements-button
    ></ia-elements-button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonContainerComponent { }
