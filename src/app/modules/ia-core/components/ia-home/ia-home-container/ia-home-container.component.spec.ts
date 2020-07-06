import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaHomeContainerComponent } from './ia-home-container.component';

describe('IaHomeContainerComponent', () => {
  let component: IaHomeContainerComponent;
  let fixture: ComponentFixture<IaHomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaHomeContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
