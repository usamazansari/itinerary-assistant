import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineLoaderContainerComponent } from './inline-loader-container.component';

describe('LoaderContainerComponent', () => {
  let component: InlineLoaderContainerComponent;
  let fixture: ComponentFixture<InlineLoaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineLoaderContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineLoaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
