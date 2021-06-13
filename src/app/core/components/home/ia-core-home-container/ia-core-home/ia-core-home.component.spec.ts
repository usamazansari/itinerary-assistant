import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreHomeComponent } from './ia-core-home.component';

describe('IaCoreHomeComponent', () => {
  let component: IaCoreHomeComponent;
  let fixture: ComponentFixture<IaCoreHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
