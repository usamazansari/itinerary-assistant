import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreSidenavComponent } from './ia-core-sidenav.component';

describe('IaCoreSidenavComponent', () => {
  let component: IaCoreSidenavComponent;
  let fixture: ComponentFixture<IaCoreSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
