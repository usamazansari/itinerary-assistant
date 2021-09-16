import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TripListComponent } from './trip-list.component';

describe('TripListComponent', () => {
  let component: TripListComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TripListComponent>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({ declarations: [TripListComponent] })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display skeleton when API Call is triggered', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        progress: true
      }
    };
    fixture.detectChanges();
    const skeleton: HTMLDivElement | null = debugEl.query(By.css('div#skeleton-container-div')).nativeElement;
    expect(skeleton).not.toBeNull();
  });
});
