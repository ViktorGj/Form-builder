import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePopUpComponent } from './share-pop-up.component';

describe('SharePopUpComponent', () => {
  let component: SharePopUpComponent;
  let fixture: ComponentFixture<SharePopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
