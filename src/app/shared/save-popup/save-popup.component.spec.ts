import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePopupComponent } from './save-popup.component';

describe('SavePopupComponent', () => {
  let component: SavePopupComponent;
  let fixture: ComponentFixture<SavePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
