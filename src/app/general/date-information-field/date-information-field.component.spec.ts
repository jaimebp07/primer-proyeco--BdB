import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateInformationFieldComponent } from './date-information-field.component';

describe('DateInformationFieldComponent', () => {
  let component: DateInformationFieldComponent;
  let fixture: ComponentFixture<DateInformationFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateInformationFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateInformationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
