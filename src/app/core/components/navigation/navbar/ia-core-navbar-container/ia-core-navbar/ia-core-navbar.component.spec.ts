import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreNavbarComponent } from './ia-core-navbar.component';

describe('IaCoreNavbarComponent', () => {
  let component: IaCoreNavbarComponent;
  let fixture: ComponentFixture<IaCoreNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
