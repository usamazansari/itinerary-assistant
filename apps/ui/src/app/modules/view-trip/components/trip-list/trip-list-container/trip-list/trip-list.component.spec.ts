import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TripListComponent } from './trip-list.component';

describe('TripListComponent', () => {
  let component: TripListComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TripListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripListComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    fixture.detectChanges();
  });

  it('TripListComponent should be created', () => {
    expect(component).toBeTruthy();
  });

  it('TripListComponent should display when API Call is triggered', () => {
    const divDebugEl: DebugElement = debugEl.query(By.css('#skeleton-container-div'));
    const div: HTMLDivElement = divDebugEl.nativeElement;
    component.flags.shell.progress = true;
    // fixture.detectChanges();
    expect(div).toBeDefined();
  });
});
