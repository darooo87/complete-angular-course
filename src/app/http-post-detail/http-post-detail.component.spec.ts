import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostDetailComponent } from './http-post-detail.component';

describe('HttpPostDetailComponent', () => {
  let component: HttpPostDetailComponent;
  let fixture: ComponentFixture<HttpPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
