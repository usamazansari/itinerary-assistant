import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTripCreateContainerComponent } from './ia-trip-create-container.component';

describe('IaTripCreateContainerComponent', () => {
  let component: IaTripCreateContainerComponent;
  let fixture: ComponentFixture<IaTripCreateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaTripCreateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaTripCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
