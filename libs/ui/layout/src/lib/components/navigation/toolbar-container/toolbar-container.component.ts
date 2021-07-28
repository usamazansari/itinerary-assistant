import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-layout-toolbar-container',
  template: `<ia-layout-toolbar></ia-layout-toolbar>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
