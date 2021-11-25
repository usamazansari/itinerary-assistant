import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContainerComponent } from './footer-container.component';

describe('FooterContainerComponent', () => {
  let component: FooterContainerComponent;
  let fixture: ComponentFixture<FooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
