import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryHomeComponent } from './temporary-home.component';

describe('TemporaryHomeComponent', () => {
  let component: TemporaryHomeComponent;
  let fixture: ComponentFixture<TemporaryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
