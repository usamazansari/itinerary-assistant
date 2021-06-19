import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTripCreateComponent } from './ia-trip-create.component';

describe('IaTripCreateComponent', () => {
  let component: IaTripCreateComponent;
  let fixture: ComponentFixture<IaTripCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaTripCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaTripCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
