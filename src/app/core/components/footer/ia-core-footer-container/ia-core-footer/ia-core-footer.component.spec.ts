import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreFooterComponent } from './ia-core-footer.component';

describe('IaCoreFooterComponent', () => {
  let component: IaCoreFooterComponent;
  let fixture: ComponentFixture<IaCoreFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
