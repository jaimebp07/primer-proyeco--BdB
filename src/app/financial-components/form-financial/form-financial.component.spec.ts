import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RecordFieldComponent } from 'src/app/general/record-field/record-field.component';

import { FormFinancialComponent } from './form-financial.component';

describe('FormFinancialComponent', () => {
  let component: FormFinancialComponent;
  let fixture: ComponentFixture<FormFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinancialComponent,
      // 
      RecordFieldComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [FormBuilder],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
