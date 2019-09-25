import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePopupComponent } from './share-popup.component';

describe('SharePopupComponent', () => {
  let component: SharePopupComponent;
  let fixture: ComponentFixture<SharePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
