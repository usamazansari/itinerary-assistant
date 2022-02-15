import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import type { TripListDataModel } from '../../../../imports/models';

import {
  TripListDataStub,
  TripListErrorStub,
  TripListFlagStub
} from '../../../../constants';

import { TripListComponent } from './trip-list.component';

describe('TripListComponent', () => {
  let component: TripListComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TripListComponent>;

  const singleTripStub: TripListDataModel = {
    trips: [
      {
        title: 'Single Trip',
        rating: 3.5,
        expense: { amount: 25000, currency: 'INR' },
        tenure: { start: '', end: '' }
      }
    ]
  };

  const multipleTripsStub: TripListDataModel = {
    trips: [
      {
        title: 'Trip 1',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 5000, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 2',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 50000, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 3',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 55000, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 4',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 5500, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 5',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 15000, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 6',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 25000, currency: 'INR' },
        tenure: { start: '', end: '' }
      },
      {
        title: 'Trip 7',
        rating: Math.random() * 5,
        expense: { amount: Math.random() * 52000, currency: 'INR' },
        tenure: { start: '', end: '' }
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [TripListComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripListComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    component.data = { ...TripListDataStub };
    component.error = { ...TripListErrorStub };
    component.flags = { ...TripListFlagStub };
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
    const skeleton: HTMLElement | null = debugEl.query(
      By.css('ia-trip-list-skeleton')
    )?.nativeElement;
    expect(skeleton).not.toBeNull();
    expect(skeleton).not.toBeUndefined();
  });

  it('should render trip cards when data is received', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        success: true
      }
    };
    fixture.detectChanges();
    const div: HTMLElement | null = debugEl.query(
      By.css('#trip-list-card-holder')
    )?.nativeElement;
    expect(div).not.toBeNull();
    expect(div).not.toBeUndefined();
  });

  it('should display a single trip', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        success: true
      }
    };
    component.data = { ...singleTripStub };
    fixture.detectChanges();
    const div: HTMLElement | null = debugEl.query(
      By.css('#trip-list-card-holder')
    )?.nativeElement;
    const childrenCount: number = div?.children.length ?? 0;
    expect(childrenCount).toBe(singleTripStub.trips.length);
  });

  it('should display multiple trips', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        success: true
      }
    };
    component.data = { ...multipleTripsStub };
    fixture.detectChanges();
    const div: HTMLElement | null = debugEl.query(
      By.css('#trip-list-card-holder')
    )?.nativeElement;
    const childrenCount: number = div?.children.length ?? 0;
    expect(childrenCount).toBe(multipleTripsStub.trips.length);
  });

  it('should display a card when no trips are returned with a message "No Trips Yet"', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        success: true
      }
    };
    component.data = { ...TripListDataStub };
    fixture.detectChanges();

    const card: HTMLElement | null = debugEl.query(
      By.css('#no-trip-card')
    )?.nativeElement;
    expect(card).not.toBeNull();
    expect(card).not.toBeUndefined();

    const paragraph: HTMLElement | null | undefined =
      card?.querySelector('p');
    expect(paragraph).not.toBeNull();
    expect(paragraph).not.toBeUndefined();

    const text: string = (paragraph?.textContent ?? '').trim();
    expect(text).toBe('No Trips Yet');
  });

  it('should display error card when server is not reachable with a message "Server Down"', () => {
    component.flags = {
      ...component.flags,
      shell: {
        ...component.flags.shell,
        fail: true
      }
    };
    component.error = { message: 'Server Down' };
    fixture.detectChanges();

    const card: HTMLElement | null | undefined = debugEl.query(
      By.css('#trip-error-card')
    )?.nativeElement;
    expect(card).not.toBeNull();
    expect(card).not.toBeUndefined();

    const paragraph: HTMLElement | null | undefined =
      card?.querySelector('p');
    expect(paragraph).not.toBeNull();
    expect(paragraph).not.toBeUndefined();

    const text: string = (paragraph?.textContent ?? '').trim();
    expect(text).toBe('Server Down');
  });
});
