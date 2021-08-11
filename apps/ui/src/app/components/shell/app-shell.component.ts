import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-app-shell',
  template: `<router-outlet></router-outlet>`
})
export class AppShellComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
