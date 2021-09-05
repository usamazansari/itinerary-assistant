import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineLoaderComponent } from './inline-loader.component';

describe('LoaderComponent', () => {
  let component: InlineLoaderComponent;
  let fixture: ComponentFixture<InlineLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineLoaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
