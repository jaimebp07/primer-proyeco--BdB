
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { FormCustomerComponent } from './form-customer.component';

describe('FormCustomerComponent', () => {
  let component: FormCustomerComponent;
  let fixture: ComponentFixture<FormCustomerComponent>;
  const route = ({ data: of({ label: 'hello' }) } as any) as ActivatedRoute;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [FormCustomerComponent],
      schemas: [NO_ERRORS_SCHEMA],
      // providers: [FormBuilder, { provide: ActivatedRoute, useValue: route },
      //   { provide: Router, useValue: mockRouter },]
      providers: [{ provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: mockRouter },]
      
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});