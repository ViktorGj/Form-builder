import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePopUpComponent } from './save-pop-up.component';

describe('SavePopUpComponent', () => {
  let component: SavePopUpComponent;
  let fixture: ComponentFixture<SavePopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
