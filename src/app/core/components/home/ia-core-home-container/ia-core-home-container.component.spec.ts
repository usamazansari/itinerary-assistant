import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreHomeContainerComponent } from './ia-core-home-container.component';

describe('IaCoreHomeContainerComponent', () => {
  let component: IaCoreHomeContainerComponent;
  let fixture: ComponentFixture<IaCoreHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
