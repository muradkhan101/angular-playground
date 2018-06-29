import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePillPickerComponent } from './date-pill-picker.component';

describe('DatePillPickerComponent', () => {
  let component: DatePillPickerComponent;
  let fixture: ComponentFixture<DatePillPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePillPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePillPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
