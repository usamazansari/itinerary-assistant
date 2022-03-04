import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ia-components-loader-container',
  template: ` <ia-components-loader></ia-components-loader>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderContainerComponent {}
