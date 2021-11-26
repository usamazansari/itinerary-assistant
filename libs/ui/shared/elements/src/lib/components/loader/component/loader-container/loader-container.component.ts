import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ia-elements-loader-container',
  template: `<ia-elements-loader></ia-elements-loader>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderContainerComponent { }
