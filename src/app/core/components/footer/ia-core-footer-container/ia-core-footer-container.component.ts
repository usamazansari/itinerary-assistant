import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { IaCoreFooterAssetsModel } from '@ia-core/models/footer/ia-core-footer.model';
import { IaCoreFooterService } from '@ia-core/services/footer/ia-core-footer/ia-core-footer.service';

@Component({
  selector: 'app-ia-core-footer-container',
  template: `<app-ia-core-footer [assets] = "assets$ | async"></app-ia-core-footer>`,
  providers: [IaCoreFooterService]
})
export class IaCoreFooterContainerComponent implements OnInit {

  assets$: Observable<IaCoreFooterAssetsModel>;

  constructor(private _service: IaCoreFooterService) { }

  ngOnInit(): void {
    this._service.fetchAssets();

    this.assets$ = this._service.watchAssets$();
  }

}
