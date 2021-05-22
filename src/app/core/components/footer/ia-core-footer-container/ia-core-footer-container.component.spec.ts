import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreFooterContainerComponent } from './ia-core-footer-container.component';

describe('IaCoreFooterContainerComponent', () => {
  let component: IaCoreFooterContainerComponent;
  let fixture: ComponentFixture<IaCoreFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreFooterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
