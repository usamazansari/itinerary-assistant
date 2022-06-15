import { ComponentFixture, TestBed } from '@angular/core/testing';

import type { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HomeVMStub } from '../../../constants';
import type { HomeVMModel } from '../../../models';
import { HomeService } from '../../../services';

import { HomeContainerComponent } from './home-container.component';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  const serviceStub: Partial<HomeService> = {
    fetchAssets: (): void => {},
    watchVm$: (): Observable<HomeVMModel> => of(HomeVMStub),
    gotoCreateTrip: (): void => {},
    gotoViewTrip: (): void => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeContainerComponent],
      providers: [{ provide: HomeService, useValue: serviceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
