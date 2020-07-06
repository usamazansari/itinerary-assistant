import { Component, OnInit } from '@angular/core';
import { IaCoreService } from '@ia-core/services/ia-core.service';
import { Observable } from 'rxjs';
import { Dictionary } from '@ngrx/entity';
import { IaHomeModel } from '@ia-core/models/ia-home.model';

@Component({
  selector: 'app-ia-home-container',
  templateUrl: './ia-home-container.component.html',
  styleUrls: ['./ia-home-container.component.scss']
})
export class IaHomeContainerComponent implements OnInit {

  home$: Observable<Dictionary<IaHomeModel>>;
  homeID$: Observable<string>;

  constructor(
    private coreService: IaCoreService
  ) { }

  ngOnInit(): void {
    const { assets, entityID } = this.coreService.getHomeAssets();
    this.home$ = assets;
    this.homeID$ = entityID;
  }

}
