import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaNavbarComponent } from './ia-navbar.component';

describe('IaNavbarComponent', () => {
  let component: IaNavbarComponent;
  let fixture: ComponentFixture<IaNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
