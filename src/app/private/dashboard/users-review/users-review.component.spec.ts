import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersReviewComponent } from './users-review.component';

describe('UsersReviewComponent', () => {
  let component: UsersReviewComponent;
  let fixture: ComponentFixture<UsersReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
