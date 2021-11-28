import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemFormComponent } from './to-do-item-form.component';

describe('ToDoItemFormComponent', () => {
  let component: ToDoItemFormComponent;
  let fixture: ComponentFixture<ToDoItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
