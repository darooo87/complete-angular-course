import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseCoursesComponent } from './database-courses.component';

describe('DatabaseCoursesComponent', () => {
  let component: DatabaseCoursesComponent;
  let fixture: ComponentFixture<DatabaseCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
