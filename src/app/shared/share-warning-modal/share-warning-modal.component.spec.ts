import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareWarningModalComponent } from './share-warning-modal.component';

describe('ShareWarningModalComponent', () => {
  let component: ShareWarningModalComponent;
  let fixture: ComponentFixture<ShareWarningModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareWarningModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareWarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
