import { Component, OnInit } from '@angular/core';
import { IaCoreService } from '@ia-core/services/ia-core.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ia-navbar-container',
  templateUrl: './ia-navbar-container.component.html',
  styleUrls: ['./ia-navbar-container.component.scss']
})
export class IaNavbarContainerComponent implements OnInit {

  navbar$: Observable<{ [key: string]: any }>;
  private ASSET_NAVBAR = '[IA App Asset] navbar';

  constructor(private coreService: IaCoreService) { }

  ngOnInit(): void {
    this.navbar$ = this.coreService.getAsset(this.ASSET_NAVBAR);
  }

}
