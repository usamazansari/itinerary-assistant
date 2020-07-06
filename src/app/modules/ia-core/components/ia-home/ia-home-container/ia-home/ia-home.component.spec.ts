import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaHomeComponent } from './ia-home.component';

describe('IaHomeComponent', () => {
  let component: IaHomeComponent;
  let fixture: ComponentFixture<IaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
