import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryHomeContainerComponent } from './temporary-home-container.component';

describe('TemporaryHomeContainerComponent', () => {
  let component: TemporaryHomeContainerComponent;
  let fixture: ComponentFixture<TemporaryHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
