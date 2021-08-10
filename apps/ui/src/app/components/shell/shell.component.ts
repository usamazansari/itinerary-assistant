import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-shell',
  template: `<router-outlet></router-outlet>`
})
export class ShellComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
