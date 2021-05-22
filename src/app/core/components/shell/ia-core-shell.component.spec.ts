import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreShellComponent } from './ia-core-shell.component';

describe('AppShellComponent', () => {
  let component: IaCoreShellComponent;
  let fixture: ComponentFixture<IaCoreShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaCoreShellComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
