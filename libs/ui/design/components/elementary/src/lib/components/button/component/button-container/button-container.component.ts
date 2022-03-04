import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ia-components-button-container',
  template: ` <ia-components-button></ia-components-button> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonContainerComponent {}
