import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostsListComponent } from './http-posts-list.component';

describe('HttpPostsListComponent', () => {
  let component: HttpPostsListComponent;
  let fixture: ComponentFixture<HttpPostsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
