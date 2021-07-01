import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaTripShellComponent } from './ia-trip-shell.component';

describe('IaTripShellComponent', () => {
  let component: IaTripShellComponent;
  let fixture: ComponentFixture<IaTripShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaTripShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaTripShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
