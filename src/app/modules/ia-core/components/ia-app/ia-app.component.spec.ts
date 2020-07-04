import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaAppComponent } from './ia-app.component';

describe('IaAppComponent', () => {
  let component: IaAppComponent;
  let fixture: ComponentFixture<IaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
