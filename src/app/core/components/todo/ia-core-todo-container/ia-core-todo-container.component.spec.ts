import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreTodoContainerComponent } from './ia-core-todo-container.component';

describe('IaCoreTodoContainerComponent', () => {
  let component: IaCoreTodoContainerComponent;
  let fixture: ComponentFixture<IaCoreTodoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreTodoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreTodoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
