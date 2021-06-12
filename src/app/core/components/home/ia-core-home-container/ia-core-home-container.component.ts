import { Component, OnInit } from '@angular/core';



import { IaHomeService } from '@ia-core/services/home/ia-home/ia-home.service';

@Component({
  selector: 'app-ia-core-home-container',
  template: `<app-ia-core-home></app-ia-core-home>`
})
export class IaCoreHomeContainerComponent implements OnInit {

  constructor(
    private _service: IaHomeService
  ) { }

  ngOnInit(): void { }
}
