import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaCoreTodoComponent } from './ia-core-todo.component';

describe('IaCoreTodoComponent', () => {
  let component: IaCoreTodoComponent;
  let fixture: ComponentFixture<IaCoreTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaCoreTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaCoreTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
