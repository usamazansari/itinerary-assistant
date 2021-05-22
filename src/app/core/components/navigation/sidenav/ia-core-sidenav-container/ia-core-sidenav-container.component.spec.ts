import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreSidenavContainerComponent } from './ia-core-sidenav-container.component';

describe('IaCoreSidenavContainerComponent', () => {
  let component: IaCoreSidenavContainerComponent;
  let fixture: ComponentFixture<IaCoreSidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreSidenavContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreSidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
