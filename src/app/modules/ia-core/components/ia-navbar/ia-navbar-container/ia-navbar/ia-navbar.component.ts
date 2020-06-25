import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ia-navbar',
  templateUrl: './ia-navbar.component.html',
  styleUrls: ['./ia-navbar.component.scss']
})
export class IaNavbarComponent implements OnInit {

  bs$: BehaviorSubject<{ [key: string]: any }>;

  @Input()
  set navbar(updatedValue: { [key: string]: any }) { this.bs$.next(updatedValue); };
  get navbar(): { [key: string]: any } { return this.bs$.getValue(); };

  constructor() {
    this.bs$ = new BehaviorSubject<{ [key: string]: any }>({});
  }

  ngOnInit(): void {
    console.log(this.navbar);
  }

}
