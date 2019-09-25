import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOnSharePopupComponent } from './save-on-share-popup.component';

describe('SaveOnSharePopupComponent', () => {
  let component: SaveOnSharePopupComponent;
  let fixture: ComponentFixture<SaveOnSharePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveOnSharePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOnSharePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
