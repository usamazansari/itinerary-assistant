import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTripViewComponent } from './ia-trip-view.component';

describe('IaTripViewComponent', () => {
  let component: IaTripViewComponent;
  let fixture: ComponentFixture<IaTripViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaTripViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaTripViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
